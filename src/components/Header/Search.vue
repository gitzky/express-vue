<template>
  <div class="w_search">
    <el-input v-model="searchKey" size="small" placeholder="请输入内容">
      <el-button slot="append" icon="el-icon-search">搜索</el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKey: ""
    };
  }
};
</script>