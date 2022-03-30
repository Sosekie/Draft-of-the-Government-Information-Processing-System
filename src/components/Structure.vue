<template>
  <div class="container">
    <div class="innerContainer">
      <div class="headBar">
        <div class="search">
          <img src="../assets/search.png" alt="" />
          <input type="text" placeholder="请搜索您需要的政务信息" />
        </div>
      </div>
      <div class="leftBar">
        <div class="up">
          <div class="logo">
            <img src="../assets/admin.png" alt="" />
          </div>
          <div class="dig">
            <img src="../assets/dig.png" alt="" />
            <span class="words">隐诉挖掘</span>
          </div>
          <div class="hot">
            <img src="../assets/hot.png" alt="" />
            <span class="words">热点发现</span>
          </div>
          <div class="deal">
            <img src="../assets/deal.png" alt="" />
            <span class="words">处理页面</span>
          </div>
        </div>
        <div class="middle"></div>
        <div class="down">
          <div class="home">
            <img src="../assets/home.png" alt="" />
            <span class="words">主页</span>
          </div>
        </div>
      </div>
      <div class="content">nihao</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.innerContainer {
  width: 72rem;
  height: 40.5rem;
  background: linear-gradient(
    to bottom,
    rgba(11, 47, 63, 1),
    rgba(18, 115, 104, 1)
  );
  display: flex;
}
.content {
  margin: 3.5rem 1rem 1rem 4.5rem;
  /* background-color: #0bedae; */
  width: 66.5rem;
  height: 36rem;
}

.leftBar {
  background: linear-gradient(
    to right bottom,
    rgba(127, 149, 155, 1),
    rgba(127, 149, 155, 0.8)
  );
  position: absolute;
  width: 3.5rem;
  height: 40.5rem;
  overflow: hidden;
  box-shadow: 0.2rem 0.2rem 2rem 0.1rem #04202c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  -webkit-user-select: none;
  transition: all 200ms ease-in-out;
  font-size: 0.8rem;
  color: #0bedae;
}
.leftBar:hover {
  width: 4rem;
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
.leftBar .dig,
.hot,
.deal,
.home {
  background-color: #0b2f3f00;
  height: 2.2rem;
  width: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;
  /* border-radius: 0.1rem; */
}
.leftBar .dig:hover,
.hot:hover,
.deal:hover,
.home:hover {
  background-color: #0b2f3f;
  box-shadow: inset 0.02rem 0.02rem 0.1rem 0.01rem #04202c;
}
.leftBar .dig img {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.2rem;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.leftBar .hot img {
  display: inline-block;
  width: 1.3rem;
  height: 1.5rem;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.leftBar .deal img {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.leftBar .home img {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.leftBar .dig .words {
  display: none;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.leftBar .hot .words {
  display: none;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.leftBar .deal .words {
  display: none;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.leftBar .home .words {
  display: none;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.leftBar .dig:hover img {
  display: none;
}
.leftBar .dig:hover .words {
  display: inline-block;
}
.leftBar .hot:hover img {
  display: none;
}
.leftBar .hot:hover .words {
  display: inline-block;
}
.leftBar .deal:hover img {
  display: none;
}
.leftBar .deal:hover .words {
  display: inline-block;
}
.leftBar .home:hover img {
  display: none;
}
.leftBar .home:hover .words {
  display: inline-block;
}

.leftBar .middle {
  flex: 14.5rem;
  -webkit-app-region: drag;
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
  width: 72rem;
  height: 2.5rem;
  overflow: hidden;
  box-shadow: 0.2rem 0.2rem 2rem 0.1rem #04202c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  -webkit-app-region: drag;
}
.headBar .search {
  width: 12rem;
  height: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #127368;
  border-radius: 1rem;
  color: #0bedae;
  box-shadow: inset 0.02rem 0.02rem 0.1rem 0.01rem #04202c;
  -webkit-app-region: no-drag;
}
.headBar .search img {
  margin-top: 0.2rem;
  margin-right: 0.2rem;
  width: 1rem;
  height: 1rem;
  filter: drop-shadow(0 0 0.3rem #0bedae);
}
.headBar .search input {
  background-color: #0000;
  border: 0;
  outline: medium;
  color: #0bedae;
  opacity: 1;
  filter: drop-shadow(0 0 0.03rem #0bedae);
  font-weight: 100;
  text-align: center;
  -webkit-app-region: no-drag;
}
.headBar .search input::-webkit-input-placeholder {
  color: #0bedae;
  opacity: 0.5;
  font-weight: 100;
  text-align: center;
}
</style>