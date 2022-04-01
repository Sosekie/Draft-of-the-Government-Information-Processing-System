<template>
  <div class="contentDeal1">
    <div class="left">1</div>
    <div class="middle">
      <div class="up">
        人走向成熟的第一步，就是要认识并接受自己的平庸与普通。
        我们从小到大总能从各种渠道听说一些人才被埋没的故事并感到惋惜，但大家有没有发现，这些事情无论中外，基本都发生在古代？
        准确地说，是工业革命之前。
        这是因为在信息和交通并不发达的年代里，个人的任何闪光点都难以被知晓，再出名也就是在自己的村子或者…
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
        <div class="right">3</div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script scoped>
export default {
  name: "Deal",
};
</script>

<style scoped>
.contentDeal1 {
  flex: 34.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.left {
  flex: 15rem;
  height: 33.5rem;
  border: 1px solid #000;
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
  background-color: #ffffff;
  padding: 1rem;
  text-align: left;
  color: #000;
  margin-bottom: 1rem;
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
  border: 1px solid #000;
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
  /* border: 1px solid #000; */
}
.middle .down .right {
  flex: 10rem;
  height: 22rem;
  /* width: 8rem; */
  border: 1px solid #000;
}
.right {
  flex: 11.5rem;
  height: 33.5rem;
  border: 1px solid #000;
}
</style>