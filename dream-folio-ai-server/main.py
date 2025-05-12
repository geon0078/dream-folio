from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import openai

from openai import OpenAI  # ✅ v1.x용 클라이언트

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str

@app.post("/api/ask")
async def ask_gpt(request: Message):
    try:
        print(f"🔥 질문 수신: {request.message}")

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "너는 진로 설계를 도와주는 AI 챗봇이야."},
                {"role": "user", "content": request.message}
            ]
        )

        reply = response.choices[0].message.content
        print(f"✅ GPT 응답: {reply}")

        return { "reply": reply }

    except Exception as e:
        print("❌ OpenAI 오류:", e)
        return { "error": str(e) }
