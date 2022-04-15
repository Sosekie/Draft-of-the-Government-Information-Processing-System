<template>
  <div class="dig" id="message">
    <div class="mod">
      <!-- <router-link to="/Deal/"> -->
      <button class="mod1">诉求处理详情</button>
      <!-- </router-link> -->
      <img src="../../assets/line.png" alt="" />
      <!-- <router-link to="/Deal/deal2"> -->
      <button class="mod2" @click="toggle">自定义上传查询</button>
      <!-- </router-link> -->
    </div>
    <div class="contentDeal">
      <div class="messageBox" v-if="bol" @click="close">
        <div class="boardout" @click.stop="">
          <div class="board">
            <div class="word">单条查询</div>
            <input type="text" class="miaoshu" placeholder="诉求描述" />
            <img src="../../assets/linehori.png" alt="" />
            <div class="word">批量查询</div>
            <div class="func">
              <button>诉求导入</button>
              <div class="discrip">?导入格式说明</div>
            </div>
          </div>
          <div class="chaxun">查询</div>
        </div>
      </div>
      <div class="contentDeal1">
        <div class="dealleft">
          <div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">
                楼梯口垃圾确实确实确实确实确实确实确实确实确实确实确实确实确实确实确实确实堆积成山
              </div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionleft">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
          </div>
        </div>
        <div class="middle">
          <div class="up">
            <p>
              人走向成熟的第一步，就是要认识并接受自己的平庸与普通。
              我们从小到大总能从各种渠道听说一些人才被埋没的故事并感到惋惜，但大家有没有发现，这些事情无论中外，基本都发生在古代？
              准确地说，是工业革命之前。
              这是因为在信息和交通并不发达的年代里，个人的任何闪光点都难以被知晓，再出名也就是在自己的村子或者…
            </p>
            <p>
              人走向成熟的第一步，就是要认识并接受自己的平庸与普通。
              我们从小到大总能从各种渠道听说一些人才被埋没的故事并感到惋惜，但大家有没有发现，这些事情无论中外，基本都发生在古代？
              准确地说，是工业革命之前。
              这是因为在信息和交通并不发达的年代里，个人的任何闪光点都难以被知晓，再出名也就是在自己的村子或者…
            </p>
            <p>
              人走向成熟的第一步，就是要认识并接受自己的平庸与普通。
              我们从小到大总能从各种渠道听说一些人才被埋没的故事并感到惋惜，但大家有没有发现，这些事情无论中外，基本都发生在古代？
              准确地说，是工业革命之前。
              这是因为在信息和交通并不发达的年代里，个人的任何闪光点都难以被知晓，再出名也就是在自己的村子或者…
            </p>
          </div>
          <div class="down">
            <div class="left">
              <iframe
                src="chart.html"
                name="topFrame"
                scrolling="No"
                frameborder="0"
                class="topFrame"
              ></iframe>
            </div>
            <div class="right">
              <div class="title">处理建议</div>
              <div class="words">部门一</div>
              <div class="words">部门二</div>
              <div class="words">部门三</div>
            </div>
          </div>
        </div>
        <div class="dealright">
          <div class="titleright">相似工单</div>
          <div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
            <div class="questionright">
              <div class="title">民生问题</div>
              <div class="bar">|</div>
              <div class="words">楼梯口垃圾堆积</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
// import Vue from "vue";

