<script setup lang="ts">
  defineEmits(['update:blog']);
  defineOptions({ name: 'BlogPage' });
</script>

<template>
  <div class="m-5 text-center items-center">
    <h1>博客</h1>
        <div>
      <div class="chat chat-start">
        <div class="chat-header">
          菜鸡
          <time class="text-xs opacity-50">2 hours ago</time>
        </div>
        <div class="chat-bubble">正在摸鱼中～</div>
        <div class="chat-footer opacity-50">Seen</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-header">
          菜鸡
          <time class="text-xs opacity-50">2 hour ago</time>
        </div>
        <div class="chat-bubble">诶？这个页面还在写哦</div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
    <ContentList path="/blog" />
  </div>
</template>
