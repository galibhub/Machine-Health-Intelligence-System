import shap
import numpy as np


def get_top_contributors(
    model,
    features,
    top_k=5
):

    explainer = shap.TreeExplainer(
        model
    )

    explanation = explainer(
        features
    )

    shap_values = explanation.values

    if isinstance(shap_values, list):
        shap_values = shap_values[1 if len(shap_values) > 1 else 0]

    shap_values = np.asarray(shap_values)

    if shap_values.ndim == 3:
        shap_values = shap_values[0, :, 1 if shap_values.shape[2] > 1 else 0]
    elif shap_values.ndim == 2:
        shap_values = shap_values[0]
    else:
        shap_values = shap_values.reshape(-1)

    feature_names = (
        features.columns.tolist()
    )

    contributions = []

    IGNORE_FEATURES = {
        "Type_L",
        "Type_M"
    }

    for feature, value in zip(
        feature_names,
        shap_values
    ):

        if feature in IGNORE_FEATURES:
            continue

        contributions.append(
            {
                "feature": feature,
                "contribution": round(
                    abs(
                        float(value)
                    ),
                    4
                )
            }
        )

    contributions.sort(
        key=lambda x:
        x["contribution"],
        reverse=True
    )

    return contributions[
        :top_k
    ]
