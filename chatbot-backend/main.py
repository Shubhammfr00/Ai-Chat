# Standard library imports
import os
from typing import Optional

# Third-party imports
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv # type: ignore

# Local imports
from api.routes.pdf import router as pdf_router

# Load environment variables
load_dotenv()

# --- Configuration ---
GOOGLE_API_KEY: Optional[str] = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise RuntimeError("GOOGLE_API_KEY not set in environment variables.")

# --- App Initialization ---
app = FastAPI()

# Allow all origins for testing; restrict in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pdf_router)

# --- Routes ---
@app.get("/")
def root():
    """Health check endpoint."""
    return {"message": "Gemini Chatbot Backend with PDF Upload Ready!"}

