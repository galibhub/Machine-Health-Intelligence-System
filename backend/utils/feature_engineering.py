import pandas as pd



def create_features(data):

    air_temp_k = data.air_temperature

    process_temp_k = data.process_temperature

    temp_gap = (
        process_temp_k
        - air_temp_k
    )

    power = (
        data.rotational_speed
        * data.torque
    )

    wear_rate = (
        data.tool_wear
        / data.rotational_speed
    )

    heat_stress = (
        temp_gap
        * data.torque
    )

    stress_index = (
        power
        * wear_rate
    )

#Encoding feature
    type_l = 0
    type_m = 0

    if data.machine_type.upper() == "L":
        type_l = 1

    elif data.machine_type.upper() == "M":
        type_m = 1

# mapping dataset feature with converted feature

    feature_dict = {
    "Air_temperature_K_": air_temp_k,
    "Process_temperature_K_": process_temp_k,
    "Rotational_speed_rpm_": data.rotational_speed,
    "Torque_Nm_": data.torque,
    "Tool_wear_min_": data.tool_wear,
    "temp_gap": temp_gap,
    "power": power,
    "wear_rate": wear_rate,
    "heat_stress": heat_stress,
    "stress_index": stress_index,
    "Type_L": type_l,
    "Type_M": type_m
}

    return pd.DataFrame([feature_dict])
