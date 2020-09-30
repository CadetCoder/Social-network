<template>
  <DashboardMainPage>
    <Feeds />
  </DashboardMainPage>
</template>

<script>
import DashboardMainPage from '../layouts/DashboardMainPage'
import Feeds from '../components/Feeds'
export default {
  components: {
    DashboardMainPage,
    Feeds
  }
}
</script>