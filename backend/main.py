from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.schemas.schemas import (
    PredictionRequest,
    PredictionResponse
)

from backend.services.prediction_service import (
    predict_machine_failure
)

app = FastAPI(
    title="Machine Health Intelligence System",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
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