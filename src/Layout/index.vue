<template>
  <div>
    <div class="b_white bor_b">
      <Header />
    </div>

    <div class="layout" style="padding-top:60px;">
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>


<style lang="scss">
@import "@/assets/css/public.scss";
</style>
