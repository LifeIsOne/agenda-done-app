<template>
  <div>
    <!-- 헤더 -->
    <div class="pt-3 d-flex justify-content-between">
      <h3 class="">새로운 폼</h3>
      <div class="d-flex gap-2">
        <button type="button" class="btn btn-outline-secondary">폼 목록</button>
        <button class="btn btn-primary" @click="saveBoard">저장</button>
      </div>
    </div>
    <hr />
    <!-- 바디 -->
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">설문 제목</label>
        <input type="text" class="form-control" id="title" placeholder="설문 제목" />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">설면 설명</label>
        <textarea class="form-control" id="description" rows="3" placeholder="설문 설명"></textarea>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const saveBoard = () => {
  router.push('/form')
}
</script>

<style lang="scss" scoped></style>
