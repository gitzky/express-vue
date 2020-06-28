<template>
  <div>
    <div class="z_user">
      <template v-if="!userInfo">
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
          <span class="white cursor">{{userInfo&&userInfo.name}}</span>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span class="cursor vertical_m" @click="logoutNow">
          <i class="el-icon-switch-button"></i>
          <span>退出</span>
        </span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: null
    };
  },
  created() {
    var token = localStorage.getItem("authorization");
    console.log("token", token);
    this.$store.dispatch("getMemberByToken").then(res => {
      console.log("res", res);
      if (res.code === "0" && res.data) {
        this.userInfo = res.data;
      }
    });
  },

  methods: {
    logoutNow() {
      localStorage.removeItem("authorization");
      window.location.reload();
    }
  }
};
</script>