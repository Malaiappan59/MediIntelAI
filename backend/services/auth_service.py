from backend.schemas.auth import LoginRequest, PlaceholderAuthResponse


class AuthService:
    """Placeholder service reserved for future authentication workflows."""

    def login(self, _: LoginRequest) -> PlaceholderAuthResponse:
        return PlaceholderAuthResponse(
            message="Authentication is intentionally not implemented in this scaffold.",
            status="not-implemented",
        )

