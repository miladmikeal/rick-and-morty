<template>
  <div class="sm:flex sm:items-center px-6 py-4">
    <img
      class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
      :src="character.image"
      alt="Character Image"
    />
    <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
      <p class="text-lg leading-tight">{{character.name}}</p>
      <p class="text-sm leading-tight text-gray-600">
        {{character.species}} -
        <span
          class="text-sm leading-tight"
          :class="character.status === 'Dead' ? 'text-red-500' : 'text-green-500'"
        >{{character.status}}</span>
      </p>
      <div class="mt-4">
        <button
          class="relative z-40 text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal focus:outline-none focus:shadow-outline"
          @click="viewDetails(character.id)"
        >Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
  methods: {
    viewDetails(id) {
      this.$router.push(`/characters/${id}`);
    }
  }
};
</script>

<style>
</style>