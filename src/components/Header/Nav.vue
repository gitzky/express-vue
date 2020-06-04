<template>
  <div class="w_nav">
    <el-menu
      mode="horizontal"
      :default-active="activePath"
      @select="selectMenu"
    >
      <el-menu-item index="/index">首页</el-menu-item>
      <el-menu-item index="/list">文章列表</el-menu-item>
      <el-menu-item index="/notes">随写笔记</el-menu-item>
      <el-menu-item index="/home">个人中心</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>

      <!-- <el-menu-item index="/echarts">echarts</el-menu-item>
      <el-menu-item index="/editor">editor</el-menu-item>
      <el-menu-item index="/form">form</el-menu-item>
      <el-menu-item index="/dialog">dialog</el-menu-item>
      <el-menu-item index="/images">images</el-menu-item>
      <el-menu-item index="/map">map</el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePath: "/" + this.$route.path.split("/")[1],
    };
  },
  watch: {
    $route() {
      console.log(11, this.$route.path);
      this.activePath = "/" + this.$route.path.split("/")[1];
    },
  },
  methods: {
    selectMenu(indexPath) {
      this.$router.push(indexPath);
    },
  },
};
</script>
