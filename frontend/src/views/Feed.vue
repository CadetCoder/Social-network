<template>
	<v-container fluid class="feed-container">
		<v-row class="block">
			<v-col sm="12" md="6" class="mx-auto">
				<v-card flat class="posts-card ">
					<v-img
						:src="require('../assets/logo_transparent.png')"
						class="my-2"
						contain
						height="50"
						alt="logo groupomania"
					/>
					<h1 class="font-weight-regular text-center">News feed!</h1>
					<v-card-title
						class=" d-flex justify-space-between"
						fixed
						flat
						dense
						dark
					>
						<v-tooltip bottom>
							<template v-slot:activator="{ on, attrs }">
								<v-btn
									to="/posts"
									small
									class="recents"
									v-bind="attrs"
									v-on="on"
								>
									Recent posts
								</v-btn>
							</template>
							<span>Recent posts</span>
						</v-tooltip>
						<v-tooltip bottom>
							<template v-slot:activator="{ on, attrs }">
								<v-btn
									to="/hot"
									small
									class="hot-posts"
									v-bind="attrs"
									v-on="on"
								>
									Most liked
								</v-btn>
							</template>
							<span>Most liked</span>
						</v-tooltip>

						<v-tooltip bottom>
							<template v-slot:activator="{ on, attrs }">
								<v-btn small to="/add" v-bind="attrs" v-on="on">
									<v-icon
										aria-label="Add post"
										role="img"
										aria-hidden="false"
										>{{ mdiNotePlusOutline }}</v-icon
									>
								</v-btn>
							</template>
							<span>Add post</span>
						</v-tooltip>
					</v-card-title>
				</v-card>
			</v-col>
		</v-row>
		<v-row
			class=" block2 text-center d-flex flex-column justify-center align-center"
		>
			<v-col sm="12" md="6" class="mx-auto">
				<v-card
					v-if="$store.state.posts.length !== 0"
					class="posts-card mx-auto"
					elevation="2"
				>
					<v-card-text>
						<posts
							v-for="post of posts"
							:key="post.id"
							:post="post"
							:id="post.id"
							@deletePost="deletePost(post.id)"
							@likePost="likePost(post.id)"
							@reloadFeed="reloadFeed()"
							@onSubmitComment="onSubmitComment(post.id)"
							@deleteComment="deleteComment(comment.id)"
						>
						</posts>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<v-card
			v-if="$store.state.posts.length === 0"
			class="posts-card mx-auto"
			elevation="0"
		>
			<v-card-title class="d-flex justify-center" flat dense dark>
				<span>Be the first to make a post !</span>
			</v-card-title>
		</v-card>
	</v-container>
</template>

<script>
import Posts from '@/components/Posts.vue'
import { mdiNotePlusOutline } from '@mdi/js'
export default {
	name: 'Feed',
	components: {
		Posts
	},
	computed: {
		posts () {
			return this.$store.getters.posts
		}
	},
	data () {
		return {
			errorMessage: null,
			mdiNotePlusOutline
			}
	},
	beforeMount () {
		this.$store.dispatch('getPosts')
	},

	methods: {
		deletePost (id) {
			this.$store.dispatch('deletePost', id)
		},
		deleteComment (id) {
			this.$store.dispatch('deleteComment', id)
		},

		likePost (id) {
			console.log(id)
			const data = 1
			this.$store.dispatch('likePost', {
				id: id,
				data: data
			})
			this.$store.dispatch('getPosts')
		},
		renderView () {
			this.$store.dispatch('RenderView', this.render + 1)
		}

	}
}
</script>

<style lang="scss" scoped></style>
