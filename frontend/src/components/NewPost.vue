<template>
  <div>
    <div class="mt-12">
      <v-card
        class="mx-auto fill-height" width="600">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-3 basil--text">
            Create a new post
            </h1>
        </v-card-title>
            <v-card
                flat
            >
                <v-card-text>
                    <v-form ref="form"
                    class="ma-3"
                    v-model="valid" >
                        <v-text-field
                            v-model="dataPost.title"
                            :rules="titleRules"
                            :counter="50"
                            label="Title"
                            autofocus
                            required
                            outlined
                            class="mb-3"
                            prepend-icon="mdi-folder"
                            >
                        </v-text-field>
                        <v-card>
                        <v-textarea
                            outlined
                            v-model="dataPost.content"
                            :rules="contentRules"
                            label="Content"
                            required
                            prepend-icon="mdi-folder-edit">
                        </v-textarea>
                        </v-card>
                    </v-form>
            </v-card-text>

            <v-card-actions>
							<v-btn
								:disabled="!valid"
								class="success"
								@click="submitTextPost">
									Post
							</v-btn>
            </v-card-actions>
            </v-card>
        </v-card>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
          valid: true,
          newPost: '',
          titleRules: [
              v => !!v || 'Title is required',
              v => (v && v.length <= 50) || 'Title must be less than 50 characters'
          ],
          contentRules: [
              v => !!v || 'Content is required'
          ],
          dataPost: {
              title: '',
							content: '',
							image: null,
              userId: localStorage.userId
          },
          dataPostS: '',
          msg: false,
          message: '',
          image: null,
          imageUrl: null
        }
    },
    methods: {
      submitTextPost () {
        this.$emit('create-new-post', this.dataPost)
          localStorage.clear()
          console.log('Post created!')
          },
        imageUpload (e) {
          console.log(e)
          const fileReader = new FileReader()
          fileReader.readAsDataURL(e)
          fileReader.onload = (e) => {
              console.log (fileReader.result)
              this.imageUrl = e.target.result
          }
			}
    },
    components: {
    }
}
</script>
<style lang="scss">
</style>