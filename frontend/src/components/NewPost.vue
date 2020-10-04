<template>
    <v-app id="formPost">
        <h1 class="ml-12">Feeds</h1>
        <v-card class="ma-3 ml-12">
            <v-card-title class="mb-3">
                <h2>New Post </h2>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" class="ma-3" v-model="valid" >
                    <v-text-field v-model="dataPost.title" :rules="titleRules" :counter="50" label="Title" autofocus required></v-text-field>
                    <v-textarea v-model="dataPost.content" :rules="contentRules" label="Content" required></v-textarea>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn  :disabled="!valid" class="success" @click="sendPost">Post</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>
<script>
import axios from 'axios'
export default {
    name: 'NewPost',
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
        sendPost () {
            this.dataPostS = JSON.stringify(this.dataPost)
            axios.post('http://localhost:3000/api/posts/', this.dataPostS, { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.token } })
                .then(response => {
                    const rep = JSON.parse(response.data)
                    this.message = rep.message
                    this.msg = true
                    this.form = false
                    this.$router.push('/Home/Feeds')
                })
                .catch(error => {
                    console.log(error)
                    this.message = error
                    this.msg = true
                })
        }
    },
    components: {
       //

    }
}