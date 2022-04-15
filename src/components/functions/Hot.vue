<template>
  <div class="dig">
    <div class="left">
      <div class="up">
        <div class="chart1">
          <iframe
            src="chart.html"
            name="topFrame"
            scrolling="No"
            frameborder="0"
            class="topFrame"
          ></iframe>
        </div>
        <div class="chart2">
          <iframe
            src="chart.html"
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
            <div class="word">你好</div>
            <div class="word">这个</div>
            <div class="word">科技感</div>
            <div class="word">地不地道</div>
            <div class="word">反正</div>
            <div class="word">就这</div>
            <div class="word">版吧</div>
            <div class="word">我</div>
            <div class="word">懒得</div>
            <div class="word">再重新</div>
            <div class="word">做了</div>
            <div class="word">草</div>
            <div class="word">草</div>
            <div class="word">草</div>
            <div class="word">草</div>
            <div class="word">草</div>
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
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">这是一条没有价值的微博内容</div>
          </div>
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">
              这是一条又长又长又长又长又长又长又长又长又长又长又长又长又长又长又长又长又长又长又长又长又长又长又长又没有价值的微博内容
            </div>
          </div>
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">这是一条没有价值的微博内容</div>
          </div>
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">这是一条没有价值的微博内容</div>
          </div>
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">这是一条没有价值的微博内容</div>
          </div>
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">这是一条没有价值的微博内容</div>
          </div>
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">不想写了我日</div>
          </div>
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">不想写了我日</div>
          </div>
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">不想写了我日</div>
          </div>
          <div class="blog">
            <img src="../../assets/point.png" alt="" />
            <div class="tent">请你吃粑粑</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="up">
        <marquee
          class="block"
          onmouseout="this.start();"
          onmouseover="this.stop();"
          scrolldelay="400"
          direction="up"
          behavior="scroll"
        >
          <div class="things">
            <div class="time">2019</div>
            <div class="static">处理了一大半但还有一堆事</div>
          </div>
          <div class="things">
            <div class="time">2019</div>
            <div class="static">
              处理了一大半但还有一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆一堆事
            </div>
          </div>
          <div class="things">
            <div class="time">2019</div>
            <div class="static">事情怎么这么多有必要做吗</div>
          </div>
          <div class="things">
            <div class="time">2019</div>
            <div class="static">没意思</div>
          </div>
          <div class="things">
            <div class="time">2019</div>
            <div class="static">有意思</div>
          </div>
          <div class="things">
            <div class="time">2019</div>
            <div class="static">没意思</div>
          </div>
          <div class="things">
            <div class="time">2019</div>
            <div class="static">有意思</div>
          </div>
          <div class="things">
            <div class="time">2019</div>
            <div class="static">没意思</div>
          </div>
          <div class="things">
            <div class="time">2019</div>
            <div class="static">有意思</div>
          </div>
          <div class="things">
            <div class="time">2019</div>
            <div class="static">老子要给李弟诚一巴掌</div>
          </div>
        </marquee>
      </div>
      <div class="down">
        <button type="submit">数据上传</button>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Hot",
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
  background-color: #778e9522;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.left .up .chart2 {
  flex: 25rem;
  border: 1px solid;
  border: 0.1rem solid #778e9577;
  background-color: #778e9522;
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
.right {
  flex: 16.5rem;
  display: flex;
  flex-direction: column;
}
.right .up {
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
.right .up .block {
  margin: 0.5rem;
  height: 28rem;
}
.right .up::after {
  content: "";
  position: absolute;
  width: 0.1rem;
  height: 29rem;
  margin: 0 12.5rem 0 0;
  background-color: #0bedae;
  z-index: -1;
}
.right .up .block .things {
  display: flex;
  margin-bottom: 1rem;
}
.right .up .block .things .time {
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
.right .up .block .things .static {
  color: #fff;
  font-size: 0.8rem;
  font-family: YouYuan;
  opacity: 0.8;
  padding: 0.1rem 0rem;
}
.right .down {
  flex: 6rem;
  /* border: 0.1rem solid #778e9577;
  background-color: #778e9522; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.right .down button {
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
.right .down button:hover {
  background-color: #0bedae;
  color: #fff;
  font-weight: 500;
}
</style>