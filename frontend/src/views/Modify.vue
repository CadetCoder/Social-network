<template>
  <TopHeader>
    <Moderation />
  </TopHeader>
</template>

<script>
import Moderation from '../components/Modify'
import TopHeader from '../layouts/TopHeader'
export default {
  name: 'Modify',
  components: {
  TopHeader,
  Moderation
  }
}

</script>