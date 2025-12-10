from fastapi import APIRouter, UploadFile, File, Form
from app.core.nlp_pipeline import process_text
from app.core.ocr import run_ocr
from app.models.schemas import ParseResponse

router = APIRouter()

@router.post("/parse", response_model=ParseResponse)
async def parse_input(
    text: str | None = Form(default=None),
    image: UploadFile | None = File(default=None)
)