<template>
  <v-container fluid class="signup-container">
    <v-layout v-if="$store.state.isLoggedIn" row class="account-box mb-5">
      <v-col lg="4" md="6" sm="7" class="mx-auto">
        <v-card class="account-card d-flex flex-column" elevation="4" xs6>
          <div class="profile-top pb-3 ">
            <v-btn to="/posts" class="mx-2 return-btn" x-small>
              Return
            </v-btn>
            <v-card-title flat dense dark class="profile-title mr-3"
              ><h1 class="title">Edit profile</h1>
            </v-card-title>
            <div class="delete-account">
              <v-tooltip v-if="!$store.state.user.admin === true" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    @click="deleteAccount(user.id)"
                    class="mx-2"
                    fab
                    x-small
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon small class=" rounded-circle ">
                      $vuetify.icons.delete
                    </v-icon>
                  </v-btn>
                </template>
                <span>Delete account</span>
              </v-tooltip>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="profile-middle mt-3 ">
            <v-card-title
              v-if="showUsername"
              dark
              class=" profile-middle__left d-flex justify-space-between"
            >
              <span class="username"> Hi {{ user.username }} ! </span>
              <v-btn @click="toggleUsername" x-small>
                Edit
              </v-btn>
            </v-card-title>
            <v-text-field
              v-if="updateUsername"
              label="New username"
              v-model="newUsername"
              :rules="usernameRules"
              required
              counter="30"
              hint="Username must have min of 3 characters and max of 30"
              class="input-group--focused  mx-3"
            ></v-text-field>

            <v-divider></v-divider>
            <v-card-title
              v-if="showPhoto"
              class="profile-middle__right d-flex  flex-column"
            >
              <v-avatar size="96px" class="mt-2">
                <img
                  rounded
                  v-if="user.photo"
                  :src="user.photo"
                  alt="Profile picture"
                />
                <v-icon
                  :color="isLoggedIn"
                  size="96px"
                  aria-label="avatar"
                  v-else
                  >$vuetify.icons.account</v-icon
                >
              </v-avatar>
              <v-btn @click="togglePhoto" class="mx-2" x-small>
                Switch User
              </v-btn>
            </v-card-title>

            <div v-if="updatePhoto" class="d-flex justify-center">
              <label for="image" class="mr-3">Photo</label>
              <input
                @change="uploadImage"
                type="file"
                accept="image/png, image/jpeg, image/bmp, image/gif"
                ref="file"
                name="image"
                class="input-group--focused"
              />
            </div>
          </div>
          <v-divider></v-divider>
          <v-card-text v-if="showBio" class=" bio">
            <div
              class="d-flex flex-column justify-space-between"
              max-width="70%"
            >
              <strong>Your bio: </strong>
              <div>
                <span v-if="!user.bio"> Tell us about you 😊</span>
                <span class="bio-field">{{ user.bio }}</span>
              </div>
            </div>
            <v-btn @click="toggleBio" class="mx-2 mt-2 mr-n6" x-small>
              Edit
            </v-btn>
          </v-card-text>
          <v-textarea
            v-if="updateBio"
            label="Bio"
            v-model="newBio"
            :rules="bioRules"
            solo
            name="input-7-4"
            class="input-group--focused bio"
          >
          </v-textarea>
          <div>
            <v-card-text v-if="options" class="font-weight-light">
              <br />
              <div class="danger-alert" v-html="errorMessage" />
              <div class="danger-alert" v-html="messageReturn" />

              <div class="d-flex justify-center">
                <v-btn @click="onSubmit(user.id)" :disabled="!isValid"
                  >Submit</v-btn
                >
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-layout>
    <v-card v-else>
      <v-card-title class="post-title-box">
        <div class=" d-flex flex-column update-title pl-3 pb-5 ">
          <span class="title font-weight-light post-title pb-5 "
            >Your account has been deleted</span
          >
        </div>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      updateBio: false,
      updateUsername: false,
      updatePhoto: false,
      showUsername: true,
      showPhoto: true,
      showBio: true,
      isValid: true,
      options: false,
      newUsername: '',
      newBio: '',
      usernameRules: [
        (v) => v.length <= 30 || 'Max 30 characters',
        (v) => !!v || 'Username is required'
      ],
      bioRules: [(v) => v.length <= 400 || 'Max 400 characters'],
      file: '',
      messageReturn: null,
      errorMessage: null
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    isLoggedIn () {
      if (this.$store.state.isLoggedIn) {
        return 'pink'
      } else {
        return ''
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getUserById')
  },
  methods: {
    getBackHome () {
      this.$router.push('/')
    },
    toggleUsername () {
      this.updateUsername = true
      this.showUsername = false
      this.options = true
    },
    togglePhoto () {
      this.updatePhoto = true
      this.showImage = false
      this.options = true
      this.showPhoto = false
    },
    toggleBio () {
      this.updateBio = true
      this.showBio = false
      this.options = true
    },
    uploadImage () {
      const file = this.$refs.file.files[0]
      this.file = file
      console.log(this.file)
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('username', this.newUsername)
      formData.append('bio', this.newBio)
      if (this.file !== null) {
        formData.append('image', this.file)
      }
      this.$store.dispatch('getUsers')
      this.$store.dispatch('getUserById', this.user.id)
      this.$store.dispatch('updateAccount', formData)
      this.$store.dispatch('getUserById', this.user.id)
      this.updateBio = false
      this.updatePhoto = false
      this.updateUsername = false
      this.options = false
      this.showBio = true
      this.showPhoto = true
      this.showUsername = true
    },
    deleteAccount (id) {
      this.$store.dispatch('deleteAccount', id)
      this.$store.dispatch('logOut')
      setTimeout(() => {
        this.getBackHome()
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-avatar {
  margin-top: -30px;
  margin-right: 1em;
}
.account-card {
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
  margin-bottom: 4em;
}
.profile-top {
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
}
.profile-middle {
  width: 100%;
  margin: auto !important;
}
.profile-title {
  padding: 0;
}
</style>