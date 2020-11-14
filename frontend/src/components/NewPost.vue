<template>
<div>
    <div class="mt-12">
    <v-card class="mx-auto fill-height" width="600">
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold display-3 basil--text">
                Create a post
            </h1>
        </v-card-title>
                <!--- Tabs --->
        <v-tabs
            background-color="transparent"
            color="white"
            grow
            v-model="tab"
        >

            <v-tab>
                <v-icon
                    class="mr-2"
                    medium
                    color="blue darken-2">
                    mdi-message-text
                </v-icon>
                    Post
            </v-tab>

            <v-tab>
                <v-icon
                    class="mr-2"
                    medium
                    color="blue darken-2">
                    mdi-image-plus
                </v-icon>
                    Image
            </v-tab>

        <v-tab-item>
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
                            >
                        </v-text-field>
                        <v-card>
                        <v-textarea
                            outlined
                            v-model="dataPost.content"
                            :rules="contentRules"
                            label="Content"
                            required>
                        </v-textarea>
                        </v-card>
                    </v-form>
            </v-card-text>

            <v-card-actions>
							<v-btn
								:disabled="!valid"
								class="success"
								@click="createNewPost">
									Post
							</v-btn>
            </v-card-actions>
            </v-card>
            </v-tab-item>

             <v-tab-item>
            <v-card
                flat
            >
							<v-card-text>
									<v-form ref="form" class="ma-3" v-model="valid" >
											<v-text-field
													v-model="dataPost.title"
													:rules="titleRules"
													:counter="50"
													label="Title"
													outlined
													autofocus
													required>
											</v-text-field>
											<v-file-input
												type="file"
												class="mt-6"
												label="Upload image"
												outlined
												prepend-icon="mdi-camera"
												required
												accept="image/*"
												@change="imageUpload"
											>
											</v-file-input>
									</v-form>
					</v-card-text>

					<v-card-actions>
						<v-btn
							:disabled="!valid"
							class="success"
							@click="createNewPost">
							Post
						</v-btn>
					</v-card-actions>

					</v-card>
					</v-tab-item>
					</v-tabs>
        </v-card>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
          tab: null,
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
      createNewPost () {
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