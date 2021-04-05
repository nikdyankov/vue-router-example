<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/kiten">Kiten</router-link> |
    <router-link to="/nessebar">Nessebar</router-link> |
    <router-link to="/sozopol">Sozopol</router-link> |
    <router-link to="/sunny-beach">Sunny Beach</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
}
</style>
