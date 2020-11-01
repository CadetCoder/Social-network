<template>
<v-main>
    <top-header/>
    <v-card>
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold display-3 basil--text">
                Create a post
            </h1>
        </v-card-title>
                <!--- Tabs --->
        <v-tabs
            v-model="tab"
            background-color="transparent"
            color="white"
            grow
        >

            <v-tab
                v-for="item in items"
                :key="item"
            >
                {{ item }}
            </v-tab>
        </v-tabs>

        <v-tab-items v-model="tab">
            <v-tab-item
                v-for="item in items"
                :key="item"
            >
                <v-card
                    flat
                >

                </v-card>

             </v-tab-item>

        </v-tab-items>
    </v-card>
</v-main>
</template>
<script>
import TopHeader from '../components/TopHeader'
export default {
    name: 'FormPost',
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
                userId: localStorage.userId
            },
            dataPostS: '',
            msg: false,
            message: '',
            items: [
                'Post',
                'Images'
            ]
        }
    },
    methods: {
        createPost () {
          //
        }
    },
    components: {
        'top-header': TopHeader
    }
}
</script>
<style lang="scss">
</style>