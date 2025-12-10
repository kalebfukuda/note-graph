from fastapi import APIRouter
from pydantic import BaseModel
from app.services.ai_service import analyze_text

# To organize endpoints related to text analysis
router = APIRouter(prefix="/analyze")

# Request model for analysis input
class AnalyzeRequest(BaseModel):
    text: str

@router.post("/")
async def analyze(request: AnalyzeRequest):#AnalyzeRequest -> AnalyzeResponse using pydantic
    """
    Recebe o texto do usuário, envia para a IA,
    e retorna um JSON com:
      - nodes
      - edges
      - flags de ambiguidade
    """
    response = analyze_text(request.text)
    return response