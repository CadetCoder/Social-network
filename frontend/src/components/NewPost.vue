/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
<template>
  <v-container fluid class="post-box">
    <v-card class="mx-auto post-card" max-width="600">
      <v-card-title class="post-title-box">
        <v-icon
          aria-label="message"
          role="img"
          aria-hidden="true"
          large
          color="white"
          left
        >
          {{ mdiMessageSettingsOutline }}
        </v-icon>
        <div>
          <h1 class="font-weight-regular title title_new">
            What's on your mind ?
          </h1>
        </div>
      </v-card-title>
      <v-form
        v-model="isValid"
        @submit.prevent="onSubmit"
        enctype="multipart/form-data"
        class="validate"
      >
        <div class="block-status py-5 px-5 mr-5">
          <v-textarea
            name="input-1-3"
            label="Message"
            v-model="message"
            :rules="[rules.required]"
            auto-grow
            class="input-group--focused"
          ></v-textarea>
        </div>
        <v-card-text
          v-if="options"
          class="d-flex flex-column justify-center my-3"
        >
          <div class=" d-flex justify-center">
            <v-icon large center>
              {{ mdiHospitalBox }}
            </v-icon>
          </div>
          <div>
            <div class=" d-flex justify-space-around">
              <v-btn @click="toggleLink" small>
                Gif
              </v-btn>

              <v-btn @click="toggleImage" small>
                Image
              </v-btn>
            </div>
          </div>
        </v-card-text>
        <div class="d-flex justify-center">
          <div v-if="withImage" class="pb-5 pt-5 ">
            <div class="d-flex  justify-center ">
              <label for="image" class="pr-2">Image</label>
              <input
                @change="uploadImage"
                type="file"
                accept="image/png, image/jpeg,
                image/bmp, image/gif"
                ref="file"
                name=" upload an image"
                class="input-group--focused"
              />
            </div>
          </div>
          <div v-if="withLink" class="pb-5 pt-5 d-flex  justify-center">
            <v-text-field
              name="input-1-7"
              filled
              label="GIF link"
              v-model="link"
              auto-grow
              class="input-group--focused"
            >
            </v-text-field>
          </div>
        </div>
        <div class="pb-5 pt-5 d-flex justify-center">
          <v-btn @click="onSubmit" :disabled="!isValid">Add post</v-btn>
        </div>
      </v-form>
      <br />
      <br />
      <div>
        <div class="danger-alert" v-html="errorMessage" />
        <div class="danger-alert" v-html="messageReturn" />
      </div>
    </v-card>
  </v-container>
</template>
<script>
import { mdiMessageSettingsOutline, mdiHospitalBox } from '@mdi/js'

export default {
  name: 'NewPost',

  data () {
    return {
      mdiMessageSettingsOutline,
      mdiHospitalBox,
      isValid: true,
      options: true,
      showLink: true,
      showImage: false,
      withLink: false,
      withImage: false,
      withText: false,
      rules: {
        required: (value) => !!value || 'Required.'
      },
      message: '',
      link: null,
      file: ''
    }
  },
  computed: {
    messageReturn () {
      // eslint-disable-next-line semi
      return this.$store.getters.message;
    },
    errorMessage () {
      // eslint-disable-next-line semi
      return this.$store.getters.error;
    }
  },
  methods: {
    toggleLink () {
      // eslint-disable-next-line no-sequences
      // eslint-disable-next-line semi
      (this.withLink = true) (this.options = false);
    },
    toggleImage () {
      // eslint-disable-next-line no-sequences
      // eslint-disable-next-line semi
      (this.withImage = true) (this.options = false);
    },
    uploadImage () {
      // eslint-disable-next-line semi
      const file = this.$refs.file.files[0];
      // eslint-disable-next-line semi
      this.file = file;
    },
    onSubmit () {
      // eslint-disable-next-line semi
      const formData = new FormData();
      // eslint-disable-next-line semi
      formData.append('message', this.message);
      if (this.link !== null) {
        // eslint-disable-next-line semi
        formData.append('link', this.link);
      }
      if (this.file !== null) {
        // eslint-disable-next-line semi
        formData.append('image', this.file);
      }
      // eslint-disable-next-line semi
      this.$store.dispatch('createPost', formData);
      // eslint-disable-next-line semi
      this.$router.push('/posts');
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
