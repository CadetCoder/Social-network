<template>
  <top-header>
    <New-post />
  </top-header>
</template>
<script>
import NewPost from '../components/NewPost.vue'
import TopHeader from '../components/TopHeader'
export default {
  components: {
    NewPost,
    'top-header': TopHeader
  }
}
</script>