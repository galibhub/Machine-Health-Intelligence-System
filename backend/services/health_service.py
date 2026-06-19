def calculate_health_score(
    probability: float
) -> int:

    probability = max(
        0,
        min(
            100,
            probability
        )
    )

    return int(
        round(
            100 - probability
        )
    )