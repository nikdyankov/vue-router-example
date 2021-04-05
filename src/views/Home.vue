<template>
  <div>
    <h1>Homepage</h1>
    <br />
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="destination.slug">
          {{ destination.name }}
        </router-link>
        <figure>
          <router-link :to="destination.name">
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
img {
  max-width: 200px;
}

.destinations {
  display: flex;
  justify-content: space-between;
}
</style>
