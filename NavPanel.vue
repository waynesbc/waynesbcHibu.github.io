<template>
  <div class="nav-panel">
    <div class="title-panel">
      <img class="img-mug" src="../assets/beermugicon.jpg" alt="mug logo" />
      <h5 style="color: lime">HopList & HopIBUs - Wed Oct 14th 11:04am ***</h5> 
    </div>
    <div class="nav-buttons">
      <router-link to="./" class="rt-link">Home</router-link>
      <router-link to="About" class="rt-link">About</router-link>
      <router-link to="AppList" class="rt-link">AppList</router-link>
      <router-link to="Policy" class="rt-link">Policy</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-panel {
  display: flex;
  justify-content: right;
  align-items: center;
  flex-direction: row;
  width: 99vw;
  height: fit-content;
  padding: 2px;
  background-color: rgb(29, 1, 28);
}
.nav-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  height: fit-content;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 2%;
  padding: 2px;
  /* background-color: yellow; */
}
.rt-link {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  margin: 3px;
  color: lawngreen;
}
.title-panel {
  display: flex;
  flex-direction: row;
  width: 98vw;
  height: fit-content;
  justify-content: left;
  align-content: center;
}
.img-frame {
  width: 99vw;
  height: fit-content;
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-mug {
  width: 20vw;
  height: 25vw;
  margin: 1%;
}
.h5{
width: 30vw;
}
</style>