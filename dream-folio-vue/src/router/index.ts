import { createRouter, createWebHistory } from 'vue-router'
import FormInput from '@/components/form/FormInput.vue'
import FormActivity from '@/components/form/FormActivity.vue'
import FormSelect from '@/components/form/FormSelect.vue' // ✅ 새로 추가한 경로

// 아래 컴포넌트 경로는 src 기준
import StartScreen from '@/components/StartScreen.vue' // 또는 '../components/StartScreen.vue'
import PortfolioStep1 from '@/views/PortfolioStep1.vue' // ✅ 새로 추가한 경로
import PortfolioStep2 from '@/views/PortfolioStep2.vue' // ✅ 새로 추가한 경로

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartScreen, // 홈화면
  },
  {
    path: '/portfolio/step1', // ✅ 이 부분만 추가!
    name: 'PortfolioStep1',
    component: PortfolioStep1,
  },
   {
    path: '/portfolio/step2', // ✅ 이 부분만 추가!
    name: 'PortfolioStep2',
    component: PortfolioStep2,
  }
  // 필요하다면 로그인, 회원가입 라우트도 여기에 추가
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
