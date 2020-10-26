<template>
    <v-main id="formPost">
        <top-header />
        <h1 class="ml-16">Posts</h1>
        <v-card class="mx-auto" width="600">
            <v-card-title class="mb-3">
                <h2> New Post </h2>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" class="ma-3" v-model="valid" >
                    <v-text-field
                        v-model="dataPost.title"
                        :rules="titleRules"
                        :counter="50"
                        label="Title"
                        autofocus
                        required>
                    </v-text-field>
                    <v-textarea
                        v-model="dataPost.content"
                        :rules="contentRules"
                        label="Content"
                        required>
                    </v-textarea>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn
                    :disabled="!valid"
                    class="success"
                    @click="createPost">
                    Post
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-main>
</template>
<script>
import TopHeader from '../layouts/TopHeader'
export default {
    name: 'FormPost',
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
                userId: localStorage.userId
            },
            dataPostS: '',
            msg: false,
            message: ''
        }
    },
    methods: {
        createPost () {
          this.$emit.unshift('postItems')
        }
    },
    components: {
        'top-header': TopHeader
    }
}
</script>
<style lang="scss">
</style>