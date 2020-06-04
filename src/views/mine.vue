<template>
  <el-main class="pad0 mar20_t">
    <el-row :gutter="0" class="min_h480 ">
      <el-col :span="5" class="pad0 border" style="margin-right:-1px;">
        <ul class="b_white z_mine">
          <li :class="{ active: index == 0 }" @click="index = 0">个人资料</li>
          <li :class="{ active: index == 1 }" @click="index = 1">我的收藏</li>
          <li :class="{ active: index == 2 }" @click="index = 2">我关注的人</li>
          <li :class="{ active: index == 3 }" @click="index = 3">我的粉丝</li>
          <li :class="{ active: index == 4 }" @click="index = 4">我的积分</li>
          <li :class="{ active: index == 5 }" @click="index = 5">我的留言</li>
        </ul>
      </el-col>
      <el-col :span="19" class="mar20_b pad0 border">
        <el-container class="mar20_b">
          <el-main class=" b_white pad20">
            <el-image
              :src="headIcon"
              class="w100 radius50 left border"
            ></el-image>
            <div class="left pad20_tb">
              <span class="block pad20_lr line_h40">
                <em
                  class="inlineBlock w20 height20 b_red vertical_m text-center line_h20 radius3 white"
                  >1</em
                >
                <em class="vertical_m f24">海棠朵朵海棠朵朵</em>
              </span>
              <span class="f16 block pad20_lr gray_9">积分：8888</span>
            </div>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
import headIcon from "@/assets/images/default.jpg";
import editor from "@/components/editor";
export default {
  components: {
    editor,
  },
  data() {
    return {
      index: 0,
      headIcon: headIcon,
    };
  },

  created() {},

  methods: {
    currentChange(val) {
      this.pagination.pageNum = val;
    },
    handleClick() {},
    onEditorChange($event) {
      console.log("$event", $event);
    },
  },
};
</script>

<style lang="scss" scoped>
.pad0 {
  padding: 0 !important;
}
ul.z_mine {
  min-height: 480px;
  li {
    width: 100%;
    height: 42px;
    line-height: 42px;
    background: #fff;
    color: #4d4d4d;
    padding: 0 10px;
    cursor: pointer;
  }
  li:hover {
    background: #fde3e4;
    color: #ca0c16;
  }
  li.active {
    background: #b20b13;
    color: #fff;
  }
}
</style>
