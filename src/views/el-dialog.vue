<template>
  <div>
    <div class="box20"></div>
    <el-button @click="dialogVisible=true">显示dialog</el-button>
    <MyDialog :dialogVisible="dialogVisible" @handleClose="dialogVisible=false" />
  </div>
</template>
<script>
import MyDialog from "@/components/dialog";
export default {
  components: {
    MyDialog
  },
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>