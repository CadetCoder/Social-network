<template>
    <v-card class="mx-auto elevation-12 col-md-4 mt-12" max-width="600">
    <v-form>
      <v-text-field
        v-model="title"
        label="Title"
      ></v-text-field>
      <v-textarea
        v-model="comment"
        solo
        name="input-7-4"
        label="Comments"
      ></v-textarea>
      <v-file-input
      label="File input"
      filled
      prepend-icon="mdi-camera"
      @change="upload"
      ></v-file-input>
      <v-btn type="submit">Submit</v-btn>
    </v-form>
    </v-card>
</template>

<script>
export default {
  components: {
    //
  },
  data: () => ({
    title: '',
    comment: '',
    file: null
  }),
  methods: {
    upload (file) {
      this.file = file
      console.log(file)
    }
  }
}
</script>