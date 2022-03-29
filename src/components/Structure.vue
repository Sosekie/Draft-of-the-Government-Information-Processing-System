<template>
  <div class="container">
    <div class="innerContainer">
      <div class="headBar"></div>
      <div class="leftBar">
        <div class="up">
          <div class="logo">
            <img src="../assets/admin.png" alt="" />
          </div>
          <div class="dig">
            <img src="../assets/dig.png" alt="" />
          </div>
          <div class="hot">
            <img src="../assets/hot.png" alt="" />
          </div>
          <div class="deal">
            <img src="../assets/deal.png" alt="" />
          </div>
        </div>
        <div class="middle"></div>
        <div class="down">
          <div class="home">
            <img src="../assets/home.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.innerContainer {
  width: 71.5rem;
  height: 37.5rem;
  background: linear-gradient(
    to bottom,
    rgba(11, 47, 63, 1),
    rgba(18, 115, 104, 1)
  );
}
.leftBar {
  background: linear-gradient(
    to right bottom,
    rgba(127, 149, 155, 1),
    rgba(127, 149, 155, 0.8)
  );
  position: absolute;
  width: 3.5rem;
  height: 37.5rem;
  overflow: hidden;
  box-shadow: 0.2rem 0.2rem 2rem 0.1rem #04202c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.leftBar .up {
  flex: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.leftBar .up .logo img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.5rem;
}
.leftBar img {
  width: 1.5rem;
  height: 1.5rem;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.leftBar .middle {
  flex: 14.5rem;
}
.leftBar .down {
  flex: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.headBar {
  background: linear-gradient(
    to right bottom,
    rgba(127, 149, 155, 1),
    rgba(127, 149, 155, 0.8)
  );
  position: absolute;
  width: 71.5rem;
  height: 2.5rem;
  overflow: hidden;
  box-shadow: 0.2rem 0.2rem 2rem 0.1rem #04202c;
}
</style>