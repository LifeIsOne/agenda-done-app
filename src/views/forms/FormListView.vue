<template>
  <div>
    <h1>폼 목록 뷰</h1>
    <hr />
    <div class="row g-2">
      <FormItem title="Title01" description="Description01" create-at="2025-09-11" />
      <FormItem title="Title02" description="Description02" create-at="2025-09-11" />
      <FormItem title="Title03" description="Description03" create-at="2025-09-11" />
      <FormItem title="Title04" description="Description04" create-at="2025-09-11" />
    </div>
    <hr />
  </div>
</template>

<script setup>
import FormItem from '@/components/forms/FormItem.vue'
</script>

<style lang="scss" scoped></style>
