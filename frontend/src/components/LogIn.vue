<template>
<v-main>
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
      <v-card class="elevation-12">
        <v-toolbar
          blue-grey darken-3
          dark
          flat
        >
        <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form @submit.prevent="submitForm">
            <v-text-field
              label="Username"
              name="login"
              prepend-icon="mdi-account-circle"
              type="text"
            ></v-text-field>

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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Login</v-btn>
          <v-btn color="error" to="/">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
</v-main>
</template>
<script>
export default {
  name: 'Login',
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