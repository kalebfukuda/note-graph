from fastapi import APIRouter, Depends
from app.db.postgres import SessionLocal
from app.models.note import Note

router = APIRouter(prefix="/test")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/create")
def create_test_note(db = Depends(get_db)):
    note = Note(title="Teste rota", content="Criado pela rota /test/create")
    db.add(note)
    db.commit()
    db.refresh(note)
    return note