export default {
  name: "Deal",
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
  components: {},
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
  /* border: 1px solid; */
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
.mod el-button {
  width: 10rem;
  height: 1.5rem;
  border: 0.1rem solid #778e9577;
  background-color: #778e9522;
  color: #0bedae;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 100;
  font-family: YouYuan;
  transition: all 200ms ease-in-out;
}
.mod el-button:hover {
  background-color: #0bedae;
  color: #fff;
  font-weight: 500;
}

.contentDeal {
  flex: 34.5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  width: 20rem;
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
  width: 20rem;
  font-weight: 900;
  color: #687684;
}
.messageBox .board img {
  width: 20rem;
  height: 0.05rem;
  margin-bottom: 0.5rem;
}
.messageBox .board input {
  width: 18rem;
  margin: 0.5rem;
  padding: 0.2rem;
  border: 0;
  border-radius: 0.2rem;
  background-color: #e3dada;
  outline: medium;
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
  font-family: YouYuan;
  -webkit-app-region: no-drag;
}
.messageBox .func {
  width: 20rem;
  margin: 0.5rem 0.5rem 0rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: left;
}
.messageBox .func button {
  width: 5rem;
  height: 2rem;
  border: 0;
  border-radius: 0.2rem;
  background-color: #fff;
  filter: drop-shadow(1 1 0.01rem #000);
}
.messageBox .func .discrip {
  font-size: 0.6rem;
  font-weight: 900;
  color: #687684;
  filter: drop-shadow(1 1 0.01rem #000);
}
.messageBox .chaxun {
  padding: 0.5rem 1rem;
  margin: 0;
  width: 21rem;
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

.contentDeal1 {
  flex: 34.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #687684;
  z-index: 1;
}
.dealleft {
  flex: 15rem;
  height: 33.5rem;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 0.3),
    rgba(250, 251, 252, 0.2)
  );
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}
.questionleft {
  margin-top: 0.5rem;
  width: 13rem;
  height: 3rem;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
  );
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 200ms ease-in-out;
}
.questionleft:hover {
  height: 3.5rem;
}
.questionleft .title {
  width: 5rem;
  font-size: 1rem;
  overflow: scroll;
}
.questionleft .bar {
  font-size: 1.5rem;
}
.questionleft .words {
  width: 10rem;
  height: 2.5rem;
  font-size: 0.8rem;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  transition: all 200ms ease-in-out;
}
.questionleft:hover .words {
  height: 3rem;
}
.middle {
  flex: 40rem;
  height: 33.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.middle .up {
  height: 8.5rem;
  width: 36rem;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
  );
  border-radius: 0.2rem;
  padding: 1rem;
  text-align: left;
  margin-bottom: 1rem;
  overflow: scroll;
  line-height: 1.2rem;
  color: #687684;
}
.middle .down {
  width: 38rem;
  height: 22rem;
  display: flex;
}
.middle .down .left {
  flex: 27rem;
  height: 22rem;
  /* width: 29rem; */
  margin-right: 1rem;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 0.3),
    rgba(250, 251, 252, 0.2)
  );
  border-radius: 0.2rem;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.middle .down .left iframe {
  width: 26rem;
  height: 21rem;
  padding: 0rem;
  margin: 0rem;
}
.middle .down .right {
  flex: 10rem;
  height: 22rem;
  /* width: 8rem; */
  /* border: 1px solid #000; */
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 0.3),
    rgba(250, 251, 252, 0.2)
  );
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}
.middle .down .right .title {
  margin: 1rem;
  color: #000;
}
.middle .down .right .words {
  margin-bottom: 0.5rem;
  width: 8rem;
  height: 3rem;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
  );
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;
}
.dealright {
  flex: 11.5rem;
  height: 33.5rem;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 0.3),
    rgba(250, 251, 252, 0.2)
  );
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}
.dealright .titleright {
  margin: 1rem;
  color: #000;
}
.questionright {
  margin-bottom: 0.5rem;
  width: 9.5rem;
  height: 3rem;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
  );
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 200ms ease-in-out;
}
.questionright:hover {
  height: 3.5rem;
}
.questionright .title {
  width: 4rem;
  font-size: 1rem;
  overflow: scroll;
}
.questionright .bar {
  font-size: 1.5rem;
}
.questionright .words {
  width: 11rem;
  height: 2.5rem;
  font-size: 0.8rem;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  transition: all 200ms ease-in-out;
}
.questionright:hover .words {
  height: 3rem;
}
</style>