<template>
  <el-main class="pad0 mar20_t">
    <el-row :gutter="0" class="min_h480">
      <el-col :span="4" class="pad0">
        <ul class="z_mine">
          <li :class="{ active: index == 0 }" @click="index = 0">个人资料</li>
          <li :class="{ active: index == 1 }" @click="index = 1">我的收藏</li>
          <li :class="{ active: index == 2 }" @click="index = 2">我关注的人</li>
          <li :class="{ active: index == 3 }" @click="index = 3">我的粉丝</li>
          <li :class="{ active: index == 4 }" @click="index = 4">我的积分</li>
          <li :class="{ active: index == 5 }" @click="index = 5">我的留言</li>
        </ul>
      </el-col>
      <el-col :span="20" class="mar20_b b_white pad0 min_h480 border">
        <el-container class="pad20">
          <el-main class="clear">
            <div class="left">
              <el-image
                class="w100 radius50 border block mar10_b"
                :src="headIcon"
              ></el-image>
              <el-button
                type="text"
                class="text-center w100"
                @click="dialogVisible = true"
              >
                修改头像
              </el-button>
            </div>
            <div class="left pad20_tb">
              <div class="pad20_lr line_h40">
                <em
                  class="inlineBlock w20 height20 b_red vertical_m text-center line_h20 radius3 white"
                >
                  1
                </em>
                <em class="vertical_m f24">海棠朵朵海棠朵朵</em>
              </div>
              <div class="f16 block pad20_lr gray_9">
                <em>积分：</em>
                <em class="mar20_lr">8888</em>
              </div>
              <div class="box20"></div>
              <div class="border_t mar20_lr">
                <el-form
                  class="w720 pad10_tb z-main"
                  label-width="70px"
                  label-position="left"
                  size="small"
                >
                  <el-form-item label="昵称：">
                    <el-input
                      v-if="edit"
                      class="w450"
                      placeholder="请输入"
                    ></el-input>
                    <span v-else class="f16 gray_9">小元</span>
                    <el-button
                      class="right"
                      type="text"
                      @click="edit = true"
                      size="medium"
                    >
                      修改资料
                    </el-button>
                  </el-form-item>
                  <el-form-item label="性别：">
                    <el-input
                      class="w450"
                      placeholder="请输入"
                      v-if="edit"
                    ></el-input>
                    <span class="f16 gray_9" v-else>男</span>
                  </el-form-item>
                  <el-form-item label="手机号：">
                    <el-input
                      class="w450"
                      placeholder="请输入"
                      v-if="edit"
                    ></el-input>
                    <span class="f16 gray_9" v-else>18888888888</span>
                  </el-form-item>
                  <el-form-item label="邮箱：">
                    <el-input
                      class="w450"
                      placeholder="请输入"
                      v-if="edit"
                    ></el-input>
                    <span class="f16 gray_9" v-else>18888888888@qq.com</span>
                  </el-form-item>
                  <el-form-item label="简介：">
                    <el-input
                      type="textarea"
                      class="w450"
                      placeholder="请输入"
                      rows="5"
                      v-if="edit"
                    ></el-input>
                    <span class="f16 gray_9" v-else>无</span>
                  </el-form-item>
                  <el-form-item v-if="edit" class="mar20_t">
                    <el-button class="w80" @click="edit = false">
                      取消
                    </el-button>
                    <el-button class="w80" @click="edit = false" type="primary">
                      确认
                    </el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </el-main>
        </el-container>
      </el-col>
    </el-row>

    <el-dialog
      title="头像上传"
      width="600px"
      top="30vh"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip gray_9" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <span slot="footer" class="text-center block">
        <el-button @click="dialogVisible = false" size="small" class="w100">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
          size="small"
          class="w100"
        >
          确 定
        </el-button>
      </span>
    </el-dialog>
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
      index: 0,
      headIcon: headIcon,
      edit: false,
      dialogVisible: false,
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
    },
    handleClose() {},
  },
}
</script>

<style lang="scss">
.pad0 {
  padding: 0 !important;
}
ul.z_mine {
  width: 100%;
  min-height: 480px;
  background: white;
  li {
    width: 100%;
    height: 42px;
    line-height: 42px;
    background: #fff;
    color: #4d4d4d;
    padding: 0 15px;
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
.el-form.z-main {
  .el-form-item {
    margin-bottom: 12px;
  }
}
.el-upload {
  .el-upload-dragger {
    width: 562px !important;
  }
}
</style>
