<template>
  <ULandingSection>
    <template #title>
      <ContentSlot name="title" />
    </template>
    <template #description>
      <ContentSlot
        name="description"
        unwrap="p" />
    </template>
    <UBlogList>
      <UBlogPost
        v-for="articles in articles"
        :key="article._path"
        :to="article._path"
        :title="article.title"
        :image="article.image"
        :date="new Date(article.date).toLocalDateString('en', { year: 'numberic', month: 'short', day: 'numeric' })"
        :ui="{
          description: 'line-clamp-2',
        }" />
    </UBlogList>
  </ULandingSection>
</template>

<script lang="ts" setup>
  import type { Article } from '~/types'

  const { count } = defineProps({
    count: {
      type: Number,
      default: 3,
    },
  })

  const { data: articles } = await useAsyncData('articles', () => queryContent<Article>('/articles').where({ _extension: 'md' }).limit(count).sort({ date: -1 }).find())
</script>
