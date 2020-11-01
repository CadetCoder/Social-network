<template>
    <Dashboard />
</template>

<script>
import Dashboard from '../components/Dashboard'
export default {
  components: {
    Dashboard
  },
  data: () => ({
    posts: [{
      title: 'New Post',
      comments: ''
    }]
  })
}
</script>