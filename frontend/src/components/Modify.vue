<template>
    <v-main id="moderation" class="moderation">
        <top-header/>
        <div class="ml-12">
            <h1 class="ma-4">Modify</h1>
            <v-container>
                <v-btn class="ma-3" @click="clickPosts">Posts</v-btn>
                <v-btn class="ma-3" @click="clickComments">Comments</v-btn>
                <div v-if="showPosts">
                    <v-card class="wall__post ma-3 mt-6" v-for="(post, index) in allPosts" v-bind:key="index">
                        <v-card-title>
                            <h2 class="wall__post__title">{{ post.title }}</h2>
                        </v-card-title>

                        <v-card-subtitle class=" wall__post__name">
                            by {{ post.firstName }} {{ post.lastName }}, by {{ post.date }}
                        </v-card-subtitle>

                        <v-card-text class="v-card-text black--text wall__post__content" >
                            {{ post.content }}
                        </v-card-text>

                        <v-card-actions class="wall__post__manage">
                            <v-btn class="wall__post__manage--btn" title="delete post" @click="deletePost(post.id)" icon>
                                <v-icon>mdi-delete-outline</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                <div v-if="showComments">
                    <v-card class="wall__comments--ind my-1 mx-2 pa-0" color="rgba(255,215,215,0.3)"
                    v-for="(comment, index) in allComments" v-bind:key="index"
                    outlined>
                        <v-card-subtitle class=" pb-0 wall__comments__name">
                             {{ comment.date }},
                             {{ comment.firstName }}
                             {{ comment.lastName }}
                             comment :
                        </v-card-subtitle>

                        <v-card-text class="text--primary wall__comments__content ">
                            {{ comment.comContent }}
                        </v-card-text>

                        <v-card-actions class="wall__comments__manage">
                            <v-btn title="delete comment" class="wall__comments__manage--btn" @click="deleteComment(comment.id)"
                            icon>
                                <v-icon >mdi-delete-outline</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-container>
        </div>
    </v-main>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
export default {
    name: 'Modify',
    data () {
        return {
            allPosts: [],
            allComments: [],
            showPosts: true,
            showComments: false
        }
    },
    components: {
        'top-header': TopHeader
    },
    methods: {
        clickPosts () {
            this.showPosts = true
            this.showComments = false
        },
        clickComments () {
            this.showPosts = false
            this.showComments = true
        },
        deletePost (pId) {
            fetch ('http://localhost:3000/api/modify/post/' + pId, { headers: { Authorization: 'Bearer ' + localStorage.token } })
                .then(response => {
                    const rep = JSON.parse(response.data)
                    console.log(rep.message)
                    window.location.assign('http://localhost:8080/Modify')
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteComment (cId) {
            fetch.delete('http://localhost:3000/api/modify/comment/' + cId, { headers: { Authorization: 'Bearer ' + localStorage.token } })
                .then(response => {
                    const rep = JSON.parse(response.data)
                    console.log(rep.message)
                    window.location.assign('http://localhost:8080/Modify')
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mounted () {
        fetch.get('http://localhost:3000/api/modify/posts', { headers: { Authorization: 'Bearer ' + localStorage.token } })
            .then(response => {
                const posts = JSON.parse(response.data)
                this.allPosts = posts
            })
            .catch(error => {
            console.log(error)
            })
        fetch.get('http://localhost:3000/api/modify/comments', { headers: { Authorization: 'Bearer ' + localStorage.token } })
                .then(response => {
                    const com = JSON.parse(response.data)
                    this.allComments = com
                })
                .catch(error => {
                console.log(error)
                })
    }
}
</script>

<style lang="scss">
</style>