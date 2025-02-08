<template>
  <UHeader>
    <template #logo>
      <UBadge
        :label="header.title"
        variant="subtle"
        class="mb-0.5" />
    </template>
    <template #right>
      <UColourModeButton />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
  const { header } = useAppConfig()
</script>
