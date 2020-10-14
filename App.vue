<template>
  <div id="app">
    <Navpanel />
    <router-view></router-view>
  </div>
</template>

<script>
import Navpanel from "./components/NavPanel.vue";

export default {
  name: "App",
  components: {
    Navpanel: Navpanel,
  },
};
</script>

<style >
#app {
  width: 100vw;
  height: 900px;
  /* TODO wsnote-  font appears scripted on mobile device sm screen ?? */
  /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
  font-family: normal;
  text-align: center;
  color: limegreen;
  background-color: black;
}
</style>
