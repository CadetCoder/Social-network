<template>
  <DashboardLayout>
   <HelloWorld />
  </DashboardLayout>
</template>

<script>
import HelloWorld from '../layouts/HelloWorld'
import DashboardLayout from '../layouts/DashboardLayout'
export default {
  components: {
    HelloWorld,
    DashboardLayout
  }
}
</script>