<template>
  <div>
    <h1 v-if="loading">Loading...</h1>
    <h1 v-else>{{character}}</h1>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      id: null,
      character: null,
      loading: false
    };
  },
  updated() {
    this.id = this.$route.params.id;
  },
  apollo: {
    character: {
      query: gql`
        query characterId($id: ID!) {
          character(id: $id) {
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
      `,
      variables() {
        return {
          id: this.id
        };
      },
      deep: false,
      update: data => data.id,
      result({ data, loading }) {
        if (!loading) {
          this.character = data.character;
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

<style>
</style>