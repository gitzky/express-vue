<template>
  <div>
    <div class="z_user">
      <template v-if="getToken">
        <span class="vertical_m cursor" @click="$router.push('/login')">
          <span>登录</span>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span class="vertical_m cursor" @click="$router.push('/register')">
          <span>注册</span>
        </span>
      </template>
      <template v-else>
        <span class="vertical_m">
          <i class="el-icon-s-custom"></i>
          <span>用户：</span>
          <span class="white cursor">小元元</span>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span class="cursor vertical_m">
          <i class="el-icon-switch-button"></i>
          <span>退出</span>
        </span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  created() {},
  computed: {
    getToken() {
      var token = sessionStorage.getItem("token");
      return token;
    }
  }
};
</script>