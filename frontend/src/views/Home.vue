<template>
  <DashboardLayout>
   <HelloWorld />
  </DashboardLayout>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import DashboardLayout from '../layouts/DashboardLayout'
  export default {
    name: 'app',
    components: {
    HelloWorld,
    DashboardLayout
  },
  data: () => ({
      brand: 'Groupomania',
      icons: [
      {
        icon: 'mdi-facebook',
        href: 'https://facebook.com'
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com'
      },
      {
        icon: 'mdi-linkedin',
        href: 'https://linkedin.com'
      },
      {
        icon: 'mdi-instagram',
        href: 'https://instagram.com'
      }
    ]
})
}
</script>