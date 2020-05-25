<template>
  <div :class="className" :id="id" :style="{height:height,width:width}" />
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");

export default {
  props: {
    className: String,
    id: String,
    height: String,
    width: String
  },

  data() {
    return {
      chart: null
    };
  },

  mounted() {
    this.initChart();
  },

  beforeDestroy() {},

  methods: {
    initChart() {
      // let myChart = this.$echarts.init(document.getElementById(this.id));
      let myChart = echarts.init(document.getElementById(this.id));
      this.$emit("handleChart", myChart);
    }
  }
};
</script>