<template>
  <div class="dig">
    <div class="up"></div>
    <div class="down">
      <div class="messageblock" v-for="item in items">
        <div class="message">
          <div class="contents">{{ item.content }}</div>
          <img src="../../assets/line.png" alt="" />
          <div class="type">{{ item.type }}</div>
          <img src="../../assets/line.png" alt="" />
          <div class="date">{{ item.date }}</div>
          <img src="../../assets/line.png" alt="" />
          <div class="point">热度：{{ item.point }}</div>
          <button>+</button>
        </div>
        <div class="open">
          <div class="opendown">down</div>
          <div class="words">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import * as echarts from "echarts";

export default {
  name: "Dig",
  data() {
    return {
      items: [
        {
          content:
            "这几个项目都是市北区的老大难问题，问政青岛里边也曝光过，只是到现在也没有搞定。主要是钉子户比较多，比如说瑞昌路三角片区拆了2000多户，还剩20户钉子户，就是攻不动了。一个钉子户至少能让100户回迁做不了，孰轻孰重？不强力一点拆掉能行吗？ ​",
          type: "城市建设",
          date: "20220304",
          point: "80",
        },
        {
          content:
            "本人第一次于2021年11月份以及第二次2022年3月10日左右，在青岛福彩中心微信公众账号里申请在李家女姑小区南门门头设立福彩站点，因第一次距离不够，政策发生变化后进行了第二次申请，但是第二次一直没等到场地勘测距离人员的消息，4月12日我拨打青岛福彩中心业务部电话81978085咨询福彩工作人员，工作人员回复说：已经去实地勘测过，与福彩站点（双元路店）站号37022257相距250米（因青岛地区规定乡镇站点保护距离是400米）所以不符合规定，我提出质疑说现场本人也进行过勘测肯定不能是250米，工作人员说：下去勘测的工作人员是不会乱写记录的，工作人员再去落实一下情况。过了15分钟，我再一次致电青岛福彩中心业务部，工作人员的回复变成了同事写错了行，不是距离问题。是因为在我申请的场地的周边已经有人于2月份已经申请了，然后我又跟她说本人于2021年11月份在此场地周边进行过第一次申请，因距离不够不允许立站（因为当时青岛福彩的距离保护政策是1000米），第二次申请的时候本人于3月份特别打过青岛福彩电话说明此情况第一次已经勘察了这一次距离一定可以，因为第一次已经勘察过距离了，你们都有记录，工作人员回复让我重新申请，并未告知周边已有人申请，现在又回复我说2月份已经有人申请，也并未告知我2月份申请的是否通过，如果通过，那为何至今没有开门营业？周边也并未见福彩的门头呢？为何勘测人员明知周边已经有人申请的情况下还会去勘测距离呢？难道福彩可以只是单纯申请位置不营业吗？之前听说站点37022257和福彩工作人员关系很好，结合福彩公职工作人员不合逻辑的推脱，其中的缘由是否耐人寻味呢？要求山东福彩介入调查！！@山东福彩@山东发布 @问政山东",
          type: "经济管理",
          date: "20220413",
          point: "14",
        },
        {
          content:
            " @青岛交通运输 明确说了使用便捷青岛app实名绿色二维码乘车码乘车不需要再刷一码通。16.30左右在王家村车站坐37路车，司机说不知道有这个通知，按照司机要求我扫了。我想弄明白，我到底要不要扫一码通？ ​",
          type: "民生社保",
          date: "20220410",
          point: "25",
        },
        {
          content:
            "王沙路修路好几段是单车道，等公交车的人还站在马路上，本来就一个车道，人一站在那不但堵车，等车的人还有危险，公交车到站一停后面的车都堵起来了，今天为了躲避马路上等车的那几个人（照片上画红圈的就是等公交车的人），前车突然急刹车，导致追尾堵车！王沙路修路工程要到7月份才结束，早高峰晚高峰更是因为公交车停车、乘客等车等原因堵的要命，相关部门能不能好好规划一下？@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
          type: "交通运输",
          date: "20220404",
          point: "20",
        },
        {
          content:
            "顶牛了，违章停车占一排车道！@青岛交警 @李沧交警 @青岛交通正接触 @青岛交通广播FM897 2青岛 ​",
          type: "交通运输",
          date: "20220401",
          point: "25",
        },
        {
          content:
            "虎山花苑B区北门门前这条路被违章停车占据，又成了一条单行线！ 2青岛 ​",
          type: "交通运输",
          date: "20220329",
          point: "13",
        },
        {
          content:
            "#问政山东#疫情期间基层党员站岗无怨无悔，但自己家的拆迁款要回来怎么这么费劲！青岛市崂山区沙子口街道北崂社区老房子手续齐全，沙子口街道和开发商海尔集团、青岛畅远置业有限公司都认可，畅远置业有限公司和沙子口街道政府来回踢皮球，成天说研究就是不给解决，开发商拒绝和我们对话，畅远置业工作人员王文浩态度恶劣，扬言能办也不给办！沙子口街道政府领导更是今天拖明天，明天拖后天，就是不解决，疫情值班站岗基层党员分文不取，但要自己该要的钱就这么难吗？",
          type: "民生社保",
          date: "20220329",
          point: "24",
        },
        {
          content:
            "洛阳路和四流南路路口红绿灯🚥红灯坏了不亮，手慢了没拍下三个全黑灯的画面@青岛交通 @青岛交通广播FM897 ​",
          type: "交通运输",
          date: "20220321",
          point: "18",
        },
        {
          content:
            "滨江路每天早晚路两边都停满了车，尤其是海岸锦城小区门口和滨江路信号灯下面，会车过不去，行人都没有地方走，能不管理一下，弄上限停标志和摄像头，什么时候才能解决这种乱停车现象，给市民一个安全出行环境。@市北交警 @青岛交通广播FM897 @青岛交警 @青岛交通违章 ​​​ 2青岛 ​",
          type: "交通运输",
          date: "20220410",
          point: "15",
        },
        {
          content:
            "应该是辆营运车辆，在汽车东站路边乱停接送，上班高峰时间别车堵路导致后面路段车辆拥堵。这种没素质没别品的司机应该再回回炉了！@青岛生活情报 @青岛发布 @青岛公安 @青岛交通广播FM897 ​",
          type: "交通运输",
          date: "20220414",
          point: "20",
        },
        {
          content:
            " 特殊时期，公交车的人挤满了，还有大量穿校服的，希望能管管，感觉有点危险啊。多少座坐多少人，像深圳公交车似的，多了乘坐下一班车。会不会更好一些呢？着急坐车的，可以考虑早到车站等待！ 2青岛·北村小区 L仙女Axia的微博视频 ​",
          type: "交通运输",
          date: "20220411",
          point: "24",
        },
        {
          content:
            "我们家隔壁好像有人在家暴 但今天是我第一天搬过来 不知道是隔壁还是楼下？ 我能听到的东西撞墙的声音，能听到一个男人咬着牙说是不是没完了？不知道要不要报警？一方面不能确定是哪一家，另外一方面也没办法完全确定是存在暴力行为的@青岛公安 但是那个男人咬着牙恶狠狠说话的声音真的很可怕。这个声音大概十分钟就会出现一次，应该是从晚上11点左右就开始了，中间停了很长一段时间，现在又开始了。 ​",
          type: "民生社保",
          date: "20220411",
          point: "13",
        },
      ],
    };
  },
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
.dig .up {
  height: 15.5rem;
  width: 66.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid #778e9577;
  background-color: #778e9522;
}
.up iframe {
  width: 20rem;
  height: 5rem;
  padding: 0rem;
  margin: 0rem;
  /* border: 1px solid #000; */
}

.up .title {
  position: fixed;
  font-size: 5rem;
  color: #0bedae;
}
.dig .down {
  height: 19.5rem;
  width: 66.5rem;
  border: 0.1rem solid #778e9577;
  background-color: #778e9522;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}
.dig .down .message {
  display: flex;
  flex-direction: row;
  width: 64.5rem;
  margin: 1rem 0.5rem 0rem 0.5rem;
  padding: 1rem 0.5rem;
  background: linear-gradient(
    to right bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 1)
  );
  border-radius: 0.2rem;
  color: #687684;
  text-shadow: 0.01rem 0.01rem 1px #687684;
  z-index: 2;
}
.dig .down .message .contents {
  overflow: hidden;
  white-space: nowrap;
  width: 43.5rem;
}
.dig .down .message .type,
.date,
.point {
  width: 6rem;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.dig .down .message button {
  margin-left: 1rem;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: #687684;
  color: #fafbfc;
  border-radius: 0.4rem;
}
.dig .down .message img {
  height: 1.2rem;
  width: 0.2rem;
  margin: 0 0.5rem;
}
.dig .down .open {
  position: relative;
  top: -1.5rem;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64.5rem;
  margin: 0rem 0.5rem 0rem 0.5rem;
  padding: 0.2rem 0.5rem;
  background: linear-gradient(
    to right bottom,
    rgba(250, 251, 252, 1),
    rgba(250, 251, 252, 0.8)
  );
  border-radius: 0.2rem;
  color: #687684;
  text-shadow: 0.01rem 0.01rem 1px #687684;
}
.dig .down .open .opendown,
.words {
  height: 0rem;
  line-height: 1.5rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 200ms ease-in-out;
}
.dig .down .messageblock {
  transition: all 200ms ease-in-out;
}
.dig .down .messageblock:hover .open .opendown {
  height: 1.5rem;
}
.dig .down .messageblock:hover .words {
  height: auto;
  padding: 1rem 0.5rem;
}
</style>