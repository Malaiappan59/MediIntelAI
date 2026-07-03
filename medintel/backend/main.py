from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.middleware.request_context import RequestContextMiddleware
from backend.routes.auth import router as auth_router
from backend.routes.health import router as health_router
from backend.utils.settings import get_settings

settings = get_settings()


@asynccontextmanager
async def lifespan(_: FastAPI):
    yield


app = FastAPI(
    title="MediIntel API",
    description="Enterprise healthcare backend scaffold",
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(RequestContextMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.backend_cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router, prefix="/api/v1", tags=["Health"])
app.include_router(auth_router, prefix="/api/v1/auth", tags=["Authentication"])


@app.get("/", tags=["Root"])
def read_root():
    return {
        "application": "MediIntel API",
        "status": "ok",
        "message": "Scaffolding phase only. Business logic is intentionally not implemented.",
    }
