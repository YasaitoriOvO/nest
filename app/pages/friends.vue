<script setup lang="ts">
  const friends = [
    { name: '艾了个拉', url: 'https://aira.cafe' },
    { name: '示例友人2', url: 'https://example.com' },
    { name: '示例友人3', url: 'https://example.com' },
    { name: '示例友人4', url: 'https://example.com' }
  ];
  defineEmits(['update:friends']);
  defineOptions({ name: 'FriendsPage' });
</script>

<template>
  <div class="m-5 font">
    <h1 class="font-bold text-center text-3xl m-3 text-bold">友链</h1>
    <div class="flex flex-wrap gap-4 justify-center">
      <div v-for="friend in friends" :key="friend.name" class="card bg-base-100 w-96 shadow-sm">
        <div class="card-body">
          <h2 class="card-title">{{ friend.name }}</h2>
          <p>{{ friend.url }}</p>
          <div class="card-actions justify-end">
            <a :href="friend.url" target="_blank" class="btn btn-primary">访问</a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center mt-10">
      <p class="text-center mt-10 text-sm opacity-50">快点来加友链！</p>
    </div>
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
