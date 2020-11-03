<template>
  <v-main>
    <top-header/>
    <scrollTop />
    <div class="ml-12">
      <h1 class="ma-4">Posts</h1>
      <v-container>
        <v-dialog
          v-model="dialog"
          max-width="600px">
          <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-3"
          v-bind="attrs"
          v-on="on">
          Create a post
        </v-btn>
          </template>
          <new-post
            @create-new-post="addPost"
          />
        </v-dialog>
        <!-- Posts -->
        <v-card
          class="ma-3 mt-6"
          width="400"
          v-for="(post, index) in allPosts"
          :key="index"
        >
          <div>
            <v-card-title>
              <h2 class="ml-0">{{ post.title }}</h2>
            </v-card-title>
          </div>
            <v-card-subtitle>
              posted by
              {{ post.userName }}
              {{ post.date | time }}
            </v-card-subtitle>
            <v-card-text>
             {{ post.content }}
            </v-card-text>
           <v-card-text class="py-0">
              <v-btn
                fab
                title="like ?"
                class="ma-3"
                color="red"
                x-small
                @click="likePost(post.id, post.likes)">
                  <v-icon>
                   mdi-thumb-up-outline
                  </v-icon>
              </v-btn>
                {{ post.likes }}
              <v-icon>mdi-thumb-down-outline</v-icon>

              <v-btn
                text
                @click="postCom(post.id)"
                title="view comments">
                  <v-icon>
                    mdi-comment-eye-outline
                  </v-icon>
                  comments
              </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import TopHeader from '../components/TopHeader'
import scrollTop from '../components/scrollTop'
import NewPost from '../components/NewPost'
export default {
  components: {
    'top-header': TopHeader,
    scrollTop,
    NewPost
  },
  data () {
    return {
      dialog: false,
      userName: '',
      allLikes: [],
      allComments: [],
      postId: '',
      dialogUpCom: false,
      dialogUpPost: false,
      allPosts: [
        {
          title: 'hello',
          userName: '/reddit user',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: '1604155667381'
        },
        {
          title: 'another hello',
          unserName: 'another reddit user',
          content: 'New post',
          date: ''
        },
        {
          title: 'hello',
          userName: '/reddit user',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: '1604155667381'
        },
        {
          title: 'hello',
          userName: '/reddit user',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: '1604155667381'
        }
      ]
    }
  },
  methods: {
    postForm () {
      this.$router.push('new-post')
    },
    addPost (additionalPost) {
      this.allPosts.unshift(additionalPost)
      this.dialog = false
    }
  },
  filters: {
    time (date) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
      return Intl.DateTimeFormat('en-GB').format(date)
    }
  }
}
</script>

<style>

</style>