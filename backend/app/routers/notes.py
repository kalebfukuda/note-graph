from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.postgres import SessionLocal
from app.models.note import Note

# To organize endpoints related to text analysis
router = APIRouter(prefix="/notes", tags=["notes"])

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=list[dict])
def get_notes(db: Session = Depends(get_db)):
    """
    Returns all notes from the database
    """
    notes = db.query(Note).all()
    return [
        {
            "id": note.id,
            "title": note.title,
            "content": note.content,
            "created_at": note.created_at.isoformat(),
        }
        for note in notes
    ]