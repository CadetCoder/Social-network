<template>
  <LoginOrSignupLayout>
    <Register />
  </LoginOrSignupLayout>
</template>

<script>
import LoginOrSignupLayout from '../layouts/LoginOrSignupLayout'
import Register from '../components/Register'

export default {
  name: 'Register',

  components: {
    LoginOrSignupLayout,
    Register
  }
}
</script>