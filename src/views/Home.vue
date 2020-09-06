<template>
  <v-app class="main-bg">
    <v-content with="400">
      <v-container>
        <v-card class="mx-auto mt-12">
          <v-card-title class="mx-4">
            <h1 class="display-1">Login</h1>
          </v-card-title>
            <v-card-text>
              <v-form class="mx-4">
                <v-text-field
                  label= "Username"
                  prepend-icon="mdi-account-circle"
                />
                <v-text-field
                  :type="showPassword ? 'text' : 'password' "
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn class="success">Register</v-btn>
                <v-spacer></v-spacer>
              <v-btn class="info">Sign in</v-btn>
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