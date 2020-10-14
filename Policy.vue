<template>
  <div class="container">
    <div class="title-panel">
      <h1>Policy</h1>
    </div>
    <div class="content-1">
      <p>* Policy for app use</p>
      <div class="policy-pages">
        <img class="img-polpage" src="../assets/hlistprivpolone.jpg" alt="policy pg 1" />
        <img class="img-polpage" src="../assets/hlistprivpoltwo.jpg" alt="policy pg 2" />
        <img class="img-polpage" src="../assets/hlistprivpolthree.jpg" alt="policy pg 1" />
        <img class="img-polpage" src="../assets/hlistprivpolfour.jpg" alt="policy pg 1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: greenyellow;
}
.container {
  font-family: normal;
  font-style: italic;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: fit-content;
  background-color: black;
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
  font-family: normal;
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
.policy-pages {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: auto;
  /* background-color: yellow; */
}
.img-polpage {
  width: 90%;
  height: auto;
  margin: 1%;
}
</style>