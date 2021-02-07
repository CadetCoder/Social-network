<template>
<div>
  <button class="add-post">
    <i class="fas fa-plus-circle"></i>
    <router-link to="publish">Add post</router-link>
  </button>
  </div>
</template>

<script>
export default {
  name: 'addPost'
}
</script>

<style>
@import '../style.css';
</style>