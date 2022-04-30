<template>
  <div class="dig">
    <div class="messageBox" v-if="bol" @click="close">
      <div class="boardout" @click.stop="">
        <div class="board">
          <div class="word">单条查询</div>
          <input type="text" class="miaoshu" placeholder="诉求描述" />
          <img src="../../assets/linehori.png" alt="" />
          <div class="word">批量查询</div>
          <div class="func">
            <input
              v-show="false"
              ref="fileRef"
              type="file"
              @change="fileChange"
            />
            <button @click="uploadFile">诉求导入</button>
            <div class="discrip">?导入格式说明</div>
          </div>
        </div>
        <div class="chaxun">
          <button @click="close">查询</button>
        </div>
      </div>
    </div>
    <div class="up">
      <div class="titlewords">待处理工单</div>
      <div class="shangchuan">
        <button class="mod2" @click="toggle">
          <img src="../../assets/point.png" alt="" />
          自定义上传查询
        </button>
      </div>
    </div>
    <div class="middle">
      <div class="classblock" v-for="(item, index) in items">
        <button onclick="clickTab(this)" @click="getIndex(index)">
          <div class="lei">{{ item.title }}</div>
          <div class="leinum">{{ item.text }}</div>
        </button>
      </div>
    </div>
    <div class="down">
      <div class="downup">
        <div class="dealcontent">
          <button @click="displayon">
            <img src="../../assets/point.png" alt="" />智能转办
          </button>
          <div class="titlewords">工单内容</div>
          <div class="tents" v-if="show === 1">
            {{ items[key].content }}
          </div>
        </div>
        <div class="dealgraph" v-if="play">
          <div class="simititle">推荐部门节点关系图</div>
          <iframe
            src="chartdeal.html"
            name="topFrame"
            scrolling="No"
            frameborder="0"
            class="topFrame"
          ></iframe>
        </div>
      </div>
      <div class="downdown" v-if="play">
        <div class="dealsuggestion">
          <div class="titlewords">推荐处理部门</div>
          <div class="n3">市人民政府办公厅</div>
          <div class="n2">市社会保障局</div>
          <div class="n1">市文化和旅游局</div>
        </div>
        <div class="similar">
          <div class="simititle">相似工单</div>
          <div class="classblock" v-for="(item, index) in items">
            <button onclick="clickTab(this)">
              <div class="lei">{{ item.title }}</div>
              <div class="leinum">{{ item.text }}</div>
              <div class="leicontent">{{ item.content }}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import * as echarts from "echarts";
import LocationSelect from "./datepicker/LocationSelect.vue";
import Bar4dig from "./graph/bar4dig.vue";

