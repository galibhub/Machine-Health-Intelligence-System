import joblib
from pathlib import Path

from backend.utils.feature_engineering import (
    create_features
)

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = (
    BASE_DIR
    / "models"
    / "Final_Model.pkl"
)

model = joblib.load(
    MODEL_PATH
)


def predict_machine_failure(data):

    features = create_features(
        data
    )

    prediction = model.predict(
        features
    )[0]

    probability = (
        model.predict_proba(
            features
        )[0][1]
        * 100
    )

    print(
        "Prediction:",
        prediction
    )

    print(
        "Probability:",
        probability
    )

    return {
        "prediction": (
            "Failure"
            if prediction == 1
            else "No Failure"
        ),
        "probability": float(
            round(
                probability,
                2
            )
        )
    }