from pydantic import BaseModel, Field
from typing import List, Optional


class PredictionRequest(BaseModel):

    company_name: Optional[str] = None

    machine_id: Optional[str] = None

    machine_type: str

    air_temperature: float = Field(gt=0)

    process_temperature: float = Field(gt=0)

    rotational_speed: int = Field(gt=0)

    torque: float = Field(ge=0)

    tool_wear: int = Field(ge=0)


class RootCause(BaseModel):

    factor: str

    severity: str

    value: float

    message: str


class ModelExplanation(BaseModel):

    feature: str

    contribution: float



class Recommendation(BaseModel):

    priority: str

    action: str




class PredictionResponse(BaseModel):
    company_name: Optional[str] = None
    machine_id: Optional[str] = None
    machine_type: Optional[str] = None
    prediction: str

    probability: float

    risk_level: str

    health_score: int

    root_causes: List[RootCause]
    model_explanations: List[ModelExplanation]
    recommendations: List[
        Recommendation
    ]



