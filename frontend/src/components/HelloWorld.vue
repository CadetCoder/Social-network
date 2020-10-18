<template>
   <v-main>
    <v-col
      cols="12"
      sm="8"
      md="8"
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
            height="180">
          </v-img>
      </v-flex>

      <v-flex mb-6>
        <h1 class="display-2" font-weight-bold mb-3> Welcome to   Groupomania
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

<style>
h1 p {
    color: inherit;
  }
.bg-img{
  background-image: url('../assets/bg-building.jpg');
  opacity: 10%;
  height: 100%;
}
a {
  text-decoration: none;
}
</style>