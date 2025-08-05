from langchain_google_genai import ChatGoogleGenerativeAI
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Gemini LLM
llm = ChatGoogleGenerativeAI(
    model="gemini-2.0-flash",
    temperature=0.9,
    google_api_key=os.getenv("GOOGLE_API_KEY")
)

def get_agent_answer(question: str) -> str:
    # This can be extended for ReAct agents, tool calls, etc.
    response = llm.invoke(question)
    return response.content
