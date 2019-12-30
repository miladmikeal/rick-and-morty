<template>
  <div class="container mx-auto">
    <div v-if="characters.length === 0">Loading...</div>
    <div v-else class="flex flex-wrap justify-center -mb-4">
      <div
        v-for="character in characters.results"
        :key="character.id"
        class="relative w-3/4 sm:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden px-2 my-3 mx-1"
      >
        <CharacterCard :character="character" />
        <svg
          v-if="character.status === 'Dead'"
          class="absolute inset-0 h-full w-full opacity-75"
          height="511.992pt"
          viewBox="0 0 511.992 511.992"
          width="511.992pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0"
            fill="#e76e54"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import CharacterCard from "../components/CharacterCard";

export default {
  data() {
    return {
      characters: [],
      page: 1,
      iframeId: "",
      iframeOpen: false,
      loading: false
    };
  },
  components: {
    CharacterCard
  },
  apollo: {
    characters: {
      query: gql`
        query characterPage($page: Int!) {
          characters(page: $page) {
            info {
              next
              count
              prev
            }
            results {
              id
              name
              status
              species
              type
              image
            }
          }
        }
      `,
      variables() {
        return { page: this.page };
      },
      deep: false,
      update: data => data.page,
      result({ data, loading }) {
        if (!loading) {
          this.characters = data.characters;
        }
      },
      loadingKey: "loadingQueriesCount",
      watchLoading(isLoading) {
        this.loading = isLoading;
      }
    }
  }
};
</script>