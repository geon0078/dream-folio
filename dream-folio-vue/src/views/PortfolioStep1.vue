<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 class="text-center text-xl font-semibold mb-6">포트폴리오 생성하기</h2>

      <!-- 1단계: 프로필 입력 -->
      <section class="mb-6">
        <div class="flex items-center mb-4">
          <div class="text-white bg-violet-600 rounded-full w-6 h-6 text-sm flex items-center justify-center mr-2">1</div>
          <span class="font-medium">프로필 입력하기</span>
        </div>

        <div class="space-y-4">
          <FormInput label="이름" placeholder="이름을 입력하세요." required />
          <FormInput label="생년월일" placeholder="생년월일을 입력하세요." required />

          <FormSelect
            label="대학교"
            placeholder="대학교를 선택하세요."
            :options="['서울대학교', '을지대학교']"
            required
          />

          <FormSelect
            label="전공명"
            placeholder="전공을 선택하세요."
            :options="['의료IT', '빅데이터의료융합']"
            required
          />
        </div>
      </section>

      <!-- 2단계: 대외활동 입력 -->
      <section>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <div class="text-white bg-violet-600 rounded-full w-6 h-6 text-sm flex items-center justify-center mr-2">2</div>
            <span class="font-medium">대외활동 입력하기</span>
          </div>
          <button class="text-violet-600 text-sm font-medium">추가하기</button>
        </div>

        <div class="space-y-4">
          <FormActivity type="동아리" placeholder="내용을 입력하세요." />
          <FormActivity type="인턴십" placeholder="내용을 입력하세요." />
          <FormActivity type="자격증" placeholder="내용을 입력하세요." />
          <FormActivity type="수상내역" placeholder="내용을 입력하세요." />
        </div>
      </section>

      <!-- 다음 단계 버튼 -->
      <button
        class="w-full mt-8 py-3 rounded-md bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
        @click="submitForm"
      >
        다음 단계로
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import FormInput from '@/components/form/FormInput.vue'
import FormSelect from '@/components/form/FormSelect.vue'
import FormActivity from '@/components/form/FormActivity.vue'

const router = useRouter()

const form = reactive({
  name: '',
  birth: '',
  university: '',
  major: '',
  activities: [
    { type: '동아리', value: '' },
    { type: '인턴십', value: '' },
    { type: '자격증', value: '' },
    { type: '수상내역', value: '' }
  ]
})

const submitForm = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (!res.ok) throw new Error('저장 실패')
    router.push('/portfolio/step2')
  } catch (err) {
    alert('서버 저장 중 오류 발생: ' + err.message)
  }
}
</script>
