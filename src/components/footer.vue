<template>
  <div class=" text-center">
    <div class="z_footer" :class="{ z_fixed: isFixed }">
      Copyright &copy; 2017-2020, www.genban.org. All Rights Reserved.
      <span class="mar10_lr gray_6">|</span>
      <a
        class="gray_6s"
        target="_blank"
        href="http://www.baidu.com/"
        rel="nofollow"
        >京ICP备XXXXXXXX号</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
    };
  },

  created() {
    this.$nextTick(() => {
      var documentDom = document.getElementById("documentDom");
      var scrollHeight = documentDom.offsetHeight;
      this.isFixed =
        scrollHeight <
        (window.innerHeight || document.documentElement.clientHeight);
    });
  },
};
</script>

<style lang="scss">
.z_footer {
  width: 100%;
  background: #222;
  opacity: 0.9;
  color: #aaa;
  padding: 20px;
  a {
    color: #ddd;
  }
}
.z_fixed {
  position: fixed;
  bottom: 0;
}
</style>
