<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 black--text text--accent-4">Sign in to</h1>
                        <div class="text-center mt-4"><img src="../assets/logo.png"></div>
                        <v-spacer></v-spacer>
                        <div class="text-center" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">Please enter your email for registration</h4>
                        <!-- Sign up form -->
                        <v-form>
                          <v-text-field
                          label="Email"
                          name="email"
                          prepend-icon="email"
                          type="email"
                          :color="black"
                          />
                          <v-text-field
                          v-model="login"
                          label="Password"
                          name="Pasword"
                          prepend-icon="lock"
                          :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye-off'"
                          :type="showPassword ? 'text' : 'password'"
                          @click:append="showPassword = !showPassword"
                          />

                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="grey lighten-2">Sign In</v-btn>
                      </div>
                      </v-col>
                    <v-col cols="12" md="4"></v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">

                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    step: 1,
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
  .fill-height {
    background-color: gray;
  }
</style>