from fastapi import APIRouter, Request
from app.agents.react_agent import get_agent_answer

router = APIRouter()

@router.post("/chat")
async def chat(request: Request):
    data = await request.json()
    question = data.get("question", "")
    answer = get_agent_answer(question)  # Calls logic from agents
    return {"answer": answer}
