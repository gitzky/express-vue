<template>
  <div id="documentDom">
    <moveBack />
    <div>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import moveBack from "@/components/MoveBack";

import Footer from "@/components/footer";
export default {
  components: {
    moveBack,
    Footer,
  },
};
</script>
