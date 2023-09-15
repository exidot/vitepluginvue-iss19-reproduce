<template>
  <Logo></Logo>
  <Link></Link>
</template>

<script setup lang="ts">
import Logo from '@/components/logo.vue'
import Link from '@/components/link.vue'

/**
 * 1. the generated Logo is logo.vue_vue_type_style_index_0_lang-[hash].js
 * 2. When you comment the Logo component, the Logo is normal and Link is link.vue_vue_type_script_setup_true_lang-[hash].js
 * 3. This may be due to a desire to reuse components
 *
 * 1. 现在生成的 Logo 为 logo.vue_vue_type_style_index_0_lang-[hash].js
 * 2. 注释 Logo 组件时, Logo 正常, Link 为 link.vue_vue_type_script_setup_true_lang-[hash].js
 * 3. 应该是为了复用组件导致的
 *
 */
</script>
