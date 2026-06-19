def generate_recommendations(
    risk_level,
    root_causes,
    model_explanations
):

    recommendations = []

    # -------------------------
    # Risk Based Actions
    # -------------------------

    if risk_level == "Critical":

        recommendations.append(
            {
                "priority": "Immediate",
                "action": (
                    "Schedule machine inspection "
                    "within 24 hours."
                )
            }
        )

    elif risk_level == "High":

        recommendations.append(
            {
                "priority": "High",
                "action": (
                    "Perform preventive maintenance "
                    "during next operating window."
                )
            }
        )

    # -------------------------
    # SHAP Based Actions
    # -------------------------

    feature_scores = {
        item["feature"]: item["contribution"]
        for item in model_explanations
    }

    # SHAP output already sorted
    top_features = {
        item["feature"]
        for item in model_explanations[:4]
    }

    # Stress Index

    if "stress_index" in top_features:

        stress_score = feature_scores.get(
            "stress_index",
            0
        )

        priority = (
            "Immediate"
            if stress_score >= 3
            else "High"
        )

        recommendations.append(
            {
                "priority": priority,
                "action": (
                    "Inspect spindle, bearings "
                    "and mechanical load conditions."
                )
            }
        )

    # Tool Wear

    if "Tool_wear_min_" in top_features:

        wear_score = feature_scores.get(
            "Tool_wear_min_",
            0
        )

        priority = (
            "High"
            if wear_score >= 1
            else "Medium"
        )

        recommendations.append(
            {
                "priority": priority,
                "action": (
                    "Inspect or replace cutting tools."
                )
            }
        )

    # Torque

    if "Torque_Nm_" in top_features:

        torque_score = feature_scores.get(
            "Torque_Nm_",
            0
        )

        priority = (
            "High"
            if torque_score >= 1
            else "Medium"
        )

        recommendations.append(
            {
                "priority": priority,
                "action": (
                    "Check drivetrain and "
                    "lubrication system."
                )
            }
        )

    # Rotational Speed

    if "Rotational_speed_rpm_" in top_features:

        recommendations.append(
            {
                "priority": "Medium",
                "action": (
                    "Review machine operating speed "
                    "and workload distribution."
                )
            }
        )

    # -------------------------
    # Engineering Rule Actions
    # -------------------------

    factors = {
        item["factor"]
        for item in root_causes
    }

    if "Temperature Gap" in factors:

        recommendations.append(
            {
                "priority": "Medium",
                "action": (
                    "Inspect cooling and "
                    "ventilation systems."
                )
            }
        )

    if "Power" in factors:

        recommendations.append(
            {
                "priority": "Medium",
                "action": (
                    "Review power consumption "
                    "and load balancing."
                )
            }
        )

    # -------------------------
    # Remove Duplicate Actions
    # -------------------------

    unique_recommendations = []

    seen_actions = set()

    for recommendation in recommendations:

        action = recommendation["action"]

        if action not in seen_actions:

            unique_recommendations.append(
                recommendation
            )

            seen_actions.add(
                action
            )

    return unique_recommendations