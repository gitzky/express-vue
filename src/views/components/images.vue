<template>
  <div>
    <h2 class="block">测试mock数据</h2>
    <div class="b_white pad30">
      <div class="mar10_tb">
        <el-button type="primary" @click="loadImgList">获取数据</el-button>
      </div>

      <viewer class="images" :images="[]">
        <ul>
          <template v-for="(item,index) in tableData">
            <li :key="index">
              <h4 class="normal line_h30 fb">{{index}}、{{item.title}}</h4>
              <template>
                <img :src="item.imgUrl" class="cursor" />
              </template>

              <div class="box10"></div>作者：
              <span class="gray_6">{{item.author}}</span>
              <span class="mar20_l gray_9">{{item.date}}</span>
              <div class="box20"></div>
            </li>
          </template>
        </ul>
      </viewer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },

  mounted() {},

  methods: {
    loadImgList() {
      console.log("获取图片");
      this.$store.dispatch("index/selListByParams").then(res => {
        console.log(res);
        if (res.code === "0") {
          this.tableData = [...this.tableData, ...res.data.list];
        }
      });
    }
  }
};
</script>
