<template>
  <div>
    <top-header/>
    <scrollTop />
    <div class="ml-12">
      <h1 class="ma-4">Posts</h1>
      <v-container>
        <v-btn class="ma-3" @click="postForm">
          Create a post
        </v-btn>
        <!-- Posts -->
        <v-card
          class="ma-3 mt-6"
          width="400"
          v-for="(post, index) in posts"
          :key="index"
        >
          <div>
            <v-card-title>
              <h2 class="ml-0">{{ post.title }}</h2>
            </v-card-title>
            <v-card-subtitle>
              posted by {{ post.userName }} {{ post.date | time }}
            </v-card-subtitle>
            <v-card-text>
             {{ post.text }}
            </v-card-text>
          </div>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import TopHeader from '../components/TopHeader'
import scrollTop from '../components/scrollTop'
export default {
  components: {
    'top-header': TopHeader,
    scrollTop
  },
  data () {
    return {
      posts: [
        {
          title: 'hello',
          userName: '/reddit user',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: '1604155667381'
        },
        {
          title: 'hello',
          unserName: 'another reddit user'
        }
      ]
    }
  },
  methods: {
    postForm () {
      this.$router.push('new-post')
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