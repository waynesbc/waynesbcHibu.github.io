<template>
  <div class="container">
    <div class="title-panel">
      <h1>About</h1>
    </div>
    <div class="content-1">
      <p> * Home brewing apps for all grain</p>
      <p>   Android devices ... completed & beta ver.</p>
      <p>   - web app under developement</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
h1 {
  color: greenyellow;
}
.container {
  font-family: normal;
  font-style: normal;
  color: maroon;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: fit-content;
}
.title-panel {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  color: gold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: fit-content;
}

.content-1 {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: fit-content;
  color: lightgreen;
}
</style>