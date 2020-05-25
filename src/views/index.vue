<template>
  <div class="mar20_t">
    <el-row :gutter="30">
      <el-col :span="18" class="mar20_b">
        <swiper />
        <div class="box20"></div>
        <el-card class="z_articles mar20_b">
          <a href="javascript:;">
            <strong class="f18 fb mar10_b">博主置顶</strong>
            <p class="normal title">嫁人就嫁程序员</p>
            <p
              class="normal gray_9 cont"
            >个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中。。。</p>
          </a>
        </el-card>
        <el-container>
          <el-header class="border line_h40 bor_b_no b_white" style="height:40px;">最新发布</el-header>
          <el-main class="border b_white pad0">
            <el-card class="z_articles mar20_b" v-for="(item,n) in tableData" :key="n">
              <a href="javascript:;" @click="$router.push('/list/details/'+item.id)">
                <el-row class="pad10_lr" :gutter="30">
                  <el-col :span="20">
                    <p class="normal title1">
                      <el-tag size="small vertical_m">HTML</el-tag>
                      <span class="vertical_m">{{item.title}}</span>
                    </p>

                    <p class="normal gray_9 cont height42 ellipsis-2">{{item.content}}</p>
                    <p class="normal">
                      <span class="mar30_r gray_9">
                        <i class="el-icon-user-solid"></i>
                        作者：{{item.author}}
                      </span>
                      <span class="mar30_r gray_9">
                        <i class="el-icon-view"></i>
                        阅读量：（{{item.readNum}}）
                      </span>
                      <span class="mar30_r gray_9">
                        <i class="el-icon-chat-dot-square"></i>
                        评论：100
                      </span>
                      <span class="gray_9">
                        <i class="el-icon-time"></i>
                        日期：{{item.date}}
                      </span>
                    </p>
                  </el-col>
                  <el-col :span="4">
                    <div class="img">
                      <el-image :src="require('@/assets/images/default.jpg')" fit="scale-down"></el-image>
                    </div>
                  </el-col>
                </el-row>
              </a>
            </el-card>
            <el-pagination
              class="right"
              background
              layout="prev, pager, next"
              :total="100"
              @current-change="currentChange"
            ></el-pagination>
          </el-main>
        </el-container>
      </el-col>

      <el-col :span="6">
        <el-main class="border b_white pad20 z_notice mar20_b">
          <strong>站点公告</strong>
          <a class href="article_detail.html">
            <h3 class="title">{{noticeData.title}}</h3>
            <p class="f14 c_gray line_h20" v-html="noticeData.content"></p>
          </a>
        </el-main>

        <div class="z_tags mar20_b">
          <el-header class="border line_h40 bor_b_no b_white" style="height:40px;">热门标签</el-header>
          <el-main class="border b_white pad20">
            <el-tag
              class="mar10_r mar10_b"
              v-for="item in tagItems"
              effect="dark"
              size="small"
              :key="item.label"
              :type="item.type"
            >{{ item.label }}</el-tag>
            <span v-if="!tagItems.length">暂无标签</span>
          </el-main>
        </div>

        <div class="mar20_b">
          <el-header class="border line_h40 bor_b_no b_white" style="height:40px;">热门文章</el-header>
          <el-main class="z_hotArtical border b_white pad20">
            <el-carousel
              height="240px"
              direction="vertical"
              :autoplay="true"
              arrow="always"
              indicator-position="none"
            >
              <el-carousel-item v-for="n in 5" :key="n">
                <ul>
                  <li
                    :key="item.id"
                    v-for="item in tableData.slice(n-1,n+4)"
                    class="border_b bor_b_d8"
                    @click="goDetail(item.id)"
                  >
                    <a class="height45 line_h45 block" href="javascript:;">{{ item.title }}</a>
                  </li>
                </ul>
              </el-carousel-item>
            </el-carousel>
          </el-main>
        </div>

        <div class="mar20_b">
          <el-header class="border line_h40 bor_b_no b_white" style="height:40px;">关注微信号</el-header>
          <el-main class="z_hotArtical border b_white pad30">
            <img src="@/assets/images/qrcode.png" class="w100_per" />
          </el-main>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import swiper from "@/components/swiper";
export default {
  components: {
    swiper
  },

  data() {
    return {
      tableData: [
        {
          id: 1,
          title: "",
          content: "",
          imgUrl: ""
        }
      ],
      pagination: {
        pageNum: 1,
        total: 0
      },
      noticeData: {},
      tagItems: []
    };
  },

  created() {
    this.loadData();
    this.loadNoticeData();
    this.loadTagList();
  },

  methods: {
    currentChange(val) {
      this.pagination.pageNum = val;
    },
    loadData() {
      this.$store.dispatch("selUserList").then(res => {
        console.log("res", res);
        if (res.code === "0") {
        }
      });

      this.$store.dispatch("selPostList").then(res => {
        console.log("res", res);
        if (res.code === "0") {
          let list = res.data.list;

          this.tableData = list;
        }
      });
    },

    loadNoticeData() {
      this.$store.dispatch("selPostList").then(res => {
        console.log(res);
        if (res.code === "0") {
          this.noticeData = res.data;
        }
      });
    },

    loadTagList() {
      this.$store.dispatch("selPostList").then(res => {
        console.log(res);
        if (res.code === "0") {
          this.tagItems = res.data.list;
        }
      });
    }
  }
};
</script>





