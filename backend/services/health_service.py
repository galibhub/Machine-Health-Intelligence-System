def calculate_health_score(
    probability: float,
    root_causes: list
) -> int:

    probability = max(
        0,
        min(
            100,
            probability
        )
    )

    # Base score from probability
    score = 100 - probability

    # Penalty from engineering conditions
    penalty = 0

    for cause in root_causes:

        severity = cause.get(
            "severity",
            ""
        )

        if severity == "Critical":

            penalty += 10

        elif severity == "High":

            penalty += 5

    score -= penalty

    score = max(
        0,
        min(
            100,
            round(score)
        )
    )

    return score