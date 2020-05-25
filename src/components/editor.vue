<template>
  <quill-editor
    v-model="editorContent"
    :style="{width:width}"
    :options="setOptions"
    class="quill-editor"
    ref="quill-editor"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
  ></quill-editor>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  props: { width: String },
  components: {
    quillEditor
  },
  data() {
    return {
      editorContent: "",
      setOptions: {
        modules: {
          toolbar: [
            [
              "bold", //加粗
              "italic", // 斜体
              "underline", // 下划线
              "strike", // 删除线
              "blockquote", // 引用-
              "code-block",
              "link", // 链接
              { align: [] }, // 对齐方式
              { color: [] }, // 颜色
              { background: [] }, // 背景颜色

              { header: 1 }, //header - 值字体大小
              { header: 2 },
              { size: ["small", false, "large", "huge"] }, //内容大小 -size

              { list: "ordered" }, // 列表 有序  无序
              { list: "bullet" },

              { script: "sub" }, //值sub，super
              { script: "super" },

              { indent: "-1" }, // 缩进
              { indent: "+1" },

              { direction: "rtl" }, // 输入位置 头尾

              "image", // 图片
              "video" // 视频
            ]
          ]
        },
        placeholder: "请在这里输入"
      }
    };
  },
  methods: {
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    // 内容改变事件
    onEditorChange($event) {
      let html = $event.html;
      this.$emit("onEditorChange", html);
    }
  }
};
</script>

<style lang="scss">
.quill-editor {
  min-height: 420px;
  .ql-container {
    min-height: 360px;
  }
}
</style>
