# MediIntel Deployment Guide

## Railway

This scaffold is configured for a direct Railway deployment using the root `Dockerfile`.

### Runtime Shape

- Next.js runs as the public web entrypoint.
- FastAPI runs internally on port `8000`.
- Railway routes external traffic to the frontend container port.
- Frontend API requests can use `/api/backend/v1/...`, which rewrites to the internal FastAPI service.

### Deployment Steps

1. Push the `medintel` directory to a GitHub repository.
2. In Railway, create a new project from that repository.
3. Set the service root to the repository root containing `Dockerfile`.
4. Add the environment variables from `.env.example`.
5. Deploy.

### Recommended Variables

- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_API_BASE_PATH`
- `POSTGRES_DB`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_HOST`
- `POSTGRES_PORT`
- `DATABASE_URL`
- `JWT_SECRET_KEY`
- `JWT_ALGORITHM`
- `JWT_ACCESS_TOKEN_EXPIRE_MINUTES`
- `BACKEND_CORS_ORIGINS`

### Database on Railway

- Provision a PostgreSQL service in the same Railway project.
- Point `DATABASE_URL` at the Railway PostgreSQL instance.
- Keep Alembic migrations empty until the schema phase begins.

## Local Docker

```bash
docker compose up --build
```

The application becomes available at `http://localhost:3000`, and FastAPI docs are available at `http://localhost:8000/docs`.

