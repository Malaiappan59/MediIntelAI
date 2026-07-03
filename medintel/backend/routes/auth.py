from fastapi import APIRouter, HTTPException, status

from backend.schemas.auth import LoginRequest, PlaceholderAuthResponse

router = APIRouter()


@router.post("/login", response_model=PlaceholderAuthResponse)
def login(_: LoginRequest) -> PlaceholderAuthResponse:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Authentication business logic is not implemented in the scaffolding phase.",
    )


@router.post("/logout", response_model=PlaceholderAuthResponse)
def logout() -> PlaceholderAuthResponse:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Logout handling is reserved for a later implementation phase.",
    )

