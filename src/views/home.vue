<template>
  <el-main class>
    <el-row :gutter="30" class="min_h480">
      <el-col :span="18" class="mar20_b pad0">
        <el-container class="mar20_b">
          <el-main class="border b_white pad20">
            <el-image
              :src="headIcon"
              class="w100 radius50 left border"
            ></el-image>
            <div class="left pad20_tb">
              <span class="block pad20_lr line_h40">
                <em
                  class="inlineBlock w20 height20 b_red vertical_m text-center line_h20 radius3 white"
                >
                  1
                </em>
                <em class="vertical_m f24">海棠朵朵海棠朵朵</em>
              </span>
              <span class="f16 block pad20_lr gray_9">积分：8888</span>
            </div>
          </el-main>
        </el-container>

        <el-container class="mar20_b">
          <el-main class="border b_white pad20 min_h360">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="发布的文章" name="first">
                <div
                  class="mar20_b border_b"
                  v-for="(item, n) in tableData"
                  :key="n"
                  shadow="nevel"
                >
                  <a
                    href="javascript:;"
                    @click="$router.push('/list/details/' + item.id)"
                  >
                    <p class="normal ellipsis f18 fb">我是文综昂内容</p>
                    <p class="normal ellipsis-2">
                      《Python基础语法全体系》系列博文第六篇，本篇博文将讲解Python的文件IO操作，包括文件的打开、读取和写入。本文整理自疯狂python编程。文章目录使用pathlib操作目录使用os.path操作目录使用fnmatch处理文件名匹配打开文件文件打开模式Python提供了非常丰富的I/O支持，它既提供了pathlib和os.path来操作各种路径，也提供了全局的open()函数来打开...
                    </p>
                    <p class="clear normal mar10_tb">
                      <span class="left gray_9">
                        <i class="el-icon-view"></i>
                        <em>阅读：88</em>
                      </span>
                      <span class="gray_9 right">
                        <i class="el-icon-time"></i>
                        <em>日期：2019-9-9</em>
                      </span>
                    </p>
                  </a>
                </div>
                <div class="text-right">
                  <el-pagination
                    class="right"
                    background
                    layout="prev, pager, next"
                    :total="100"
                    @current-change="currentChange"
                  ></el-pagination>
                </div>
              </el-tab-pane>
              <el-tab-pane label="收藏的文章" name="second">
                <div
                  class="mar20_b border_b"
                  v-for="(item, n) in tableData"
                  :key="n"
                  shadow="nevel"
                >
                  <a
                    href="javascript:;"
                    @click="$router.push('/list/details/' + item.id)"
                  >
                    <p class="normal ellipsis f18 fb">我是文综昂内容</p>
                    <p class="normal ellipsis-2">
                      精读Javascript系列（三） 执行上下文、 执行栈、初识事件循环
                    </p>
                    <p class="clear normal mar10_tb">
                      <span class="left gray_9">
                        <i class="el-icon-view"></i>
                        <em>阅读：88</em>
                      </span>
                      <span class="gray_9 right">
                        <i class="el-icon-time"></i>
                        <em>日期：2019-9-9</em>
                      </span>
                    </p>
                  </a>
                </div>
                <div class="text-right">
                  <el-pagination
                    class="right"
                    background
                    layout="prev, pager, next"
                    :total="100"
                    @current-change="currentChange"
                  ></el-pagination>
                </div>
              </el-tab-pane>
              <el-tab-pane label="编辑文章" name="three">
                <div class="mar20_b clear form_item">
                  <label>文章标题：</label>
                  <el-input
                    v-model="postForm.title"
                    size="small"
                    class="w745"
                    placeholder="请输入标题"
                  ></el-input>
                </div>
                <div class="mar20_b clear form_item">
                  <label>文章类别：</label>
                  <el-select size="small" class="w745" v-model="postForm.type">
                    <el-option
                      :key="index"
                      :value="item.code"
                      v-for="(item, index) in typeOptions"
                    >
                      {{ item.label }}
                    </el-option>
                  </el-select>
                </div>

                <div class="mar20_b clear form_item">
                  <label>文章配图：</label>
                  <el-upload
                    class="avatar-uploader"
                    action="https://kfw.t.nxin.com/api/basic/system/file/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
                <div class="mar20_b clear form_item">
                  <label>文章内容：</label>
                  <editor
                    class="editor_custorm"
                    @onEditorChange="onEditorChange($event)"
                  />
                </div>
                <div class="mar20_b clear form_item">
                  <label></label>
                  <el-button type="primary" size="small" class="w120">
                    发布随写
                  </el-button>
                  <el-button
                    type="primary"
                    size="small"
                    class="w120"
                    @click="onSubmit"
                  >
                    发布文章
                  </el-button>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-main>
        </el-container>
      </el-col>

      <el-col :span="6" class="pad0">
        <div class="isRightFixed">
          <div class="mar20_b">
            <el-main class="border b_white pad20">
              <el-row>
                <el-col :span="11" class="text-center">
                  <em class="block fb">0</em>
                  <span class="block">粉丝</span>
                </el-col>
                <el-col :span="2">
                  <div class="shuxian"></div>
                </el-col>
                <el-col :span="11" class="text-center">
                  <em class="block fb">0</em>
                  <span class="block">关注</span>
                </el-col>
              </el-row>
            </el-main>
          </div>
          <div>
            <el-header
              class="border line_h40 bor_b_no b_white"
              style="height: 40px;"
            >
              最近访客
            </el-header>
            <el-main class="border b_white pad20">
              <ul>
                <li class="clear line_h40 pad10_tb border_b cursor">
                  <el-image
                    :src="headIcon"
                    class="w40 radius50 left border"
                  ></el-image>
                  <span class="left block gray_6 pad10_lr w100 ellipsis">
                    海棠朵朵海棠朵朵
                  </span>
                  <el-button
                    class="right mar5_tb w80"
                    size="mini"
                    icon="el-icon-plus"
                  >
                    关注
                  </el-button>
                </li>
                <li class="clear line_h40 pad10_tb border_b cursor">
                  <el-image
                    :src="headIcon"
                    class="w40 radius50 left border"
                  ></el-image>
                  <span class="left block gray_6 pad10_lr w100 ellipsis">
                    张晓三啊
                  </span>
                  <el-button
                    class="right mar5_tb w80"
                    type="primary"
                    size="mini"
                  >
                    已关注
                  </el-button>
                </li>
                <li class="clear line_h40 pad10_tb border_b cursor">
                  <el-image
                    :src="headIcon"
                    class="w40 radius50 left border"
                  ></el-image>
                  <span class="left block gray_6 pad10_lr w100 ellipsis">
                    想的名字
                  </span>
                  <el-button
                    class="right mar5_tb w80"
                    size="mini"
                    icon="el-icon-plus"
                  >
                    关注
                  </el-button>
                </li>
                <li class="clear line_h40 pad10_tb border_b cursor">
                  <el-image
                    :src="headIcon"
                    class="w40 radius50 left border"
                  ></el-image>
                  <span class="left block gray_6 pad10_lr w100 ellipsis">
                    小花
                  </span>
                  <el-button
                    class="right mar5_tb w80"
                    size="mini"
                    icon="el-icon-plus"
                  >
                    关注
                  </el-button>
                </li>
              </ul>
            </el-main>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
