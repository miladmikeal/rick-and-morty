<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-around">
      <div
        v-for="character in characters.results"
        :key="character.id"
        class="w-1/4 bg-white shadow-lg rounded-lg overflow-hidden my-3 mx-1"
      >
        <div class="sm:flex sm:items-center px-6 py-4">
          <img
            class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
            :src="character.image"
            alt="Character Image"
          />
          <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p class="text-lg leading-tight">{{character.name}}</p>
            <p class="text-sm leading-tight text-gray-600">{{character.species}}</p>
            <div class="mt-4">
              <button
                class="text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal"
              >Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      characters: [],
      iframeId: "",
      iframeOpen: false
    };
  },
  apollo: {
    characters: gql`
      query {
        characters {
          results {
            id
            name
            status
            gender
            species
            type
            origin {
              name
              type
              dimension
            }
            location {
              name
              type
              dimension
            }
            image
          }
        }
      }
    `
  }
};
</script>