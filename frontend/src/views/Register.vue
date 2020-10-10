<template>
  <LoginOrSignupLayout>
    <Register source="test" @signup="registered"/>
  </LoginOrSignupLayout>
</template>

<script>
import LoginOrSignupLayout from '../layouts/LoginOrSignupLayout'
import Register from '../components/Register'

export default {

  components: {
    LoginOrSignupLayout,
    Register
  },
  methods: {
    registered (data) {
      console.log(data)
    }
  }
}
</script>