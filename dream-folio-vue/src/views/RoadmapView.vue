<template>
  <div class="min-h-screen bg-gray-50 py-6 px-4">
    <div class="max-w-md mx-auto">
      <!-- 탭 영역 -->
      <div class="flex justify-around mb-4 border-b text-sm font-semibold">
        <div class="pb-2 border-b-2 border-violet-600 text-violet-600">나의 로드맵</div>
        <div class="pb-2 text-gray-400">나의 성장</div>
      </div>

      <!-- 역할 분석 -->
      <section class="bg-white rounded-xl p-4 shadow mb-6">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-sm font-medium">나의 역할 분석</h3>
          <button class="text-xs text-violet-600 font-semibold">상세보기</button>
        </div>
        <div class="bg-violet-600 text-white text-sm px-3 py-1 rounded mb-2 w-fit">
          UX/UI 디자이너
        </div>
        <RadarChart :data="chartData" />
        <p class="text-center text-sm mt-3 text-gray-600">
          실행력과 기획력을 높일 수 있는 활동이 필요해요!
        </p>
      </section>

      <!-- 로드맵 타임라인 -->
      <section class="bg-white rounded-xl p-4 shadow space-y-4">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-sm font-medium">나의 로드맵</h3>
          <button class="text-xs text-violet-600 font-semibold">상세보기</button>
        </div>

        <ul class="relative border-l-2 border-violet-200 pl-4 space-y-4">
          <li v-for="step in roadmap" :key="step.date">
            <div class="text-xs text-violet-500 font-semibold mb-1">{{ step.date }}</div>
            <div class="bg-violet-50 border border-violet-300 rounded-md p-3 text-sm">
              <p class="font-semibold mb-1">{{ step.title }}</p>
              <p v-if="step.description" class="text-xs text-gray-600 mb-1">{{ step.description }}</p>
              <a
                v-if="step.link"
                :href="step.link"
                target="_blank"
                class="text-xs text-violet-600 underline"
              >
                {{ step.linkText }}
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RadarChart from '@/components/RadarChart.vue' // radar 컴포넌트 추가 필요

const roadmap = ref([])
const chartData = ref({}) // 차트 데이터

onMounted(async () => {
  const res = await fetch('http://localhost:5000/api/roadmap')
  const data = await res.json()

  roadmap.value = data.timeline
  chartData.value = data.radar
})
</script>
