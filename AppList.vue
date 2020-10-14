<template>
  <div class="container">
    <div class="title">
      <h1>App List</h1>
      <p>Google store listings for Homebrew Beer applications</p>
    </div>
    <div class="content-links">
      <div class="link-strip">
        <img class="img-bapporig" src="../assets/bapprecipeorig.png" alt="orig rec app" />
        <button class="button" v-on:click="goto_bappsite">Homebrew Beer app Details ..click</button>
      </div>
      <span>---</span>
      <div class="link-strip">
        <img class="img-featgraph" src="../assets/featuregraph.jpg" alt="feature graphic" />
        <button class="button" v-on:click="goto_hoplappsite">Hoplist IBU calculator app Details ..</button>
      </div>
      <span>---</span>
      <div class="link-strip">
        <img class="img-featgraph" src="../assets/brec2promo.jpg" alt="rec app 2" />
        <button
          class="button"
          v-on:click="goto_brecappsite"
        >Beer recipe record Android-beta App Details..</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto_bappsite: function () {
      // `this` inside methods point to the Vue instance
      // alert('off to Beer applications at the Google store ' + '!');
      // `event` is the native DOM event
      // alert(event.target.tagName);
      // *
      // open Url for app store listing
      window.open(
        "https://play.google.com/store/apps/details?id=wsandroidapp.wsbeerhomebrewm2&hl=en",
        "_blank"
      );
    },
    goto_hoplappsite: function () {
      window.open(
        "https://play.google.com/store/apps/details?id=com.wsoft.hoplist&hl=en",
        "_blank"
      );
    },
    goto_brecappsite: function () {
      window.open(
        "https://play.google.com/store/apps/details?id=com.wsoft.beerrecipe1&hl=en"
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
}
.title {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  color: limegreen;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1%;
  width: 100vw;
  height: fit-content;
  /* background-color: aqua; */
}
.content-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 5px;
  color: green;
  /* background-color: lightgreen; */
}
.link-strip {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 75%;
  height: auto;
  padding: 5px;
  color: green;
  /* background-color: red; */
}
a {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  color: orange;
}
.img-featgraph {
  width: 30%;
  height: 70%;
  margin: 1%;
  margin-left: 15%;
}
.img-bapporig {
  width: 20%;
  height: auto;
  margin: 1%;
  margin-left: 15%;
}
.button {
  background-color: green; /* Green */
  border: none;
  color: lime;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: normal;
  font-size: 16px;
  width: 300px;
  border-radius: 17px;
  height: fit-content;
  margin: 9px 40px;
  cursor: pointer;
  box-shadow: 0 5px 9px 0 rgba(210, 2, 246, 0.2),
    0 6px 20px 0 rgba(217, 6, 224, 0.19);

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
.button-shad {
  box-shadow: 0 5px 9px 0 rgba(210, 2, 246, 0.2),
    0 6px 20px 0 rgba(217, 6, 224, 0.19);
}
.button:hover {
  background-color: #71aa07;
}

.button:active {
  background-color: #5da808;
  box-shadow: 0 5px rgb(160, 2, 120);
  transform: translateY(4px);
}
</style>