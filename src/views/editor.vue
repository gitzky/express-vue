<template>
  <div class="clear mar20_t">
    <h2>quill-vue-editor</h2>
    <div class="b_white clear">
      <!-- editor-ui -->
      <div class="pull-left">
        <editor width="580px" @onEditorChange="onEditorChange($event)" />
      </div>
      <div class="pull-left mar10_l w600 border pad10 b_white" v-html="domViews"></div>
    </div>
  </div>
</template>
<script>
import editor from "@/components/editor";
export default {
  components: {
    editor
  },

  data() {
    return {
      domViews: "获取文本框的内容"
    };
  },

  mounted() {},

  methods: {
    //  editor
    onEditorChange($event) {
      this.domViews = $event;
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>
