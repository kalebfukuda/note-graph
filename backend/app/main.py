from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import analyze

app = FastAPI()

# Allow frontend (http://localhost:5173) to connect to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Added router for analyze endpoints
app.include_router(analyze.router)
