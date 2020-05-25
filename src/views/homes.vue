<template>
  <div class="layout">
    <h3>vue常用控件合集</h3>

    <div class="border pad30 mar30_b b_white">
      <span class="line_h30">
        <em class="c_red">1、图表类控件：</em>import 引用,components 注册
      </span>
      <textarea class="block b_15 c_green w670 h120 vertical_m over-hide" cols="false">
        <echarts 
          id="myChart" class="myChart"   // id 和 类名
          height="400px" width="600px"  // 宽高
          @handleChart="handleChart"   // 实例方法
        />
      </textarea>
      <div class="box10"></div>
      <el-button type="primary" @click="goPage('/echarts')">echarts控件</el-button>
    </div>

    <div class="border pad30 mar30_b b_white">
      <span class="line_h30">
        <em class="c_red">2、富文本编辑器类控件：</em> import 引用,components 注册
      </span>
      <textarea class="block b_15 c_green w670 h180 vertical_m over-hide" cols="false">
        <quill-editor
          v-model="editorContent"
          :options="setOptions"
          class="quill-editor"
          ref="quill-editor"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        ></quill-editor>
      </textarea>
      <div class="box10"></div>
      <el-button type="primary" @click="goPage('/editor')">editor控件</el-button>
    </div>

    <div class="border pad30 mar30_b b_white">
      <span class="line_h30">
        <em class="c_red">3、form表单类控件：</em> 利用element 集合常用的表单项，及校验功能
      </span>
      <div class="box10"></div>
      <el-button type="primary" @click="goPage('/form')">form表单控件</el-button>
    </div>

    <div class="border pad30 mar30_b b_white">
      <span class="line_h30">
        <em class="c_red">4、dialog控件：</em> 利用element 集合table、分页、搜索 功能
      </span>
      <div class="box10"></div>
      <el-button type="primary" @click="goPage('/dialog')">dialog控件</el-button>
    </div>

    <div class="border pad30 mar30_b b_white">
      <span class="line_h30">
        <em class="c_red">5、images控件：</em> 支持放大 旋转灯 功能
      </span>
      <div class="box10"></div>
      <el-button type="primary" @click="goPage('/images')">5、images控件</el-button>
    </div>

    <div class="border pad30 mar30_b b_white">
      <span class="line_h30">
        <em class="c_red">6、map控件：</em> 支持放大 旋转灯 功能
      </span>
      <div class="box10"></div>
      <el-button type="primary" @click="goPage('/map')">6、map控件</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {},
  methods: {
    goPage(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style lang="scss">
.el-backtop {
  border-radius: 0;
  background-color: #e75137 !important;
  color: white;
}
</style>