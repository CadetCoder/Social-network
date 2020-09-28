<template>
<LoginOrSignupLayout>
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
      <v-card class="elevation-12">
        <v-toolbar
          dark
          flat
        >
        <v-toolbar-title>Create New account</v-toolbar-title>
          </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field
                  label="Your username"
                  v-model="username"
                  prepend-icon="mdi-account-circle"
                  type="text"
                ></v-text-field>

                <v-text-field
                  label= "Your email address"
                  v-model= "email"
                  prepend-icon= "mdi-mail"
                  type= "text"
                >
                </v-text-field>
                <v-text-field
                :type= "showPassword ? 'text' : 'password' "
                label= "Your password"
                v-model= "password"
                prepend-icon="mdi-lock"
                :append-icon= "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append= "showPassword = !showPassword"
                required
              />
              </v-form>
            </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="registerUser" type="submit">Create Account </v-btn>
            <v-btn color="error" to="/">cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
  </LoginOrSignupLayout>
</template>

<script>
import LoginOrSignupLayout from '../layouts/LoginOrSignupLayout'

export default {
  components: {
    LoginOrSignupLayout
  },
  data: () => ({
    showPassword: false,
    username: '',
    email: '',
    password: ''
  }),
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  methods: {
    submitForm () {
      this.$axios.post('/api/users', {
        username: this.username,
        email: this.email,
        password: this.password
      }).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>