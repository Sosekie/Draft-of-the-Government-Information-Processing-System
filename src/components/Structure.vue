<template>
  <div class="container">
    <div class="innerContainer">
      <Background></Background>
      <div class="headBar">
        <div class="collect">
          <button @click="toggle">
            <img src="../assets/collect.png" alt="" />
          </button>
        </div>
        <div class="search">
          <router-link to="/Search">
            <img src="../assets/search.png" alt="" />
          </router-link>
          <input type="text" placeholder="请搜索您需要的政务信息" />
        </div>
      </div>
      <div class="leftBar">
        <div class="up">
          <div class="logo">
            <img src="../assets/admin.png" alt="" />
          </div>
          <router-link to="/">
            <div class="dig">
              <img src="../assets/dig.png" alt="" />
              <span class="words">隐诉挖掘</span>
            </div>
          </router-link>
          <router-link to="/Hot">
            <div class="hot">
              <img src="../assets/hot.png" alt="" />
              <span class="words">热点发现</span>
            </div>
          </router-link>
          <router-link to="/Deal">
            <div class="deal">
              <img src="../assets/deal.png" alt="" />
              <span class="words">处理页面</span>
            </div>
          </router-link>
        </div>
        <div class="middle"></div>
        <div class="down">
          <router-link to="/Home"
            ><div class="home">
              <img src="../assets/home.png" alt="" />
              <span class="words">主页</span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="content">
        <div class="messageBox" v-if="bol" @click="close">
          <div class="boardout" @click.stop="">
            <div class="board">
              <div class="word">数据收集</div>
              <img src="../assets/linehori.png" alt="" />
              <div class="workname">收集主题</div>
              <input type="text" class="miaoshu" placeholder="请输入收集主题" />
              <div class="workname">舆情收集日期</div>
              <div class="func">
                <DatePicker></DatePicker>
                <LocationSelect></LocationSelect>
              </div>
            </div>
            <div class="chaxun">收集</div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);

import Background from "./Background";
import DatePicker from "./functions/datepicker/DatePicker.vue";
import LocationSelect from "./functions/datepicker/LocationSelect.vue";

export default {
  data() {
    return {
      bol: false,
    };
  },
  methods: {
    toggle() {
      this.bol = !this.bol;
    },
    close() {
      this.bol = !this.bol;
    },
  },
  components: {
    Background,
    DatePicker,
    LocationSelect,
  },
};
</script>

<style>
.router-link-active {
  text-decoration: none;
  color: #0bedae;
}
a {
  text-decoration: none;
  color: #0bedae;
}
.innerContainer {
  width: 72rem;
  height: 40.5rem;
  background: linear-gradient(
    to bottom,
    rgba(11, 47, 63, 1),
    rgba(18, 115, 104, 1)
  );
  display: flex;
  font-family: YouYuan;
}
Background {
  z-index: 1;
}
.content {
  margin: 3.5rem 1rem 1rem 4.5rem;
  /* background-color: #0bedae; */
  width: 66.5rem;
  height: 36rem;
  z-index: 2;
}

.leftBar {
  background: linear-gradient(
    to right bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
  );
  position: absolute;
  width: 3.5rem;
  height: 40.5rem;
  overflow: hidden;
  box-shadow: 0.1rem 0.1rem 2rem 1 #dce0e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* -webkit-user-select: none; */
  transition: all 200ms ease-in-out;
  font-size: 0.8rem;
  color: #0bedae;
  z-index: 5;
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
  filter: drop-shadow(0 0 0.01rem #0bedae);
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
  filter: drop-shadow(0 0 0.01rem #0bedae);
}
.leftBar .hot img {
  display: inline-block;
  width: 1.3rem;
  height: 1.5rem;
  filter: drop-shadow(0 0 0.01rem #0bedae);
}
.leftBar .deal img {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  filter: drop-shadow(0 0 0.01rem #0bedae);
}
.leftBar .home img {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  filter: drop-shadow(0 0 0.01rem #0bedae);
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
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
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
  z-index: 5;
}
.headBar .collect {
  margin-right: 1rem;
  padding: 0.2rem;
  border: 0.1rem solid #0bedae;
  border-radius: 1rem;
}
.headBar .collect button {
  width: 1rem;
  height: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: #68768400;
}
.headBar .collect img {
  width: 1rem;
  height: 1rem;
}

.messageBox {
  width: 100%;
  height: 100%;
  margin: 2.5rem 0rem 0rem 3.5rem;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #0006;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* transition: all 200ms ease-in-out; */
}
.messageBox .boardout {
  width: 30rem;
  margin: 0rem 7rem 5rem 0rem;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.messageBox .boardout .board {
  padding: 1rem;
  margin: 0;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
  );
  border-radius: 0.2rem 0.2rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.messageBox .board .word {
  width: 30rem;
  font-weight: 900;
  color: #687684;
}
.messageBox .board img {
  width: 30rem;
  height: 0.05rem;
  margin-top: 0.5rem;
}
.messageBox .board .workname {
  width: 29rem;
  margin-top: 0.5rem;
  outline: medium;
  font-size: 0.8rem;
  font-weight: 900;
  text-align: left;
  font-family: YouYuan;
  color: #687684;
}
.messageBox .board input {
  width: 29rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 0.2rem;
  background-color: #fff;
  outline: medium;
  font-size: 0.8rem;
  font-weight: 100;
  text-align: left;
  font-family: YouYuan;
  -webkit-app-region: no-drag;
}
.messageBox .func {
  width: 30rem;
  margin: 1rem 0.5rem 0rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: left;
}
.messageBox .func DatePicker {
  scale: 0.5;
}
.messageBox .chaxun {
  padding: 0.5rem 1rem;
  margin: 0;
  width: 31rem;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 1)
  );
  border-radius: 0 0 0.2rem 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}

.headBar .search {
  width: 18rem;
  height: 1.5rem;
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
  width: 15.5rem;
  background-color: #0000;
  border: 0;
  outline: medium;
  color: #0bedae;
  opacity: 1;
  font-size: 1rem;
  filter: drop-shadow(0 0 0.03rem #0bedae);
  font-weight: 100;
  text-align: center;
  font-family: YouYuan;
  -webkit-app-region: no-drag;
}
.headBar .search input::-webkit-input-placeholder {
  color: #0bedae;
  opacity: 0.5;
  font-weight: 100;
  text-align: center;
}
</style>