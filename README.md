# MediIntel

MediIntel is an enterprise healthcare application scaffold designed for GitHub collaboration and direct deployment to Railway. This phase provides the project foundation only: navigation, authentication plumbing, backend structure, PostgreSQL configuration, and deployment assets. No business logic, AI workflows, or database tables are implemented.

## Stack

- Frontend: Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- Backend: FastAPI, Python
- Database: PostgreSQL
- Authentication: JWT-ready scaffold with demo-mode login shell
- Deployment: Docker, Railway

## Project Structure

```text
medintel/
|-- frontend/
|-- backend/
|-- database/
|-- uploads/
|-- docs/
|-- README.md
|-- docker-compose.yml
|-- Dockerfile
`-- railway.json
```

## What Is Included

- Modern healthcare-themed login page
- Protected frontend routes and logout shell
- Role context for demo mode
- Sidebar navigation for dashboard, agents, memory, tools, alerts, and settings
- Empty module pages with titles, descriptions, and placeholder cards
- FastAPI application skeleton with JWT-ready utilities
- PostgreSQL connection configuration
- Alembic migration-ready structure with no tables
- Railway deployment files and local Docker Compose setup

## Quick Start

1. Copy `.env.example` to `.env`.
2. Update secrets and environment values as needed.
3. Run the stack:

```bash
docker compose up --build
```

4. Open the app:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000/docs`

## Environment Variables

Core values are documented in `.env.example`.

- `NEXT_PUBLIC_API_BASE_PATH`: Browser-facing API proxy path
- `DATABASE_URL`: SQLAlchemy and Alembic connection string
- `JWT_SECRET_KEY`: Placeholder signing secret for future JWT flows
- `BACKEND_CORS_ORIGINS`: Allowed frontend origins for the API

## Frontend Notes

- `/login` provides a demo-mode role selector.
- Production authentication is intentionally not implemented; the UI notes that production uses SSO.
- Middleware protects application routes by checking for a session cookie.

## Backend Notes

- `backend/main.py` boots the FastAPI app and registers routers.
- `backend/database/session.py` configures the PostgreSQL engine and session factory.
- `backend/alembic` is ready for future migrations.
- No models or tables are defined in this phase.

## Railway Deployment

Railway uses the root `Dockerfile` and `railway.json`.

- The frontend is served on the Railway-assigned `$PORT`.
- The backend runs internally on port `8000`.
- Next.js rewrites `/api/backend/*` to the internal FastAPI service.

Detailed deployment instructions are in `docs/deployment-guide.md`.
