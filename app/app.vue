<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  //  const colorMode = useColorMode()

  //  const color = computed(() => (colorMode.value === 'dark' ? '#11827' : 'white'))

  //  useHead({
  //    meta: [{ charset: 'utf=8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { key: 'theme-color', name: 'theme-color', content: color }],
  //    link: [{ rel: 'icon', href: 'favicon.ico' }],
  //    htmlAttrs: {
  //      lang: 'en',
  //    },
  //  })

  useSeoMeta({
    titleTemplate: 'Nuxt Studio Demo',
    ogImage: 'https://sass-template.nuxt.deve/social-card.png',
    twitterImage: 'https://saas-template.nuxt.deve/social-card.png',
    twitterCard: 'summary_large_image',
  })
</script>
