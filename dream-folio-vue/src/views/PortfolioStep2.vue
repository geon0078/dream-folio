<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 class="text-center text-xl font-semibold mb-6">포트폴리오 생성하기</h2>

      <!-- 3. 희망 직업 선택 -->
      <section class="mb-6">
        <div class="flex items-center mb-4">
          <div class="text-white bg-violet-600 rounded-full w-6 h-6 text-sm flex items-center justify-center mr-2">3</div>
          <span class="font-medium">희망 직업 선택하기</span>
        </div>

        <div class="space-y-4">
          <FormSelect label="1차 분류" placeholder="1차 카테고리 선택" required />
          <FormSelect label="2차 분류" placeholder="2차 카테고리 선택" required />
        </div>
      </section>

      <!-- 4. 구체적인 직무 작성 -->
      <section class="mb-6">
        <div class="flex items-center mb-2">
          <div class="text-white bg-violet-600 rounded-full w-6 h-6 text-sm flex items-center justify-center mr-2">4</div>
          <span class="font-medium">구체적인 직무 작성하기</span>
        </div>

        <textarea
          rows="4"
          placeholder="어떤 직무를 꿈꾸고 있는지 구체적으로 작성해주세요"
          class="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500 resize-none"
        />
      </section>

      <!-- 5. 희망 취업 준비 기간 -->
      <section>
        <div class="flex items-center mb-2">
          <div class="text-white bg-violet-600 rounded-full w-6 h-6 text-sm flex items-center justify-center mr-2">5</div>
          <span class="font-medium">희망 취업 준비 기간</span>
        </div>

        <div class="flex items-center gap-2">
          <input
            type="month"
            class="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500"
          />
          <span>~</span>
          <input
            type="month"
            class="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500"
          />
        </div>
      </section>

      <button
        class="w-full mt-8 py-3 rounded-md bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
      >
        다음 단계로
      </button>
    </div>
  </div>
</template>

<script setup>
// 다음 단계 라우팅은 router.push('/portfolio/step3') 식으로 추가 가능
import { useRouter } from 'vue-router'
import FormInput from '@/components/form/FormInput.vue'
import FormSelect from '@/components/form/FormSelect.vue'
import FormActivity from '@/components/form/FormActivity.vue'


</script>
