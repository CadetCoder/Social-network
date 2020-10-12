<template>
<div>
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
              v-model="username"
              prepend-icon="mdi-account-circle"
              type="text"
              required
            ></v-text-field>

            <v-text-field
            :type="showPassword ? 'text' : 'password' "
            label="Password"
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            required
          />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          type="login"
          color="primary"
          @click="submitLogIn()"
          >
          Login
          </v-btn>
          <v-btn color="error" to="/">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
</div>
</template>
<script>
export default {
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showPassword: false,
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogIn () {
      this.$emit ('login', {
        userName: this.username,
        password: this.password
      })
    }
  }
}
</script>