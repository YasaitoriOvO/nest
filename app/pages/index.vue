<script setup lang="ts">
  defineOptions({ name: 'HomePage' });
</script>

<template>
  <div class="text-center m-5">
    <div class="flex flex-col items-center justify-center mb-10" style="min-height: 70vh;">
      <div class="avatar">
        <div class="w-60 rounded-full">
          <img src="@/assets/icon.jpg" alt="Profile Picture">
        </div>
      </div>
      <div class="mt-5">
        <h1 class="text-4xl font-bold">菜鸡</h1>
        <p class="opacity-50">I'm sleeping.</p>
      </div>
      <div class="flex space-x-4 mt-6">
        <a href="https://space.bilibili.com/108418124" target="_blank" rel="noopener" aria-label="GitHub">
          <img src="@/assets/icons/bilibili.svg" alt="GitHub" class="w-12 h-12 hover:opacity-80 transition icon-theme"/>
        </a>
        <a href="https://music.163.com/#/user/home?id=4885398960" target="_blank" rel="noopener" aria-label="GitHub">
          <img src="@/assets/icons/cloudmusic.svg" alt="GitHub" class="w-12 h-12 hover:opacity-80 transition icon-theme"/>
        </a>
        <a href="https://www.youtube.com/@vegecken" target="_blank" rel="noopener" aria-label="GitHub">
          <img src="@/assets/icons/youtube.svg" alt="GitHub" class="w-12 h-12 hover:opacity-80 transition icon-theme"/>
        </a>
        <a href="https://github.com/YasaitoriOvO" target="_blank" rel="noopener" aria-label="GitHub">
          <img src="@/assets/icons/github.svg" alt="GitHub" class="w-12 h-12 hover:opacity-80 transition icon-theme"/>
        </a>
        <a href="https://twitter.com/YasaitoriOvO" target="_blank" rel="noopener" aria-label="Twitter">
          <img src="@/assets/icons/twitter.svg" alt="Twitter" class="w-12 h-12 hover:opacity-80 transition icon-theme"/>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-theme {
  filter: invert(0);
}

@media (prefers-color-scheme: dark) {
  .icon-theme {
    filter: invert(1);
  }
}
</style>
