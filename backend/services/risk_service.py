def calculate_risk_level(probability):

    if probability < 1:
        return "Low"

    elif probability < 5:
        return "Medium"

    elif probability < 20:
        return "High"

    else:
        return "Critical"