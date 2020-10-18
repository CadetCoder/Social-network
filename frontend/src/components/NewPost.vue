<template>
    <v-app id="formPost">
        <h1 class="ml-12">Posts</h1>
        <v-card class="ma-3 ml-12">
            <v-card-title class="mb-3">
                <h2> New Post </h2>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" class="ma-3" v-model="valid" >
                    <v-text-field v-model="dataPost.title" :rules="titleRules" :counter="50" label="Title" autofocus required></v-text-field>
                    <v-textarea v-model="dataPost.content" :rules="contentRules" label="Content" required></v-textarea>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn  :disabled="!valid" class="success" @click="creatPost">Post</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>
<script>
import axios from 'axios'
export default {
    name: 'FormPost',
    data () {
        return {
            valid: true,
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
        creatPost () {
            this.$emit.unshift( items: {
                id: this.post.lenght +1
            } )
        }
    },
    components: {

    }
}
</script>
<style lang="scss">
</style>