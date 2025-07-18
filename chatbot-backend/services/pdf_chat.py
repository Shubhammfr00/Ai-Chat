from fastapi import UploadFile, HTTPException
from models.prompt import Prompt
from services.pdf_utils import extract_text_from_pdf
from services.gemini_client import GeminiClient

# In-memory storage for PDF text (for demo purposes)
stored_pdf_text: str = ""

def handle_pdf_upload(file: UploadFile) -> str:
    global stored_pdf_text
    try:
        pdf_bytes = file.file.read()
        text = extract_text_from_pdf(pdf_bytes)
        stored_pdf_text = text
        return f"PDF uploaded successfully. Extracted {len(text)} characters."
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to process PDF: {e}")

def handle_chat(prompt: Prompt, gemini_client: GeminiClient) -> str:
    global stored_pdf_text
    try:
        if stored_pdf_text:
            combined_prompt = f"Context from PDF:\n{stored_pdf_text}\n\nUser question: {prompt.message}"
        else:
            combined_prompt = prompt.message
        response_text = gemini_client.generate_content(combined_prompt)
        return response_text
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}") 