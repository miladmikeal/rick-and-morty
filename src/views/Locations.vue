<template>
  <div class="locations">
    <h1>Locations</h1>
    <h1 v-if="loading">Loading...</h1>
    <h1 v-else>{{locations}}</h1>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      locations: [],
      page: 1,
      loading: false
    };
  },
  apollo: {
    locations: {
      query: gql`
        query locationPage($page: Int!) {
          locations(page: $page) {
            info {
              next
              count
              prev
              pages
            }
            results {
              id
              name
              type
              dimension
              residents {
                name
                status
              }
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
          this.locations = data.locations;
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