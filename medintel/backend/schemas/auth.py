from typing import Literal

from pydantic import BaseModel, Field

UserRole = Literal["Inventory Manager", "Pharmacy Manager", "Procurement Manager", "Admin"]


class LoginRequest(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)
    role: UserRole


class PlaceholderAuthResponse(BaseModel):
    message: str
    status: str

