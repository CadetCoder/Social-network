<template>
 <LoginOrSignupLayout>
    <Login />
</LoginOrSignupLayout>
</template>

<script>
import LoginOrSignupLayout from '../layouts/LoginOrSignupLayout'
import Login from '../components/LogIn'

export default {
  components: {
    LoginOrSignupLayout,
    Login
  }
}
</script>