export default {
  name: "Deal",
  data() {
    return {
      bol: false,
      play: false,
      key: 1,
      content: false,
      show: 1,
      items: [
        {
          title: "民生问题",
          text: "疫情复工",
          content:
            "健身房，台球厅，饭店各行业都可以复工营业了，电影院在做好防疫的情况下，什么时间可以营业啊，咱这边有没有具体的计划啊，每天的亏损实在扛不住了",
        },
        {
          title: "民生问题",
          text: "家庭暴力",
          content:
            "我们家隔壁好像有人在家暴 但今天是我第一天搬过来 不知道是隔壁还是楼下？ 我能听到的东西撞墙的声音，能听到一个男人咬着牙说是不是没完了？不知道要不要报警？一方面不能确定是哪一家，另外一方面也没办法完全确定是存在暴力行为的@青岛公安 但是那个男人咬着牙恶狠狠说话的声音真的很可怕。这个声音大概十分钟就会出现一次，应该是从晚上11点左右就开始了，中间停了很长一段时间，现在又开始了。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "交通问题",
          text: "市南区交通堵塞严重",
          content:
            "王沙路修路好几段是单车道，等公交车的人还站在马路上，本来就一个车道，人一站在那不但堵车，等车的人还有危险，公交车到站一停后面的车都堵起来了，今天为了躲避马路上等车的那几个人（照片上画红圈的就是等公交车的人），前车突然急刹车，导致追尾堵车！王沙路修路工程要到7月份才结束，早高峰晚高峰更是因为公交车停车、乘客等车等原因堵的要命，相关部门能不能好好规划一下？@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "物价问题",
          text: "猪肉持续涨价",
          content:
            "今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。 今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "民生问题",
          text: "家庭暴力",
          content:
            "我们家隔壁好像有人在家暴 但今天是我第一天搬过来 不知道是隔壁还是楼下？ 我能听到的东西撞墙的声音，能听到一个男人咬着牙说是不是没完了？不知道要不要报警？一方面不能确定是哪一家，另外一方面也没办法完全确定是存在暴力行为的@青岛公安 但是那个男人咬着牙恶狠狠说话的声音真的很可怕。这个声音大概十分钟就会出现一次，应该是从晚上11点左右就开始了，中间停了很长一段时间，现在又开始了。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "交通问题",
          text: "市南区交通堵塞严重",
          content:
            "王沙路修路好几段是单车道，等公交车的人还站在马路上，本来就一个车道，人一站在那不但堵车，等车的人还有危险，公交车到站一停后面的车都堵起来了，今天为了躲避马路上等车的那几个人（照片上画红圈的就是等公交车的人），前车突然急刹车，导致追尾堵车！王沙路修路工程要到7月份才结束，早高峰晚高峰更是因为公交车停车、乘客等车等原因堵的要命，相关部门能不能好好规划一下？@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "物价问题",
          text: "猪肉持续涨价",
          content:
            "今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。 今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "民生问题",
          text: "家庭暴力",
          content:
            "我们家隔壁好像有人在家暴 但今天是我第一天搬过来 不知道是隔壁还是楼下？ 我能听到的东西撞墙的声音，能听到一个男人咬着牙说是不是没完了？不知道要不要报警？一方面不能确定是哪一家，另外一方面也没办法完全确定是存在暴力行为的@青岛公安 但是那个男人咬着牙恶狠狠说话的声音真的很可怕。这个声音大概十分钟就会出现一次，应该是从晚上11点左右就开始了，中间停了很长一段时间，现在又开始了。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "交通问题",
          text: "市南区交通堵塞严重",
          content:
            "王沙路修路好几段是单车道，等公交车的人还站在马路上，本来就一个车道，人一站在那不但堵车，等车的人还有危险，公交车到站一停后面的车都堵起来了，今天为了躲避马路上等车的那几个人（照片上画红圈的就是等公交车的人），前车突然急刹车，导致追尾堵车！王沙路修路工程要到7月份才结束，早高峰晚高峰更是因为公交车停车、乘客等车等原因堵的要命，相关部门能不能好好规划一下？@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "物价问题",
          text: "猪肉持续涨价",
          content:
            "今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。 今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "民生问题",
          text: "家庭暴力",
          content:
            "我们家隔壁好像有人在家暴 但今天是我第一天搬过来 不知道是隔壁还是楼下？ 我能听到的东西撞墙的声音，能听到一个男人咬着牙说是不是没完了？不知道要不要报警？一方面不能确定是哪一家，另外一方面也没办法完全确定是存在暴力行为的@青岛公安 但是那个男人咬着牙恶狠狠说话的声音真的很可怕。这个声音大概十分钟就会出现一次，应该是从晚上11点左右就开始了，中间停了很长一段时间，现在又开始了。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "交通问题",
          text: "市南区交通堵塞严重",
          content:
            "王沙路修路好几段是单车道，等公交车的人还站在马路上，本来就一个车道，人一站在那不但堵车，等车的人还有危险，公交车到站一停后面的车都堵起来了，今天为了躲避马路上等车的那几个人（照片上画红圈的就是等公交车的人），前车突然急刹车，导致追尾堵车！王沙路修路工程要到7月份才结束，早高峰晚高峰更是因为公交车停车、乘客等车等原因堵的要命，相关部门能不能好好规划一下？@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "物价问题",
          text: "猪肉持续涨价",
          content:
            "今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。 今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
      ],
      items2: [
        {
          title: "民生问题",
          text: "允许开业",
          content:
            "请问理发店何时能够开业，店内以做好消毒措施，保证严格落实疫情防控政策，希望可以尽早允许开业，我们要挣钱吃饭啊",
        },
        {
          title: "民生问题",
          text: "影院营业",
          content: "求问电影院什么时候能开业啊",
        },
        {
          title: "民生问题",
          text: "解除封控",
          content: "已经连续多日没有新增病例了，请问何时可以解除封控？",
        },
        {
          title: "民生问题",
          text: "家庭暴力",
          content:
            "我们家隔壁好像有人在家暴 但今天是我第一天搬过来 不知道是隔壁还是楼下？ 我能听到的东西撞墙的声音，能听到一个男人咬着牙说是不是没完了？不知道要不要报警？一方面不能确定是哪一家，另外一方面也没办法完全确定是存在暴力行为的@青岛公安 但是那个男人咬着牙恶狠狠说话的声音真的很可怕。这个声音大概十分钟就会出现一次，应该是从晚上11点左右就开始了，中间停了很长一段时间，现在又开始了。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "交通问题",
          text: "市南区交通堵塞严重",
          content:
            "王沙路修路好几段是单车道，等公交车的人还站在马路上，本来就一个车道，人一站在那不但堵车，等车的人还有危险，公交车到站一停后面的车都堵起来了，今天为了躲避马路上等车的那几个人（照片上画红圈的就是等公交车的人），前车突然急刹车，导致追尾堵车！王沙路修路工程要到7月份才结束，早高峰晚高峰更是因为公交车停车、乘客等车等原因堵的要命，相关部门能不能好好规划一下？@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "物价问题",
          text: "猪肉持续涨价",
          content:
            "今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。 今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "民生问题",
          text: "家庭暴力",
          content:
            "我们家隔壁好像有人在家暴 但今天是我第一天搬过来 不知道是隔壁还是楼下？ 我能听到的东西撞墙的声音，能听到一个男人咬着牙说是不是没完了？不知道要不要报警？一方面不能确定是哪一家，另外一方面也没办法完全确定是存在暴力行为的@青岛公安 但是那个男人咬着牙恶狠狠说话的声音真的很可怕。这个声音大概十分钟就会出现一次，应该是从晚上11点左右就开始了，中间停了很长一段时间，现在又开始了。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "交通问题",
          text: "市南区交通堵塞严重",
          content:
            "王沙路修路好几段是单车道，等公交车的人还站在马路上，本来就一个车道，人一站在那不但堵车，等车的人还有危险，公交车到站一停后面的车都堵起来了，今天为了躲避马路上等车的那几个人（照片上画红圈的就是等公交车的人），前车突然急刹车，导致追尾堵车！王沙路修路工程要到7月份才结束，早高峰晚高峰更是因为公交车停车、乘客等车等原因堵的要命，相关部门能不能好好规划一下？@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "物价问题",
          text: "猪肉持续涨价",
          content:
            "今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。 今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "民生问题",
          text: "家庭暴力",
          content:
            "我们家隔壁好像有人在家暴 但今天是我第一天搬过来 不知道是隔壁还是楼下？ 我能听到的东西撞墙的声音，能听到一个男人咬着牙说是不是没完了？不知道要不要报警？一方面不能确定是哪一家，另外一方面也没办法完全确定是存在暴力行为的@青岛公安 但是那个男人咬着牙恶狠狠说话的声音真的很可怕。这个声音大概十分钟就会出现一次，应该是从晚上11点左右就开始了，中间停了很长一段时间，现在又开始了。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "交通问题",
          text: "市南区交通堵塞严重",
          content:
            "王沙路修路好几段是单车道，等公交车的人还站在马路上，本来就一个车道，人一站在那不但堵车，等车的人还有危险，公交车到站一停后面的车都堵起来了，今天为了躲避马路上等车的那几个人（照片上画红圈的就是等公交车的人），前车突然急刹车，导致追尾堵车！王沙路修路工程要到7月份才结束，早高峰晚高峰更是因为公交车停车、乘客等车等原因堵的要命，相关部门能不能好好规划一下？@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "物价问题",
          text: "猪肉持续涨价",
          content:
            "今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。 今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "民生问题",
          text: "家庭暴力",
          content:
            "我们家隔壁好像有人在家暴 但今天是我第一天搬过来 不知道是隔壁还是楼下？ 我能听到的东西撞墙的声音，能听到一个男人咬着牙说是不是没完了？不知道要不要报警？一方面不能确定是哪一家，另外一方面也没办法完全确定是存在暴力行为的@青岛公安 但是那个男人咬着牙恶狠狠说话的声音真的很可怕。这个声音大概十分钟就会出现一次，应该是从晚上11点左右就开始了，中间停了很长一段时间，现在又开始了。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "交通问题",
          text: "市南区交通堵塞严重",
          content:
            "王沙路修路好几段是单车道，等公交车的人还站在马路上，本来就一个车道，人一站在那不但堵车，等车的人还有危险，公交车到站一停后面的车都堵起来了，今天为了躲避马路上等车的那几个人（照片上画红圈的就是等公交车的人），前车突然急刹车，导致追尾堵车！王沙路修路工程要到7月份才结束，早高峰晚高峰更是因为公交车停车、乘客等车等原因堵的要命，相关部门能不能好好规划一下？@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
        },
        {
          title: "物价问题",
          text: "猪肉持续涨价",
          content:
            "今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。 今年小麦亩产又增收了 　2021年由于受雨灾影响，延津县小麦播期普遍滞后、播期拉长，晚播弱苗占比偏高。小麦长势好不好、产量稳不稳、增收有没有希望成为众多农户关心的问题。 随着气温逐渐回升，麦田已是一片青绿。农技人员正在观察苗情，种植户在洒药施肥，水肥药一体化设备也正在按照设定好的程序给麦田浇水，田间地头变得忙碌起来。李元智告诉记者，今年苗情看上去不错，产量和收入不会比去年差。@青岛交通管理监督 @青岛交警 @青岛新闻网民生在线 @青岛政务 @青岛交通广播FM897 @城阳交警",
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
    displayon() {
      this.play = !this.play;
    },
    contentview() {
      this.content = !this.content;
    },
    getIndex(index) {
      this.key = index;
      console.log(this.key);
      this.show = 1;
    },
    // 按钮事件  触发input输入框
    uploadFile() {
      this.$refs.fileRef.dispatchEvent(new MouseEvent("click")); //弹出选择本地文件
    },
  },
  components: {
    LocationSelect,
    Bar4dig,
  },
};
</script>

<style scoped>
.dig {
  width: 67.5rem;
  height: 36rem;
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
}
.dig .up {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 67.5rem;
}
.dig .up .titlewords {
  height: 2.5rem;
  width: 30rem;
  /* padding: 0.2rem 1.5rem; */
  text-align: left;
  color: #1b2767;
  border-bottom: solid 0.01rem #dce3eb;
  font-size: 1.8rem;
  font-weight: 900;
  font-family: YaHei;
  display: flex;
}
.dig .up .shangchuan {
  height: 2.5rem;
  width: 36.5rem;
  /* padding: 0.2rem 1.5rem; */
  text-align: left;
  color: #1b2767;
  /* border-bottom: solid 0.01rem #dce3eb; */
  font-size: 1.8rem;
  font-weight: 900;
  font-family: YaHei;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}
.dig .up .shangchuan button {
  position: absolute;
  border: 0;
  width: 12rem;
  height: 2rem;
  /* margin: 13rem 1rem 1rem 26.5rem; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #5e5498;
  box-shadow: 0px 11px 134px rgba(94, 84, 152, 0.5),
    0px 25.9437px 58.4156px rgba(94, 84, 152, 0.375),
    0px 4.2px 21.775px rgba(94, 84, 152, 0.2),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.125);
  border-radius: 0.5rem;
  color: #f4f2ff;
  font-size: 1.2rem;
  font-weight: 900;
  font-family: YaHei;
  transition: all 500ms ease-in-out;
}
.dig .up .shangchuan img {
  width: 1rem;
}
.dig .up .shangchuan button:hover {
  width: 15rem;
}
.dig .middle {
  width: 67.5rem;
  display: flex;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 1rem;
  overflow-y: scroll;
}
.classblock {
  margin: 1rem;
  height: auto;
  width: auto;
  letter-spacing: normal;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: all 200ms ease-in-out;
  white-space: nowrap;
}
.classblock button {
  border: 0;
  padding: 1rem 1rem;
  display: flex;
  height: auto;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff0;
  transition: all 200ms ease-in-out;
}
.classblock:nth-child(n) button {
  color: #55a55e;
  background: #edffef;
  box-shadow: 0px 71px 134px rgba(85, 165, 94, 0.1),
    0px 35.9437px 58.4156px rgba(85, 165, 94, 0.0675),
    0px 14.2px 21.775px rgba(85, 165, 94, 0.05),
    0px 3.10625px 7.74687px rgba(85, 165, 94, 0.0325);
}
.classblock:nth-child(2n) button {
  color: #3a7f92;
  background: #ecfbff;
  box-shadow: 0px 71px 134px rgba(58, 127, 146, 0.1),
    0px 35.9437px 58.4156px rgba(58, 127, 146, 0.0675),
    0px 14.2px 21.775px rgba(58, 127, 146, 0.05),
    0px 3.10625px 7.74687px rgba(58, 127, 146, 0.0325);
}
.classblock:nth-child(3n) button {
  color: #5e5498;
  background: #f4f2ff;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
}
.classblock:nth-child(4n) button {
  color: #9b715d;
  background: #fff2ec;
  box-shadow: 0px 71px 134px rgba(155, 113, 93, 0.1),
    0px 35.9437px 58.4156px rgba(155, 113, 93, 0.0675),
    0px 14.2px 21.775px rgba(155, 113, 93, 0.05),
    0px 3.10625px 7.74687px rgba(155, 113, 93, 0.0325);
}
.classblock:nth-child(5n) button {
  color: #2c5fa6;
  background: #ecf4ff;
  box-shadow: 0px 71px 134px rgba(44, 95, 166, 0.1),
    0px 35.9437px 58.4156px rgba(44, 95, 166, 0.0675),
    0px 14.2px 21.775px rgba(44, 95, 166, 0.05),
    0px 3.10625px 7.74687px rgba(44, 95, 166, 0.0325);
}
.classblock:nth-child(6n) button {
  color: #7d257d;
  background: #fff7ff;
  box-shadow: 0px 71px 134px rgba(125, 37, 125, 0.1),
    0px 35.9437px 58.4156px rgba(125, 37, 125, 0.0675),
    0px 14.2px 21.775px rgba(125, 37, 125, 0.05),
    0px 3.10625px 7.74687px rgba(125, 37, 125, 0.0325);
}
.classblock .lei {
  height: auto;
  width: auto;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: YaHei;
  letter-spacing: normal;
  border-bottom: solid 0.01rem #dce3eb;

  transition: all 200ms ease-in-out;
}
.classblock .leinum {
  margin-top: 0.2rem;
  height: auto;
  width: auto;
  font-size: 1rem;
  font-weight: 500;
  font-family: YaHei;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;
}
.classblock .leinum .wordslei {
  font-size: 0rem;
  font-weight: 500;
  transition: all 100ms ease-in-out;
}
.classblock:hover .lei {
  height: 1.6rem;
  width: 8rem;
  letter-spacing: 0.2rem;
}
.classblock:hover .leinum {
  width: 7rem;
}
.classblock:hover .leinum .wordslei {
  font-size: 0.8rem;
  font-weight: 500;
}
.classblock:hover {
  padding: 0rem 1rem;
}
.classblock:hover button {
  padding: 1rem 1rem;
}
.dig .down {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 67.5rem;
  /* padding: 0 1rem 0 0; */
  height: 26rem;
}
.dig .down .downup {
  height: 15rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}
.down .dealcontent {
  position: related;
  background: #fff;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
  width: 36.5rem;
  height: 15rem;
}
.down .dealcontent .titlewords {
  position: related;
  width: 15rem;
  height: 2rem;
  text-align: left top;
  color: #5e5498;
  border-bottom: solid 0.01rem #dce3eb;
  font-size: 1.5rem;
  font-weight: 900;
  font-family: YaHei;
  margin: 1rem 0 0 1rem;
}
.down .dealcontent .tents {
  margin: 0 1rem 1rem 1rem;
  font-family: YouYuan;
  color: #797c8c;
  line-height: 1.8rem;
  overflow: scroll;
  width: 34.5rem;
  height: 11rem;
}
.down .dealcontent button {
  position: absolute;
  border: 0;
  width: 10rem;
  height: 2rem;
  margin: 13rem 1rem 1rem 26.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #5e5498;
  box-shadow: 0px 11px 134px rgba(94, 84, 152, 0.5),
    0px 25.9437px 58.4156px rgba(94, 84, 152, 0.375),
    0px 4.2px 21.775px rgba(94, 84, 152, 0.2),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.125);
  border-radius: 0.5rem 0rem 0rem 0rem;
  color: #f4f2ff;
  font-size: 1.2rem;
  font-weight: 900;
  font-family: YaHei;
  transition: all 1000ms ease-in-out;
  opacity: 0;
}
.down .dealcontent button img {
  width: 1rem;
}
.down .dealcontent:hover button {
  opacity: 1;
}

.down .dealgraph {
  position: related;
  width: 29.6rem;
  height: 14.6rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  border: 0.2rem solid #f4f2ff;
  box-shadow: inset 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
}
.down .dealgraph .simititle {
  position: absolute;
  width: auto;
  padding: 0 1rem;
  height: 2rem;
  display: flex;
  margin:0 -0.4rem -0.4rem 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #5e5498;
  box-shadow: 0px 11px 134px rgba(94, 84, 152, 0.5),
    0px 25.9437px 58.4156px rgba(94, 84, 152, 0.375),
    0px 4.2px 21.775px rgba(94, 84, 152, 0.2),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.125);
  border-radius: 0.5rem 0rem 0rem 0rem;
  color: #f4f2ff;
  font-size: 1.2rem;
  font-weight: 900;
  font-family: YaHei;
  transition: all 500ms ease-in-out;
  opacity: 1;
}
.down .dealgraph:hover .simititle {
  opacity: 0;
}
.down .dealgraph iframe {
  width: 28.6rem;
  height: 14.6rem;
}

.dig .down .downdown {
  display: flex;
  flex-direction: row;
}
.down .dealsuggestion {
  position: related;
  /* background: #fff;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325); */
  width: 21.5rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
}
.down .dealsuggestion .titlewords {
  position: related;
  width: 10rem;
  height: 1.5rem;
  text-align: left top;
  color: #5e5498;
  border-bottom: solid 0.01rem #5e5498;
  font-size: 1rem;
  font-weight: 900;
  font-family: YaHei;
  /* margin: 1rem 0 0 1rem; */
}
.down .dealsuggestion .n1 {
  position: fixed;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 900;
  width: auto;
  height: auto;
  color: #55a55e;
  border-radius: 0.2rem;
  background: #edffef;
  box-shadow: 0px 71px 134px rgba(85, 165, 94, 0.1),
    0px 35.9437px 58.4156px rgba(85, 165, 94, 0.0675),
    0px 14.2px 21.775px rgba(85, 165, 94, 0.05),
    0px 3.10625px 7.74687px rgba(85, 165, 94, 0.0325);
  margin: 3rem 0 0 2rem;
}
.down .dealsuggestion .n2 {
  position: fixed;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 900;
  width: auto;
  height: auto;
  color: #5e5498;
  background: #f4f2ff;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
  margin: 4.5rem 0 0 10rem;
}
.down .dealsuggestion .n3 {
  position: fixed;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 900;
  width: auto;
  height: auto;
  color: #9b715d;
  background: #fff2ec;
  box-shadow: 0px 71px 134px rgba(155, 113, 93, 0.1),
    0px 35.9437px 58.4156px rgba(155, 113, 93, 0.0675),
    0px 14.2px 21.775px rgba(155, 113, 93, 0.05),
    0px 3.10625px 7.74687px rgba(155, 113, 93, 0.0325);
  margin: 6.5rem 0 0 3rem;
}

.down .similar {
  position: related;
  width: 45rem;
  height: 10rem;
  margin-left: 1rem;
  display: flex;
  height: auto;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: scroll;
  box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
    0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
    0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
}
.down .similar .simititle {
  position: absolute;
  width: 10rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #5e5498;
  box-shadow: 0px 11px 134px rgba(94, 84, 152, 0.5),
    0px 25.9437px 58.4156px rgba(94, 84, 152, 0.375),
    0px 4.2px 21.775px rgba(94, 84, 152, 0.2),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.125);
  border-radius: 0rem 0rem 0.5rem 0rem;
  color: #f4f2ff;
  font-size: 1.2rem;
  font-weight: 900;
  font-family: YaHei;
  transition: all 500ms ease-in-out;
  opacity: 1;
}
.down .similar:hover .simititle {
  opacity: 0;
}
.down .similar .classblock button {
  height: 10rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.down .similar .classblock:hover {
  padding: 0;
}
.down .similar .classblock:hover button {
  padding: 1rem 2rem;
}
.down .similar .classblock {
  margin: 0 1rem 0 0;
}
.down .similar .classblock .leicontent {
  width: 10rem;
  height: 6rem;
  white-space: normal;
  overflow: scroll;
  font-family: YouYuan;
  font-size: 0.8rem;
  line-height: 1rem;
}

.messageBox {
  width: 100%;
  height: 100%;
  margin: 2.5rem 0rem 0rem 3.5rem;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #0006;
  color: #5e5498;
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
  background: #fff;
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
  justify-content: center;
}
.messageBox .func button {
  width: 5rem;
  height: 2rem;
  border: 0;
  border-radius: 0.2rem;
  background: #5e5498;
  box-shadow: 0px 11px 134px rgba(94, 84, 152, 0.5),
    0px 25.9437px 58.4156px rgba(94, 84, 152, 0.375),
    0px 4.2px 21.775px rgba(94, 84, 152, 0.2),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.125);
  border-radius: 0.5rem;
  color: #f4f2ff;
  font-family: YaHei;
  font-size: 1rem;
  margin-right: 1rem;
}
.messageBox .func button:active {
  background: #f4f2ff;
  box-shadow: 0px 11px 134px rgba(94, 84, 152, 0.5),
    0px 25.9437px 58.4156px rgba(94, 84, 152, 0.375),
    0px 4.2px 21.775px rgba(94, 84, 152, 0.2),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.125);
  color: #5e5498;
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
  border: 0;
  background: #5e5498;
  box-shadow: 0px 11px 134px rgba(94, 84, 152, 0.5),
    0px 25.9437px 58.4156px rgba(94, 84, 152, 0.375),
    0px 4.2px 21.775px rgba(94, 84, 152, 0.2),
    0px 3.10625px 7.74687px rgba(94, 84, 152, 0.125);
  border-radius: 0rem 0rem 0.5rem 0rem;
  color: #f4f2ff;
  font-family: YaHei;
  font-size: 1.2rem;
  border-radius: 0 0 0.2rem 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}
.messageBox .chaxun button {
  width: 21rem;
  height: 100%;
  border: 0;
  background: #5e5498;
  color: #f4f2ff;
  font-family: YaHei;
  font-size: 1.2rem;
  font-weight: 900;
}
</style>