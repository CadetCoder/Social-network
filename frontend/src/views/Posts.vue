<template>
  <DashboardLayout>
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :title="post.title"
    />
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '../layouts/DashboardLayout'
import Post from '../components/Post'
export default {
  components: {
    DashboardLayout,
    Post
  },
  data: () => ({
    posts: [{
      title: 'New Post'
    }]
  })
}
</script>