<template>
  <div class="selectbox">
    <el-select
      v-model="value"
      placeholder="选择地区"
      style="width: 7rem; color: #000"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        style="width: 6rem"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

export default {
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "青岛市",
        },
        {
          value: "Option2",
          label: "济南市",
        },
        {
          value: "Option3",
          label: "潍坊市",
        },
        {
          value: "Option4",
          label: "烟台市",
        },
        {
          value: "Option5",
          label: "日照市",
        },
      ],
      value: "",
    };
  },
};
</script>
<style scoped>
.selectbox {
  width: 8rem;
  overflow: hidden;
  margin: 0 1rem;
}
</style>