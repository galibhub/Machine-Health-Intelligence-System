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

    # SHAP Based Actions
   

   

    top_features = {
    item["feature"]
    for item in model_explanations
    if item["contribution"] >= 0.5
}

    

    if "stress_index" in top_features:

        recommendations.append(
            {
                "priority": "High",
                "action": (
                    "Inspect spindle, bearings "
                    "and mechanical load conditions."
                )
            }
        )

    if "Tool_wear_min_" in top_features:

        recommendations.append(
            {
                "priority": "High",
                "action": (
                    "Inspect or replace cutting tools."
                )
            }
        )

    if "Torque_Nm_" in top_features:

        recommendations.append(
            {
                "priority": "Medium",
                "action": (
                    "Check drivetrain and lubrication system."
                )
            }
        )

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
                    "Inspect cooling and ventilation systems."
                )
            }
        )

    if "Power" in factors:

        recommendations.append(
            {
                "priority": "Medium",
                "action": (
                    "Review power consumption and load balancing."
                )
            }
        )

    return recommendations