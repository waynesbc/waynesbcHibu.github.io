<template>
  <div class="hopinfo-content">
    <div class="title-panel">
      <h2>Android App Info</h2>
    </div>
    <p>Home brewing app general info pages</p>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hopinfo-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: fit-content;
  margin: 1%;
}
.title-panel {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  color: gold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: fit-content;
}
h2 {
  color: greenyellow;
}
</style>
