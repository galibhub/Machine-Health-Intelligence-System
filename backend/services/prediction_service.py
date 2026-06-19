import joblib
from pathlib import Path

from backend.utils.feature_engineering import (
    create_features
)
from backend.services.risk_service import (
    calculate_risk_level
)

from backend.services.health_service import (
    calculate_health_score
)

from backend.services.explanation_service import (
    analyze_root_causes
)

from backend.services.explainability_service import (
    get_top_contributors
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
print(type(model))

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

    #Risk Level Prediction
    risk_level = calculate_risk_level(
    probability
    )

    #health score
    health_score = calculate_health_score(
    probability
    )
    root_causes = analyze_root_causes(
    data
    )

    model_explanations = (
    get_top_contributors()
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
        ),
        "risk_level": risk_level,
        "health_score": health_score,
        "root_causes": root_causes,
        "model_explanations": model_explanations

    }