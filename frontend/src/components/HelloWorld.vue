<template>
   <v-main id="bg-img">
    <v-col
      background-color="transparent"
      cols="12"
      sm="8"
      md="4"
      class="mx-auto"
    >
     <v-layout
      text-xs-center
      wrap
     >
      <v-flex xs12>
          <v-img
            :src="require('../assets/logo-main-white.png')"
            class="my-4"
            contain
            height="200">
          </v-img>
      </v-flex>
        <v-flex mb-6>
          <h1 class="display-2 ma-6" font-weight-bold > Welcome to Groupomania
          </h1>
          <v-spacer></v-spacer>
          <p class="subheading font-weight-regular">
            This is a fun internal social network app!
            <br>Please signup in order to have fun connection with your colleagues
          </p>
        </v-flex>
     </v-layout>
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
#bg-img{
  background-image: url('../assets/bg-building.jpg');
  opacity: 10%;
  height: 100%;
  width: 0 auto;
}
a {
  text-decoration: none;
}
</style>