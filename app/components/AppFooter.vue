<template>
  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray400 text-sm">Copyright © {{ new Date().getFullYear() }}. All rights reserved.</p>
    </template>
    <template #right>
      <UColorModeButton size="sm" />
    </template>
  </UFooter>
</template>
