<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col">
      <h2 class="text-center text-xl font-semibold mb-6">AI 질문응답</h2>

      <!-- 대화 메시지 리스트 -->
      <div class="mb-4 space-y-2">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="msg.sender === 'ai' ? 'text-left' : 'text-right'"
        >
          <div
            :class="[
              'inline-block max-w-[80%] px-4 py-2 rounded-md',
              msg.sender === 'ai'
                ? 'bg-violet-200 text-violet-900'
                : 'bg-gray-100 text-gray-700'
            ]"
          >
            {{ msg.text }}
          </div>
        </div>

        <!-- 로딩 중 메시지 -->
        <div v-if="isLoading" class="text-right">
          <div class="inline-block px-4 py-2 bg-gray-100 text-gray-500 rounded-md">
            응답 생성 중...
          </div>
        </div>
      </div>

      <!-- 입력창 -->
      <div class="mt-6 border-t pt-4">
        <div class="flex items-center gap-2">
          <input
            v-model="userInput"
            @keydown.enter="handleAsk"
            type="text"
            placeholder="메시지를 입력하세요"
            class="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500"
          />
          <button
            @click="handleAsk"
            class="bg-violet-600 text-white text-sm px-4 py-2 rounded-md hover:bg-violet-700 transition"
          >
            전송
          </button>
        </div>
      </div>

      <!-- 다음 단계 버튼 -->
      <button
        class="mt-10 py-3 w-full bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition"
        @click="goToNext"
      >
        로드맵 설계하기
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToNext = () => {
  router.push('/portfolio/roadmap')
}

const userInput = ref('')
const messages = ref([
  {
    sender: 'ai',
    text: '안녕하세요! 저는 진로 설계를 도와주는 AI 챗봇 드리미입니다.\n먼저, 이 직무를 선택하게 된 계기가 궁금해요!'
  }
])
const isLoading = ref(false)

const sendToAI = async (message) => {
  isLoading.value = true

  try {
    const res = await fetch('http://localhost:5000/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })
    const data = await res.json()
    messages.value.push({ sender: 'ai', text: data.reply })
  } catch (err) {
    messages.value.push({ sender: 'ai', text: 'AI 응답 실패: ' + err.message })
  } finally {
    isLoading.value = false
  }
}

const handleAsk = async () => {
  const msg = userInput.value.trim()
  if (!msg) return

  messages.value.push({ sender: 'user', text: msg })
  userInput.value = ''
  await sendToAI(msg)
}
</script>
