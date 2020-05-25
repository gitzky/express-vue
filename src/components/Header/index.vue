<template>
  <div class="w_header clear">
    <div class="inner">
      <div class="left">
        <logo />
      </div>
      <div class="left">
        <Nav />
      </div>
      <div class="right">
        <User />
      </div>
      <div class="left">
        <Search />
      </div>
    </div>
  </div>
</template>

<script>
import logo from "./Logo.vue";
import Nav from "./Nav.vue";
import Search from "./Search.vue";
import User from "./User.vue";
export default {
  components: {
    logo,
    Nav,
    Search,
    User
  }
};
</script>

<style lang="scss">
@import "./index.module.scss";
</style>

