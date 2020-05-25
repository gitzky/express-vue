<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>添加一个按钮</el-button>
    <el-form>
      <el-form-item label="随便一个输入框">
        <el-input></el-input>
      </el-form-item>

      <el-table class="w_per100 text-center" border :data="posts">
        <el-table-column label="标题" align="center" prop="newsName"></el-table-column>
        <el-table-column label="时间" align="center" prop="newsTime"></el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    console.log("this.$store", this.$store);
    this.$store
      .dispatch("selPostList", { name: "zhangsan", age: 18 })
      .then(res => {
        console.log(res);
        this.posts = res.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
