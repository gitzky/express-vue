<template>
  <div class="mar20_t">
    <div class="b_white pad15">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/list' }">文章列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box20"></div>
    <el-row :gutter="30">
      <el-col :span="18" class="mar20_b">
        <el-container>
          <el-main class="border b_white pad0">
            <el-card class="z_articles_list mar20_b" v-for="(item,n) in tableData" :key="n">
              <a href="javascript:;" @click="$router.push('/list/details/'+item.id)">
                <el-row class="pad10_lr" :gutter="30">
                  <el-col :span="4">
                    <div class="img">
                      <el-image :src="item.imgUrl" fit="scale-down"></el-image>
                    </div>
                  </el-col>
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
        <div class="mar20_b">
          <el-header class="border line_h40 bor_b_no b_white" style="height:40px;">最新发布</el-header>
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
                    class="border_b"
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
          <el-header class="border line_h40 bor_b_no b_white" style="height:40px;">友情链接</el-header>
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
      this.$store.dispatch("index/selArticalList").then(res => {
        console.log(res);
        if (res.code === "0") {
          let list = res.data.list;

          this.tableData = list;
        }
      });
    },

    loadNoticeData() {
      this.$store.dispatch("index/selNoticeData").then(res => {
        console.log(res);
        if (res.code === "0") {
          this.noticeData = res.data;
        }
      });
    },

    loadTagList() {
      this.$store.dispatch("index/selTagList").then(res => {
        console.log(res);
        if (res.code === "0") {
          this.tagItems = res.data.list;
        }
      });
    }
  }
};
</script>





