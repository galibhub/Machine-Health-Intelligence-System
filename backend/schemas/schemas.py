from pydantic import BaseModel
from typing import List, Optional


class PredictionRequest(BaseModel):

    company_name: Optional[str] = None

    machine_id: Optional[str] = None

    machine_type: str

    air_temperature: float

    process_temperature: float

    rotational_speed: int

    torque: float

    tool_wear: int


class PredictionResponse(BaseModel):

    prediction: str

    probability: float

    risk_level: str

    health_score: int

    root_causes: List[str]

    recommendations: List[str]