from fastapi import FastAPI

from backend.schemas.schemas import (
    PredictionRequest
)

from backend.services.prediction_service import (
    predict_machine_failure
)

from backend.utils.feature_engineering import (
    create_features
)

app = FastAPI(
    title="Machine Health Intelligence System",
    version="1.0.0"
)

#root
@app.get("/")
def root():

    return {
        "message": "API Running Successfully"
    }


# prediction
@app.post("/predict")
def predict(
    data: PredictionRequest
):

    result = predict_machine_failure(
        data
    )

    return result