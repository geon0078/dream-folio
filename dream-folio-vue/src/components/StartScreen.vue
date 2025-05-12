<template>
  <div class="h-screen bg-violet-600 flex items-center justify-center px-4">
    <div class="w-full max-w-xs text-center text-white">
      <p class="text-sm mb-2">당신의 내일을 설계합니다</p>
      <h1 class="text-4xl font-extrabold mb-10 tracking-wide drop-shadow-[2px_2px_#00ffd5]">
        드림폴리오
      </h1>

      <div class="space-y-3">
        <button
          class="w-full py-3 rounded-md bg-white text-gray-800 font-semibold shadow hover:bg-gray-100 transition"
          @click="goToLogin"
        >
          기존 계정으로 로그인
        </button>
        <button
          class="w-full py-3 rounded-md bg-white text-gray-800 font-semibold shadow hover:bg-gray-100 transition"
          @click="goToSignup"
        >
          회원가입
        </button>
        <button
          class="w-full py-3 rounded-md bg-gray-800 text-white font-semibold shadow hover:bg-gray-700 transition"
          @click="goToGuest"
        >
          비회원으로 시작하기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = () => router.push('/login')
const goToSignup = () => router.push('/signup')
const goToGuest = () => router.push('/portfolio/step1') // 비회원 경로로 이동
</script>