import headIcon from '@/assets/images/default.jpg'
import editor from '@/components/editor'
export default {
  components: {
    editor,
  },
  data() {
    return {
      headIcon: headIcon,
      activeName: 'first',
      tableData: [1, 2, 3, 3, 54],
      pagination: {
        pageNum: 1,
        total: 0,
      },

      postForm: {
        type: '',
        title: '',
        content: '',
        avator: '1.jpg',
      },

      imageUrl: '',

      typeOptions: [
        { code: 'HTML5', label: 'HTML5' },
        { code: 'CSS3', label: 'CSS3' },
        { code: 'JAVASCRIPT', label: 'JAVASCRIPT' },
        { code: 'VUE', label: 'VUE' },
        { code: 'ES6', label: 'ES6' },
      ],
    }
  },

  created() {},

  methods: {
    currentChange(val) {
      this.pagination.pageNum = val
    },
    handleClick() {},
    onEditorChange($event) {
      console.log('$event', $event)
      this.postForm.content = $event
    },
    onSubmit() {
      this.$store
        .dispatch('addPost', {
          name: 'XYY-01',
          title: '文章标题',
          content: '文章标题',
          md: 1,
          moment: new Date().getTime(),
          coomments: 2,
          pv: 100,
          avator: '1.jpg',
        })
        .then(() => {})
    },

    handleAvatarSuccess(res, file) {
      console.log(1111)
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      console.log(2222)

      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isLt2M
    },
  },
}
</script>

<style lang="scss" scoped>
.pad0 {
  padding: 0 !important;
}
.w745 {
  width: 745px;
}
.border_l {
  border-left: 2px solid #e2e2e2;
}
.shuxian {
  width: 2px;
  height: 30px;
  background-color: #e8e8e8;
  margin: 6px auto;
}
.form_item {
  display: flex;
  justify-content: flex-start;
  label {
    width: 80px;
  }
  &:last-child {
    margin-top: 70px;
  }
}
.isRightFixed {
  width: 280px;
  position: fixed;
  margin-left: 20px;
}
.editor_custorm {
  width: 750px;
}
.avatar-uploader {
  width: 120px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  border: 1px solid #e8e8e8;
}
.avatar {
  width: 120px;
  height: 120px;
  border: 1px solid #e8e8e8;
  display: block;
}
</style>
