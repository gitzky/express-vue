<template>
  <el-main class="block">
    <div class="b_white pad15">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/list' }">文章列表</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box20"></div>
    <el-row :gutter="20" class="min_h480">
      <el-col :span="6">
        <div :class="{isFix:isFixed}">
          <div class="mar20_b">
            <el-main class="border b_white pad20">
              <div class="clear">
                <el-image :src="headIcon" class="w60 border radius50 left"></el-image>
                <div class="left pad10_lr">
                  <p class="f16 normal line_h30">小元元</p>
                  <a href="/home" class="c_blue block line_h30">个人主页</a>
                </div>
              </div>
              <div class="box20"></div>
              <el-row>
                <el-col :span="6" class="text-center">
                  <span class="block">原创</span>
                  <em class="block fb">0</em>
                </el-col>
                <el-col :span="6" class="text-center">
                  <span class="block">获赞</span>
                  <em class="block fb">0</em>
                </el-col>
                <el-col :span="6" class="text-center">
                  <span class="block">评论</span>
                  <em class="block fb">0</em>
                </el-col>
                <el-col :span="6" class="text-center">
                  <span class="block">访问</span>
                  <em class="block fb">0</em>
                </el-col>
              </el-row>

              <div class="pad15_lr mar10_tb">
                <span>等级：</span>
                <em>1</em>
              </div>
              <div class="pad15_lr mar10_tb">
                <span>积分：</span>
                <em>1000</em>
              </div>
              <div class="line"></div>
              <div class="clear pad20_t">
                <el-button size="small" type="danger" class="w100 left">关注</el-button>
                <el-button size="small" type="primary" class="w100 right">私信</el-button>
              </div>
            </el-main>
          </div>
          <div class="mar20_b">
            <el-header class="border line_h40 bor_b_no b_white" style="height:40px;">推荐文章</el-header>
            <el-main class="border b_white pad20">
              <ul class>
                <li class="pad10_tb border_b">
                  <a href>推荐阅读一推荐阅读一推荐阅读一</a>
                </li>
                <li class="pad10_tb border_b">
                  <a href>推荐阅读一</a>
                </li>
                <li class="pad10_tb border_b text-ellipsis">
                  <a href>推荐阅读一推荐阅读一推荐</a>
                </li>
                <li class="pad10_tb border_b">
                  <a href>推荐阅读一</a>
                </li>

                <li class="pad10_tb">
                  <a href>推荐推荐阅读一阅读一</a>
                </li>
              </ul>
            </el-main>
          </div>
        </div>
        <div class="box20"></div>
      </el-col>
      <el-col :span="18" class="mar20_b">
        <el-container class="mar20_b min_h480">
          <el-main class="border b_white pad20">
            <h3 class="text-center">文章标题</h3>
            <div class="line_h21">
              但是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁，但是放阿基康宁，但是放阿基康宁
              ，阿打发但是放阿基康宁，但是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁打发但是放阿基
              ，阿打发但是放阿基康宁，但是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁打发但是放阿基
              ，阿打发但是放阿基康宁，但是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁打发但是放阿基
              ，阿打发但是放阿基康宁，但是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁打发但是放阿基
              ，阿打发但是放阿基康宁，但是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁，
            </div>
          </el-main>
        </el-container>
        <el-container>
          <el-main class="border b_white pad20">
            <el-row class="mar20_b">
              <el-col :span="2" class="text-center">
                <el-image :src="headIcon" class="w40 border radius50"></el-image>
              </el-col>
              <el-col :span="22">
                <el-input class="w100_per" type="textarea" placeholder="想对作者说些什么" :rows="4"></el-input>
              </el-col>
            </el-row>
            <template v-for="n in 2">
              <el-row class="mar10_t" :key="n">
                <el-col :span="2" class="text-center">
                  <el-image :src="headIcon" class="w40 border radius50"></el-image>
                </el-col>
                <el-col :span="22">
                  <div class="clear">
                    <span class="fb block line_h40 left">琳水一梦</span>
                    <div class="right line_h40">
                      <el-link class="mar20_r">举报</el-link>
                      <el-link class="mar20_r">回复</el-link>
                      <el-link class="mar20_r">查看回复</el-link>
                      <el-link class>
                        <i class="el-icon-star-on f18"></i>
                        <em>20</em>
                      </el-link>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row class="pad10_b" :key="n">
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="22">
                  <span
                    class="block mar10_b"
                  >是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁打发但是放阿基 ，阿打发但是放阿基康宁，但是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁打发但是放阿基</span>
                  <div class="border_l block pad10">
                    <div class="clear">
                      <el-image :src="headIcon" class="w40 border radius50 left"></el-image>
                      <span class="left line_h40 pad10_lr fb">smileNicky</span>
                      <span class="left line_h40 pad10_lr gray_9">回复</span>
                      <span class="left line_h40 pad10_lr fb">琳水一梦</span>
                      <span class="left line_h40 pad10_lr gray_9">1周前</span>
                    </div>
                    <p
                      class="pad50_l mar0"
                    >是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁打发但是放阿基 ，阿打发但是放阿基康宁，但是放阿基康宁，但是放阿基康宁，阿打发但是放阿基康宁打发但是放阿基</p>
                  </div>
                </el-col>
              </el-row>
            </template>
            <div class="box40"></div>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
import headIcon from "@/assets/images/default.jpg";
export default {
  data() {
    return {
      headIcon: headIcon,
      isFixed: false
    };
  },

  created() {},
  mounted() {
    this.$nextTick(() => {
      this.watchScroll();
    });
  },

  methods: {
    // 滚动条事件
    watchScroll() {
      window.addEventListener(
        "scroll",
        () => {
          // 获取视口高度
          console.log("window.scrollY", window.scrollY);

          if (window.scrollY > 65) {
            this.isFixed = true;
          } else {
            this.isFixed = false;
          }
        },
        true
      );
    }
  }
};
</script>

<style lang="scss">
.border_l {
  border-left: 2px solid #e2e2e2;
}
.isFix {
  width: 275px;
  position: fixed;
  top: 80px;
}
</style>



