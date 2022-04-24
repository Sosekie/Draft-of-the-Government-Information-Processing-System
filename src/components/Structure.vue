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
            <button class="dig">
              <img src="../assets/dig.png" alt="" />
              <span class="words">隐诉挖掘</span>
            </button>
          </router-link>
          <router-link to="/Hot">
            <button class="hot">
              <img src="../assets/hot.png" alt="" />
              <span class="words">热点发现</span>
            </button>
          </router-link>
          <router-link to="/Deal">
            <button class="deal">
              <img src="../assets/deal.png" alt="" />
              <span class="words">处理页面</span>
            </button>
          </router-link>
        </div>
        <div class="middle"></div>
        <div class="down">
          <router-link to="/Home"
            ><button class="home">
              <img src="../assets/home.png" alt="" />
              <span class="words">主页</span>
            </button>
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
  color: #838383;
}
a {
  text-decoration: none;
  color: #838383;
}
.innerContainer {
  width: 72rem;
  height: 40.5rem;
  background-color: #fff;
  display: flex;
  font-family: YouYuan;
}
Background {
  z-index: 1;
}
.content {
  margin: 3.5rem 0rem 1rem 4.5rem;
  /* background-color: #0bedae; */
  width: 67.5rem;
  height: 36rem;
  z-index: 2;
}

.leftBar {
  background-color: #fff;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);

  position: absolute;
  width: 3.5rem;
  height: 40.5rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* -webkit-user-select: none; */
  transition: all 200ms ease-in-out;
  font-size: 0.8rem;
  color: #838383;
  z-index: 5;
}
.leftBar:hover {
  width: 5rem;
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
  filter: drop-shadow(0 0 0.01rem #838383);
}
.leftBar .dig,
.hot,
.deal,
.home {
  background-color: #83838300;
  border: 0;
  height: 2.2rem;
  width: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;
  /* border-radius: 0.1rem; */
  font-size: 0.8rem;
  font-weight: 100;
  text-align: center;
  font-family: YouYuan;
}
.leftBar .dig:hover,
.hot:hover,
.deal:hover,
.home:hover {
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
  width: 5rem;
  color: #838383;
}
.leftBar .dig:focus,
.hot:focus,
.deal:focus,
.home:focus {
  width: 5rem;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
  color: #838383;
}
.leftBar .dig img {
  display: inline-block;
  width: 1.6rem;
  height: 1.5rem;
}
.leftBar .hot img {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
}
.leftBar .deal img {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
}
.leftBar .home img {
  display: inline-block;
  width: 1.6rem;
  height: 1.5rem;
}
.leftBar .dig .words {
  display: none;
}
.leftBar .hot .words {
  display: none;
}
.leftBar .deal .words {
  display: none;
}
.leftBar .home .words {
  display: none;
}
.leftBar .dig:hover,
.dig:focus img {
  display: none;
}
.leftBar .dig:hover,
.dig:focus .words {
  display: inline-block;
}
.leftBar .hot:hover,
.hot:focus img {
  display: none;
}
.leftBar .hot:hover,
.hot:focus .words {
  display: inline-block;
}
.leftBar .deal:hover,
.deal:focus img {
  display: none;
}
.leftBar .deal:hover,
.deal:focus .words {
  display: inline-block;
}
.leftBar .home:hover,
.home:focus img {
  display: none;
}
.leftBar .home:hover,
.home:focus .words {
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
  background-color: #fff;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
  position: absolute;
  width: 72rem;
  height: 2.5rem;
  overflow: hidden;
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
  border: 0.1rem solid #838383;
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
  background-color: #83838300;
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
  background-color: #fffa;
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
  background-color: #fff;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
  border-radius: 0.2rem 0.2rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.messageBox .board .word {
  width: 30rem;
  font-weight: 900;
  color: #838383;
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
  color: #838383;
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
  background-color: #fff;
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
  background-color: #fff;
  border-radius: 1rem;
  color: #fff;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
  -webkit-app-region: no-drag;
}
.headBar .search img {
  margin-top: 0.2rem;
  margin-right: 0.2rem;
  width: 1rem;
  height: 1rem;
  filter: drop-shadow(0 0 0.3rem #838383);
}
.headBar .search input {
  width: 15.5rem;
  background-color: #0000;
  border: 0;
  outline: medium;
  color: #838383;
  opacity: 1;
  font-size: 1rem;
  filter: drop-shadow(0 0 0.03rem #fff);
  font-weight: 100;
  text-align: center;
  font-family: YouYuan;
  -webkit-app-region: no-drag;
}
.headBar .search input::-webkit-input-placeholder {
  color: #838383;
  opacity: 0.8;
  font-weight: 100;
  text-align: center;
}
</style>