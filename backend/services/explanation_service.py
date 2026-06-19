def analyze_root_causes(data):

    causes = []

    temp_gap = (
        data.process_temperature
        - data.air_temperature
    )

    power = (
        data.rotational_speed
        * data.torque
    )

    wear_rate = (
        data.tool_wear
        / data.rotational_speed
    )

    stress_index = (
        power
        * wear_rate
    )

    # --------------------------
    # Stress Index
    # --------------------------

    if stress_index >= 9373:

        causes.append(
            {
                "factor": "Stress Index",
                "severity": "Critical",
                "value": round(
                    stress_index,
                    2
                ),
                "message": (
                    "Machine stress index is in "
                    "the top 5% of observed values."
                )
            }
        )

    elif stress_index >= 8280:

        causes.append(
            {
                "factor": "Stress Index",
                "severity": "High",
                "value": round(
                    stress_index,
                    2
                ),
                "message": (
                    "Machine stress index is "
                    "significantly elevated."
                )
            }
        )

    # --------------------------
    # Power
    # --------------------------

    if power >= 76744:

        causes.append(
            {
                "factor": "Power",
                "severity": "Critical",
                "value": round(
                    power,
                    2
                ),
                "message": (
                    "Power load exceeds normal "
                    "operating conditions."
                )
            }
        )

    elif power >= 72962:

        causes.append(
            {
                "factor": "Power",
                "severity": "High",
                "value": round(
                    power,
                    2
                ),
                "message": (
                    "High power demand detected."
                )
            }
        )

    # --------------------------
    # Tool Wear
    # --------------------------

    if data.tool_wear >= 206:

        causes.append(
            {
                "factor": "Tool Wear",
                "severity": "Critical",
                "value": data.tool_wear,
                "message": (
                    "Tool wear is within the "
                    "highest 5% of observed values."
                )
            }
        )

    elif data.tool_wear >= 195:

        causes.append(
            {
                "factor": "Tool Wear",
                "severity": "High",
                "value": data.tool_wear,
                "message": (
                    "Tool wear is significantly high."
                )
            }
        )

    # --------------------------
    # Torque
    # --------------------------

    if data.torque >= 56:

        causes.append(
            {
                "factor": "Torque",
                "severity": "Critical",
                "value": data.torque,
                "message": (
                    "Mechanical load exceeds "
                    "95th percentile."
                )
            }
        )

    elif data.torque >= 53:

        causes.append(
            {
                "factor": "Torque",
                "severity": "High",
                "value": data.torque,
                "message": (
                    "Mechanical load is elevated."
                )
            }
        )

    # --------------------------
    # Temperature Gap
    # --------------------------

    if temp_gap >= 15:

        causes.append(
            {
                "factor": "Temperature Gap",
                "severity": "Critical",
                "value": round(
                    temp_gap,
                    2
                ),
                "message": (
                    "Extreme temperature difference detected."
                )
            }
        )

    elif temp_gap >= 12:

        causes.append(
            {
                "factor": "Temperature Gap",
                "severity": "High",
                "value": round(
                    temp_gap,
                    2
                ),
                "message": (
                    "Large temperature difference detected."
                )
            }
        )

    return causes