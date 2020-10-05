<template>
  <DashboardLayout>
    <Feeds />
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '../layouts/DashboardLayout'
import Feeds from '../components/Feeds'
export default {
  components: {
    DashboardLayout,
    Feeds
  }
}
</script>