<template>
  <div class="dig">
    <div class="mod">
      <button class="mod1">诉求处理详情</button>
      <img src="../../assets/line.png" alt="" />
      <button class="mod2">自定义上传查询</button>
    </div>
    <div class="content">
      <div class="left"></div>
      <div class="middle">
        <div class="up"></div>
        <div class="down">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Deal",
};
</script>

<style scoped>
.dig {
  width: 66.5rem;
  height: 36rem;
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
}
.mod {
  flex: 1.5rem;
  border: 1px solid;
  height: 1.5rem;
  width: 66.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.mod img {
  height: 0.8rem;
  margin: 0 0.5rem;
}
.mod button {
  width: 10rem;
  height: 1.5rem;
  border: 0.1rem solid #778e9577;
  background-color: #778e9522;
  color: #0bedae;
  font-size: 1rem;
  font-weight: 100;
  font-family: YouYuan;
  transition: all 200ms ease-in-out;
}
.mod button:hover {
  background-color: #0bedae;
  color: #fff;
  font-weight: 500;
}

.deal .content {
  flex: 34.5rem;
  border: 1px solid #000;
}
</style>