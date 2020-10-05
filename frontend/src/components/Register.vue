<template>
  <div>
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
              <v-form v-model="valid">
                <v-text-field
                  label="Your username"
                  v-model="dataSignup.userName"
                  prepend-icon="mdi-account-circle"
                  type="text"
                  required
                ></v-text-field>

                <v-text-field
                  label="Your email address"
                  v-model="dataSignup.email"
                  prepend-icon="mdi-mail"
                  type= "text"
                  required
                >
                </v-text-field>
                <v-text-field
                :type= "showPassword ? 'text' : 'password' "
                label= "Your password"
                v-model= "dataSignup.password"
                prepend-icon="mdi-lock"
                :append-icon= "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append= "showPassword = !showPassword"
              />
              </v-form>
            </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit" @click="submitSignup()">
              Create Account
            </v-btn>
            <v-btn color="error" to="/">cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data: () => ({
    showPassword: false,
    userName: '',
    email: '',
    password: '',
    dataSignupS: ''
  }),
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  methods: {
    submitSignup () {
      this.dataSignup = JSON.stringify(this.dataSignup)
      axios.post('http://localhost:3000/api/auth/signup', this.dataSignupS, { headers: { 'Content-Type': 'application/json' } })
    }
  }
}
</script>