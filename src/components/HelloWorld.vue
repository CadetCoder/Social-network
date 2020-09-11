<template>
   <v-main>
     <v-layout
     text-xs-center
     wrap>
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
        <p class="subheading font-weight-regular">
          This is a fun internal social network app!
          <br>Please signup in order to have fun connection with your colleagues
        </p>
      </v-flex>
     </v-layout>
   </v-main>
</template>

<style>
h1 {
    color: #ECEFF1;
  }
p{
  color: #ECEFF1;
}
.bg-img{
  background-image: url('../assets/bg-building.jpg');
  opacity: 10%;
  height: 100%;
}
</style>