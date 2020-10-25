<template>
  <TopHeader>
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :title="post.title"
      :comments="post.comments"
    />
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
      title: 'New Post',
      comments: ''
    }]
  })
}
</script>