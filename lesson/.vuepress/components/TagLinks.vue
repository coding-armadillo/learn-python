<template lang="html">
  <div>
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}` }"
    >
      <span>#{{ tag }}</span>
    </router-link>
  </div>
</template>

<style scoped>
span {
  padding: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  background: #3776ab;
  color: #ffd343;
}
</style>
