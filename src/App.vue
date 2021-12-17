<template>
  <div id="app">
    <NavBar />
    <HeadBar />
    <Content />
    <router-view />
  </div>
</template>

<script type="text/javascript">
import NavBar from "@/components/NavBar.vue";
import HeadBar from "@/components/HeadBar.vue";
import Content from "@/components/Content.vue";

export default {
  components: {
    NavBar,
    HeadBar,
    Content
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(191, 203, 217);
  /* margin-top: 60px; */
}
</style>
