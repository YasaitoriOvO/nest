<script setup lang="ts">
  const friends = [
    { name: '示例友链1', url: 'https://example.com' },
    { name: '示例友链2', url: 'https://example.com' },
    { name: '示例友链3', url: 'https://example.com' },
    { name: '示例友链4', url: 'https://example.com' }
  ];
  defineEmits(['update:friends']);
  defineOptions({ name: 'FriendsPage' });
</script>

<template>
  <div class="m-5 font">
    <h1 class="font-bold text-center text-3xl m-3 text-bold">友链</h1>
    <span v-for="friend in friends" :key="friend.name" class="block text-center m-3">
      <a :href="friend.url" target="_blank" class="text-center">{{ friend.name }}</a>
      <br>
    </span>
  </div>
</template>

<style scoped>
  .font {
    font-family: "Noto Sans SC", sans-serif;
    font-optical-sizing: auto;
  }
  .font-bold {
    font-family: "Noto Sans SC", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
  }
</style>
