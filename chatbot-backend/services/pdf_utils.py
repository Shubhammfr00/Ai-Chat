import fitz  # type: ignore # PyMuPDF


def extract_text_from_pdf(pdf_bytes: bytes) -> str:
    """Extracts and returns all text from a PDF file given as bytes."""
    try:
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        text = "".join(page.get_text() for page in doc)
        return text
    except Exception as e:
        raise ValueError(f"Failed to extract text from PDF: {e}") 