from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from schemas.schemas import (
    PredictionRequest,
    PredictionResponse
)

from services.prediction_service import (
    predict_machine_failure
)

app = FastAPI(
    title="Machine Health Intelligence System",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        origin.strip()
        for origin in os.getenv(
            "BACKEND_CORS_ORIGINS",
            "http://localhost:5173"
        ).split(",")
        if origin.strip()
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():

    return {
        "message": "API Running Successfully"
    }


@app.post(
    "/predict",
    response_model=PredictionResponse
)
def predict(
    data: PredictionRequest
):

    result = predict_machine_failure(
        data
    )

    return result

# dummy apin for web monitor
@app.get("/me")
def me():
    return {
        "name": "Ibrahim Ahmed Galib",
        "role": "Machine Learning Engineer & Full Stack Developer",
        "project": "Machine Health Intelligence System",
        "university": "Daffodil International University",
        "department": "Computer Science and Engineering",
        "github": "https://github.com/galibhub",
        "api_status": "running"
    }