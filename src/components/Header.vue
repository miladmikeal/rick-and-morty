<template>
  <nav class="flex items-center justify-between flex-wrap bg-yellow-200 p-6 border-blue-500">
    <div class="flex items-center flex-shrink-0 text-blue mr-6">
      <img src="../assets/Rick_and_Morty.svg" alt="Logo" />
    </div>

    <div class="block flex-grow lg:flex lg:items-center ml-auto lg:w-auto">
      <div class="flex justify-end text-sm lg:flex-grow">
        <router-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-700 hover:text-blue mr-4"
        >Home</router-link>
        <router-link
          to="/characters"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-700 hover:text-blue mr-4"
        >Characters</router-link>
        <router-link
          to="/locations"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-700 hover:text-blue"
        >Locations</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
</style>