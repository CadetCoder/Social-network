<template>
  <div class="w-50 h-full overflow-y-scroll">
    <div class="px-5 py-3 border-b-8 border-lighter flex">
      <div>
        <v-img src="../assets/icon.png" class=" rounded-full border border-lighter" />
      </div>
      <v-form class="w-full px-4 relative">
        <v-textarea name="redditpost" id="" cols="30" rows="10" />
      <v-btn type="submit" class="h-10">post</v-btn>
      <v-btn type="submit" class="h-10" to="/feeds">cancel</v-btn>
      </v-form>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
</script>