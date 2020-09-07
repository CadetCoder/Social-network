<template>
  <v-app class="main-bg">
    <v-content with="400">
      <v-container>
        <v-card class="mx-auto mt-12">
          <v-img class="logo-img" max-height="100" with="100" p src="../assets/logo.png"></v-img>
          <v-card-title class="mx-4">
            <h1 class="display-1">Login</h1>
          </v-card-title>
            <v-card-text>
              <v-form class="mx-4">
                <v-text-field
                  label= "Username"
                  prepend-icon="mdi-account-circle"
                  required
                />
                <v-text-field
                  :type="showPassword ? 'text' : 'password' "
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  required
                />
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                class="success"
                @click="register"
              >
              register
              </v-btn>
                <v-spacer></v-spacer>
              <v-btn
                class="info"
                @click="signIn"
                >
                Sign in
              </v-btn>
            </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    showPassword: false
  }),
  props: {
    source: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="css">
  .main-bg {
    background-color: gray !important;
  }
</style>