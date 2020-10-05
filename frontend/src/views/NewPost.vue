<template>
  <DashboardLayout>
    <new-post />
  </DashboardLayout>
</template>
<script>
import NewPost from '../components/NewPost.vue'
import DashboardLayout from '../layouts/DashboardLayout'
export default {
  components: {
    NewPost,
    DashboardLayout
  }
}
</script>