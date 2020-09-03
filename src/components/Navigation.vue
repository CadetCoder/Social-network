<template>
  <nav>
    <ul>
      <template v-for="(link, i) in navLinks">
        <li :key="i"><router-link :to="link.path">{{ link.text }}</router-link></li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navLinks: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped>
nav {
  height: 60px;
  width: 100%;
}
</style>>
