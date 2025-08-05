from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include your API route (see routes.py below)
app.include_router(router)

# Optional: Simple index route
@app.get("/")
def read_root():
    return {"message": "Welcome to the LangChain API backend"} 
