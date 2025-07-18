# AI Chatbot with PDF Upload

## Description
This project is a full-stack AI chatbot application that supports uploading PDFs for context-based queries.

## Features
- Upload PDF files and extract text content
- Chat with the AI bot using the uploaded PDF context
- Dark and Light themes
- Responsive UI with React and Styled Components
- FastAPI backend with Google Gemini API integration
##
-pip install fastapi uvicorn python-dotenv google-genai pymupdf

## Tech Stack
- Frontend: React, styled-components, axios
- Backend: FastAPI, PyMuPDF, Google Gemini API
- Deployment: (Mention your deployment platform if done)

## Getting Started

### Prerequisites
- Python 3.10+
- Node.js and npm
- Google API key for Gemini

### Installation

#### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
