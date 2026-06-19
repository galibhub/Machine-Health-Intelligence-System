import shap


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

    shap_values = (
        explanation.values[0]
    )

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