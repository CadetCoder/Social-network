<template>
   <v-main
   class="fill-height bg-img">
    <v-col
      cols="12"
      sm="8"
      md="4"
      class="mx-auto"
    >
     <v-card
      text-xs-center
      wrap
     >
      <v-card xs12>
          <v-img
            :src="require('../assets/logo-main-white.png')"
            class="my-4"
            contain
            height="150">
          </v-img>
      </v-card>
      <v-spacer></v-spacer>
        <v-flex mb-6>
            <h1 class="display-2 ma-6" font-weight-bold >Welcome to Groupomania
          </h1>
          <v-spacer></v-spacer>
          <p class="subheading font-weight-regular">
            This is a fun internal social network app!
            <br>Please signup in order to have fun connection with your colleagues
          </p>
        </v-flex>
     </v-card>
    </v-col>
     </v-main>
</template>
<script>
    //
</script>
<style>
h1 p {
    color: inherit;
  }
a {
  text-decoration: none;
}
.bg-img {
  background-image: url('../assets/bg-teamwork.jpeg');
  background-size: cover;
  }
</style>