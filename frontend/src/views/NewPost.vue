<template>
  <DashboardMainPage>
    <new-post />
  </DashboardMainPage>
</template>
<script>
import NewPost from '../components/NewPost.vue'
import DashboardMainPage from '../layouts/DashboardMainPage'
export default {
  components: {
    NewPost,
    DashboardMainPage
  }
}
</script>