<template>
  <ContentRenderer
    v-if="page"
    :value="page" />
</template>

<script setup lang="ts">
  const { data: page } = await useAsyncData('home', () => queryContent('/').findOne())
  if (!page.value) {
    throw createError({ statusCode: 404, statsuMessage: 'Page not found', fatal: true })
  }
</script>
