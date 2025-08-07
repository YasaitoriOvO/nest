<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineOptions({ name: 'AppFooter' })

const showFooter = ref(false)

const handleScroll = () => {
  const scrollY = window.scrollY
  const visibleHeight = window.innerHeight
  const pageHeight = document.documentElement.scrollHeight

  // 如果已经快到页面底部（例如相差 < 50px）
  if (scrollY + visibleHeight >= pageHeight - 50) {
    showFooter.value = true
  } else {
    showFooter.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <transition name="fade">
    <div v-if="showFooter">
      <hr>
      <p class="text-center m-5">
        © 2025 Yasaitori
      </p>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
