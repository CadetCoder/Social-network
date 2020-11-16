.<template>
  <v-dialog
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        <h2>Write a post</h2>
      </v-card-title>
        Image
    </v-card>
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
							@click="submitMmediaPost">
							Post
						</v-btn>
					</v-card-actions>

					</v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dataPost: {
              title: '',
							content: '',
							image: null,
              userId: localStorage.userId
          }
    }
  }
}
</script>

<style>

</style>