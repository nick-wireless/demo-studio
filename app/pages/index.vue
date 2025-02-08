<template>
  <HomeHero >
    <template #title>
      This is my title
    </template>
    <template #description>
      This is my description
    </template>
    <template #headline>
      This is my headline
    </template>
    <template #links>
      <UButton color="gray" size="lg" target="_blank" to="https://nuxt.studio" variant="link">Nuxt Studio</UButton>
    </template>
  </HomeHero>

</template>

<script setup lang="ts">
  const { data: page } = await useAsyncData('home', () => queryContent('/').findOne())
  if (!page.value) {
    throw createError({ statusCode: 404, statsuMessage: 'Page not found', fatal: true })
  }
</script>
