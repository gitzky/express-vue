<template>
  <div>
    <!-- echarts-ui -->
    <h2 class="b_f5 f24">图表实例</h2>
    <div class="clear b_white">
      <echarts
        class="myChart border"
        id="myChart"
        height="400px"
        width="600px"
        @handleChart="handleChart"
      />
      <echarts
        class="myChart border bor_l_no"
        id="myChart1"
        height="400px"
        width="600px"
        @handleChart="handleChart1"
      />
    </div>
  </div>
</template>

<script>
import echarts from "@/components/echarts";
export default {
  components: {
    echarts
  },
  methods: {
    // echarts
    handleChart(chart) {
      this.drawPie(chart);
    },
    handleChart1(chart) {
      this.drawLine(chart);
    },
    drawLine(chart) {
      chart.setOption({
        title: { text: "在Vue中使用echarts", x: 10, y: 10 },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    drawPie(chart) {
      var option = {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          x: "20",
          y: "20"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          left: "50",
          bottom: "50",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            center: ["50%", "45%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      chart.setOption(option);
    }
  }
};
</script>
<style lang="scss">
.myChart {
  width: 600px;
  float: left;
}
</style>