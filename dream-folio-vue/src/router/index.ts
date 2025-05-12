import { createRouter, createWebHistory } from 'vue-router'

// 아래 컴포넌트 경로는 src 기준
import StartScreen from '@/components/StartScreen.vue' // 또는 '../components/StartScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartScreen, // 홈화면
  },
  // 필요하다면 로그인, 회원가입 라우트도 여기에 추가
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
