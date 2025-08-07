<script setup lang="ts">
  defineEmits(['update:blog']);
  defineOptions({ name: 'BlogPage' });
</script>

<template>
  <div class="m-5 text-center">
    <h1>博客</h1>
    <ContentList path="/blog" />
  </div>
</template>
