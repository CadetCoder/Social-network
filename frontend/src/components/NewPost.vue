<template>
    <v-app id="formPost">
        <top-header/>
        <h1 class="ml-12">Feeds</h1>
        <v-card class="ma-3 ml-12">
            <v-card-title class="mb-3">
                <h2>New Post</h2>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" class="ma-3" v-model="valid" >
                    <v-text-field v-model="title" :rules="titleRules" :counter="50" label="Title" autofocus required></v-text-field>
                    <v-textarea v-model="content" :rules="contentRules" label="Content" required></v-textarea>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn  :disabled="!valid" class="success" @click="submitPost">Post</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                rounded
                >
                <v-icon
                left
                color="indigo"
                dark>
                mdi-cloud-upload
                </v-icon>
                add image/gif
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<style scoped>
.left {
  margin-right: 8px;
}
</style>