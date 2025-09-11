<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <div class="fw-bold fs-5">{{ title }}</div>
      <p class="card-">
        {{ createAt }}
      </p>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ description }}
      </h5>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  createAt: {
    type: [Date, String],
  },
})
</script>

<style lang="scss" scoped></style>
