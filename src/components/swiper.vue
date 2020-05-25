<template>
  <div>
    <div>
      <el-carousel :interval="3000" arrow="always" height="378px">
        <el-carousel-item :key="index" v-for="(item,index) in swiper" class="text-center">
          <div class="w_swiperItem">
            <el-image style="width:889px;" :src="item.url" fit="fill"></el-image>
            <div class="tip">
              <h3>{{ item.tip_title }}</h3>
              <p>{{ item.tip_content }}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>


<script>
import slide1 from "@/assets/images/slide1.jpg";
import slide2 from "@/assets/images/slide2.jpg";
import slide3 from "@/assets/images/slide3.jpg";
import slide4 from "@/assets/images/slide4.jpg";
export default {
  data() {
    return {
      swiper: [
        {
          url: slide1,
          tip_title: "First slide label",
          tip_content:
            "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          url: slide2,
          tip_title: "Second slide label",
          tip_content:
            "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          url: slide3,
          tip_title: "Three slide label",
          tip_content:
            "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          url: slide4,
          tip_title: "Three slide label",
          tip_content:
            "Nulla vitae elit libero, a pharetra augue mollis interdum."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.el-carousel {
  .w_swiperItem {
    position: relative;
    img {
      width: 889px !important;
    }
    .tip {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 20px;
      color: white;
    }
  }
}
</style>