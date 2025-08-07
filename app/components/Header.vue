<script setup lang="ts">
defineOptions({ name: 'AppHeader' })

// 使用 Nuxt 的路由
const route = useRoute()

// 基于当前路由计算激活状态
const isActive = computed(() => ({
  blog: route.path.startsWith('/blog'),
  friends: route.path.startsWith('/friends')
}))
</script>

<template>
  <header style="font-family: 'Archivo Black', sans-serif" class="header">
    <nav class="flex justify-between items-center px-6 py-4 rounded">
      <div class="relative group">
        <NuxtLink 
          to="/" 
          class="text-2xl px-3 py-2 rounded-md relative overflow-hidden z-10 nav-link"
        >
          <span class="z-10 relative">Yasaitori</span>
          <!-- Hover 背景 -->
          <span
            class="absolute inset-0 bg-green-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"
          />
        </NuxtLink>
      </div>
      <div class="flex text-xl items-center gap-6">
        <div class="relative group">
          <NuxtLink
            to="/blog"
            class="px-3 py-2 rounded-md relative flex items-center gap-2 overflow-hidden z-10 nav-link"
            :class="{ 'active': isActive.blog }"
          >
            <span class="icon z-10">article</span>
            <span class="z-10">Blog</span>
            <!-- Hover 背景 -->
            <span
              class="absolute inset-0 bg-green-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"
            />
          </NuxtLink>
        </div>

        <div class="relative group">
          <NuxtLink
            to="/friends"
            class="px-3 py-2 rounded-md relative flex items-center gap-2 overflow-hidden z-10 nav-link"
            :class="{ 'active': isActive.friends }"
          >
            <span class="icon z-10">link</span>
            <span class="z-10">Links</span>
            <!-- Hover 背景 -->
            <span
              class="absolute inset-0 bg-green-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"
            />
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0 2px 3px rgba(122, 122, 122, 0.1);
}

.icon {
  font-family: 'Material Symbols Outlined';
}

/* 增强的导航链接样式 */
.nav-link {
  transition: all 0.3s ease;
}

/* Active 状态的文字颜色 */
.nav-link.active {
  color: #059669; /* green-600 */
}

/* Active 状态覆盖 hover 效果 */
.nav-link.active:hover .underline-effect {
  transform: scaleX(1);
  opacity: 1;
}

/* 可选：添加更平滑的过渡效果 */
.underline-effect {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>