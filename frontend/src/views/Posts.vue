<template>
  <TopHeader>
    <Post />
  </TopHeader>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Post from '../components/Post'
export default {
  components: {
    TopHeader,
    Post
  },
  data: () => ({
    posts: [{
      title: 'New Post'
    }]
  })
}
</script>