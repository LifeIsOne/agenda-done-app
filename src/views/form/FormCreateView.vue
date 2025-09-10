<template>
  <div>
    <h3>새로운 폼</h3>
    <hr />
    <form @click="saveBoard">
      <input type="text" />

      <button class="btn btn-primary">저장</button>
    </form>
  </div>
</template>

<script setup>
const saveBoard = () => {
  console.log('바보')
}
</script>

<style lang="scss" scoped></style>
