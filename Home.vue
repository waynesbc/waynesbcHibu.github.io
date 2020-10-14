<template>
  <div class="container">
    <!-- <div class="title-panel">
      <img class="img-mug" src="../assets/beermugicon.jpg" alt="mug logo" />
      <h5 style="color: darkorange">HopList Vue - Wed Aug 19th 12:39pm</h5>
    </div> -->
    <div class="content-1">
      <div class="img-frame">
        <img
          class="img-bapporig"
          src="../assets/bapprecipeorig.png"
          alt="orig rec app"
        />
        <!-- <img class="img-hlicon" src="../assets/hoplisticon.jpg" alt="hoplist icon" /> -->
        <img
          class="img-featgraph"
          src="../assets/featuregraph.jpg"
          alt="feature graphic"
        />
        <img
          class="img-featgraph"
          src="../assets/brec2promo.jpg"
          alt="rec app 2"
        />
        <!-- <img class="img-hlpromo" src="../assets/hoplpromo.jpg" alt="hop list promo" /> -->
      </div>
      <HoplistInfo />
    </div>
  </div>
</template>

<script>
import HoplistInfo from "../components/HoplistInfo.vue";

export default {
  name: "App",
  components: {
    HoplistInfo,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-content: center;
}
.title-panel {
  display: flex;
  flex-direction: row;
  width: 98vw;
  height: fit-content;
  justify-content: center;
  align-content: center;
}
.content-1 {
  display: flex;
  flex-direction: column;
  width: 99vw;
  /* height:fit-content; */
  justify-content: flex-start;
}
.img-mug {
  width: 3%;
  height: auto;
  margin: 1%;
}
.img-hlicon {
  width: 10vw;
  height: 15vh;
  margin: 3%;
}
.img-hlpromo {
  width: 200px;
  height: 400px;
  margin: 3%;
}
.img-featgraph {
  width: 15%;
  height: auto;
  margin: 1%;
}
.img-bapporig {
  width: 15%;
  height: auto;
  margin: 1%;
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
h5 {
  color: rgb(228, 150, 5);
}
</style>