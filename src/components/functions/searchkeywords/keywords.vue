<template>
  <div class="body">
    <section>
      <div class="Back">
        <span>小麦</span>
        <span>虫害</span>
        <span>农业</span>
        <span>袁隆平</span>
        <span>白菜价格</span>
        <span>猪肉</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
}
section {
  position: absolute;
  width: 33rem;
  height: 9rem;
  overflow: hidden;
}
.Back {
  width: 100%;
  height: 100%;
}
.Back span {
  position: absolute;
  width: auto;
  height: auto;
  font-size: 1.5rem;
  background: linear-gradient(
    to right bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 1)
  );
  border-radius: 0.5rem;
  color: #687684;
  padding: 0.5rem;
  filter: drop-shadow(0 0 0.5rem #687684);
  /* border-radius: 1rem; */
}
.Back span:nth-child(3n + 1) {
  background: linear-gradient(
    to right bottom,
    rgba(250, 251, 252, 0.8),
    rgba(250, 251, 252, 0.8)
  );
  filter: drop-shadow(0 0 0.5rem #687684);
}
.Back span:nth-child(1) {
  top: 80%;
  left: 10%;
  animation: animate 15s linear infinite;
}
.Back span:nth-child(2) {
  top: 80%;
  left: 40%;
  animation: animate 18s linear infinite;
}
.Back span:nth-child(3) {
  top: 90%;
  left: 65%;
  animation: animate 22s linear infinite;
}
.Back span:nth-child(4) {
  top: 60%;
  left: 70%;
  animation: animate 20s linear infinite;
}
.Back span:nth-child(5) {
  top: 80%;
  left: 50%;
  animation: animate 24s linear infinite;
}
.Back span:nth-child(6) {
  top: 70%;
  left: 20%;
  animation: animate 17s linear infinite;
}

@keyframes animate {
  0% {
    transform: scale(0.5) translateY(3rem) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(1.2) translateY(-9rem) rotate(0deg);
    opacity: 0;
  }
}
</style>