<template>
  <div class="dig">
    <div class="messageBox" v-if="bol" @click="close">
      <div class="boardout" @click.stop="">
        <div class="board">
          <div class="word">导入您关注的文本素材</div>
          <img src="../../assets/linehori.png" alt="" />
          <div class="func">
            <button>文件导入</button>
          </div>
        </div>
        <div class="chaxun">确定</div>
      </div>
    </div>
    <div class="left">
      <div class="up">
        <div class="chart1">
          <iframe
            src="new_hot(2).html"
            name="topFrame"
            scrolling="No"
            frameborder="0"
            class="topFrame"
          ></iframe>
        </div>
        <div class="chart2">
          <iframe
            src="hot_point(2).html"
            name="topFrame"
            scrolling="No"
            frameborder="0"
            class="topFrame"
          ></iframe>
        </div>
      </div>
      <div class="down">
        <div class="words">
          <div class="key">热点词</div>
          <img src="../../assets/line.png" alt="" />
          <div class="list">
            <div class="word" v-for="item in items">
              {{ item.title }}
            </div>
          </div>
        </div>
        <div
          class="sentence"
          onmouseout="this.start();"
          onmouseover="this.stop();"
          scrolldelay="400"
          direction="up"
          behavior="scroll"
        >
          <div class="blog" v-for="item in items2">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="righthot">
      <div class="up">
        <marquee
          class="blockhot"
          onmouseout="this.start();"
          onmouseover="this.stop();"
          scrolldelay="400"
          direction="up"
          behavior="scroll"
        >
          <div class="things" v-for="item in items3">
            <div class="time">{{ item.title }}</div>
            <div class="static">{{ item.content }}</div>
          </div>
        </marquee>
      </div>
      <div class="down">
        <button type="submit" @click="toggle">数据上传</button>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Hot",
  data() {
    return {
      bol: false,
      items: [
        {
          title: "海底捞",
        },
        {
          title: "星巴克",
        },
        {
          title: "赶人",
        },
        {
          title: "失望",
        },
        {
          title: "微信",
        },
        {
          title: "谷爱凌",
        },
        {
          title: "冬奥会",
        },
        {
          title: "雅培",
        },
        {
          title: "民生问题",
        },
        {
          title: "奶粉",
        },
      ],
      items2: [
        {
          title:
            "音九言六:之前全红婵等运动员被恶意抢注商标的事件、逍遥镇胡辣汤事件还历历在目，不是个例了，甚至可以说是猖狂了",
        },
        {
          title:
            "环球时报:国家知识产权局今天发布通告，依法打击恶意抢注“冰墩墩”、“谷爱凌”等商标注册。",
        },
        {
          title:
            "沧海缘月:（一）在主观上，实施商标抢注的当事人都具有恶意，即明知或应知他人在先创意、使用商标的情况而抢先向商标局申请注册。（二）申请人采取了不正当手段，在商标注册申请书和提供的相关材料中不真实地填报了有关事项。（三）注册成功，在客观上，被抢注的对象是他人在先使用并有一定影响的商标。",
        },
        {
          title: "心灵辅导:该查，但是不应该罚款，补缴即可",
        },
        {
          title: "金色de秋天:新规不应该只对新时段的适用吗？",
        },
        {
          title: "羽田共:做个小生意，还得交税",
        },
        {
          title: "落花有情199704:好害怕，因为买卖东西,去年流水有点高,担心呀",
        },
        {
          title: "日月星河sky:我们国家可以没有星巴克，但是不能没有人民警察",
        },
        {
          title: "知你故来风:这星巴克也太气人了呀！好大的官威啊！",
        },
        {
          title:
            "玖玖超爱喝酒:其他品牌一定要严格控制好，孩子喝的奶粉一定要做好，马虎不得",
        },
        {
          title: "诺才才:竟然有这么大的危害，看得我你都有点后怕了",
        },
        {
          title: "axenr:这种给别人打标签的行为真是迷惑",
        },
        {
          title:
            "晓格格殿下:了解顾客的需求啊，这不正常吗？很多高星酒店十几年前就开始这么做了",
        },
        {
          title:
            "张小凡有点烦:海底捞老板四川人在中国赚那么多人家扭头就转新加坡籍了，我们应该一起抵制",
        },
        {
          title: "那个元宵ismyle:标记顾客偏好挺正常的，但是有的词句不太喜欢",
        },
        {
          title:
            "不是你家薇薇:试问现在哪个地方不给顾客打标，只是没让顾客发现罢了",
        },
      ],
      items3: [
        {
          title: "2017",
          content:
            "海关总署日前发布公告，提醒消费者“暂不通过任何渠道购买”以及“立即暂停食用”美国雅培公司旗下相关婴幼儿产品。",
        },
        {
          title: "2018",
          content:
            "近日，雅培官网宣布召回3款婴儿配方奶粉，中国市场涉及到1款——喜康宝贝添婴儿营养补充剂产品。",
        },
        {
          title: "2018",
          content:
            "2月18日，美国FDA宣布，雅培一工厂发现致病细菌。不到48小时，中华人民共和国海关总署发布“雅培中国召回其销售的一款特医产品”，提醒消费者立刻暂停食用雅培“喜康宝贝添”母乳强化剂。",
        },
        {
          title: "2019",
          content:
            "奶粉出现问题已经不是一次两次了，奶粉作为低幼儿宝宝的重要营养来源，一旦出现问题，危害大就是本身就身体发育未完善的孩子",
        },
        {
          title: "2020",
          content:
            "这个标题太吓人，帮大家划一下重点：在中国大陆销售的产品中，除喜康宝贝添婴儿营养补充剂，其他产品是安全的！那么海淘奶粉有必要吗？",
        },
        {
          title: "2021",
          content:
            "作为一个母婴博主，不得不说一句大实话，自从三聚氰胺事件之后，中国国产奶粉的1段奶粉，执行标准是最高最严格的，家长们真的可以放心的选择国产奶粉，特别是1段奶粉，性价比高还安心。",
        },
        {
          title: "2022",
          content:
            "目前为止国内奶标准高于国际标，很多人就喜欢看营销文，不喜欢看有数据的国家标准",
        },
        {
          title: "2022",
          content: "我觉得还是坚持母乳或者用我们国产的奶粉放心一点",
        },
        {
          title: "2022",
          content: "10多位婴儿出现小肠坏死等问题，甚至1例病亡",
        },
        {
          title: "2022",
          content: "让你们买国产的，你们不信，非要买进口的、海淘的。",
        },
      ],
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
};
</script>

<style scoped>
.dig {
  width: 66.5rem;
  height: 36rem;
  /* border: 1px solid; */
  display: flex;
  flex-direction: row;
}
.left {
  flex: 50rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
}
.left .up {
  flex: 18rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
}
.left .up .chart1 {
  flex: 25rem;
  border: 1px solid;
  margin-right: 1rem;
  border: 0.1rem solid #778e9577;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.left .up .chart2 {
  flex: 25rem;
  border: 1px solid;
  border: 0.1rem solid #778e9577;
  background: linear-gradient(
    to bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.left .up iframe {
  width: 23.5rem;
  height: 17rem;
  padding: 0rem;
  margin: 0rem;
  /* border: 1px solid #000; */
}
.left .down {
  flex: 18rem;
  border: 0.1rem solid #778e9577;
  background-color: #778e9522;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.left .down .words {
  flex: 2rem;
  width: 47rem;
  border: 0.1rem solid #778e9577;
  margin: 1rem 0 1rem 0;
  background-color: #04202c50;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.left .down .words .key {
  flex: 4rem;
  text-align: center;
  color: #0bedae;
  font-size: 0.8rem;
  font-family: YouYuan;
}
.left .down .words img {
  height: 0.6rem;
}
.left .down .words .list {
  flex: 43rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: white;
  overflow: scroll;
  white-space: nowrap;
}
.left .down .words .list .word {
  border: 0.1rem solid #778e9577;
  padding: 0.2rem 0.4rem;
  margin: 0rem 0.2rem;
  border-radius: 0.2rem;
  white-space: nowrap;
  background-color: #778e9522;
}
.left .down .sentence {
  flex: 12rem;
  width: 47rem;
  /* border: 0.01rem solid #0bedae77; */
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  white-space: nowrap;
}

.left .down .sentence .blog {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-bottom: 0.5rem;
}
.left .down .sentence .blog img {
  width: 0.8rem;
  height: 0.6rem;
  margin-right: 0.5rem;
}
.left .down .sentence .blog .tent {
  font-size: 0.8rem;
  color: white;
  overflow: scroll;
  white-space: nowrap;
  opacity: 0.9;
  padding: 0.2rem 0 0 0;
  border-bottom: solid 0.01rem #0bedae77;
  line-height: 1.3rem;
}
.righthot {
  flex: 16.5rem;
  display: flex;
  flex-direction: column;
}
.righthot .up {
  flex: 30rem;
  border: 0.1rem solid #778e9577;
  background-color: #778e9522;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  overflow: scroll;
  white-space: nowrap;
  height: 29rem;
}
.righthot .up .blockhot {
  margin: 0.5rem;
  height: 28rem;
}
.righthot .up::after {
  content: "";
  position: absolute;
  width: 0.1rem;
  height: 29rem;
  margin: 0 12.5rem 0 0;
  background-color: #0bedae;
  z-index: -1;
}
.righthot .up .blockhot .things {
  display: flex;
  margin-bottom: 1rem;
}
.righthot .up .blockhot .things .time {
  padding: 0.1rem 0.4rem 0.2rem 0.4rem;
  background-color: #127368;
  height: 0.8rem;
  color: #0bedae;
  font-size: 0.8rem;
  font-family: YouYuan;
  z-index: 1;
  margin: 0 0.5rem 0 0;
  border-radius: 0.8rem;
}
.righthot .up .blockhot .things .static {
  color: #fff;
  font-size: 0.8rem;
  font-family: YouYuan;
  opacity: 0.8;
  padding: 0.1rem 0rem;
}
.righthot .down {
  flex: 6rem;
  /* border: 0.1rem solid #778e9577;
  background-color: #778e9522; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.righthot .down button {
  width: 16.3rem;
  height: 5.7rem;
  border: 0.1rem solid #778e9577;
  background-color: #778e9522;
  color: #0bedae;
  font-size: 1rem;
  font-weight: 100;
  font-family: YouYuan;
  transition: all 200ms ease-in-out;
}
.righthot .down button:hover {
  background-color: #0bedae;
  color: #fff;
  font-weight: 500;
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
.messageBox .func {
  width: 20rem;
  margin: 0.5rem 0.5rem 0rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
}
.messageBox .func button {
  width: 5rem;
  height: 2rem;
  border: 0;
  border-radius: 0.2rem;
  background-color: #fff;
  filter: drop-shadow(1 1 0.01rem #000);
  font-weight: 900;
  color: #687684;
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
  color: #687684;
}
</style>