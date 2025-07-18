from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from models.prompt import Prompt
from services.pdf_utils import extract_text_from_pdf
from services.gemini_client import GeminiClient
from services.pdf_chat import handle_pdf_upload, handle_chat
import os
from dotenv import load_dotenv # type: ignore
from typing import Optional

load_dotenv()
GOOGLE_API_KEY: Optional[str] = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise RuntimeError("GOOGLE_API_KEY not set in environment variables.")

gemini_client = GeminiClient(api_key=GOOGLE_API_KEY)

router = APIRouter()

@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    # Use the service function for upload logic
    return {"message": handle_pdf_upload(file)}

@router.post("/chat")
def chat(prompt: Prompt):
    # Use the service function for chat logic
    return {"response": handle_chat(prompt, gemini_client)} 