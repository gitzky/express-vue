<template>
  <div>
    <div class="box20"></div>
    <h2>form表单及验证</h2>
    <el-form
      :model="form"
      :rules="rules"
      ref="form"
      class="b_white pad30"
      v-loading="loading"
      element-loading-text="表单提交中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      label-width="100px"
    >
      <el-form-item prop="type" label="表单类型" :rules="{required:true,message:'请选择表单类型'}">
        <el-select placeholder="请选择表单类型" v-model="form.type" clearable>
          <el-option v-for="n in 3" :key="n" :label="'表单类型'+n" :value="n" />
        </el-select>
      </el-form-item>
      <el-form-item prop="name" label="姓名" :rules="{required:true,min:2,message:'请输入姓名，2-10位'}">
        <el-input class="w600" placeholder="请输入姓名" clearable maxlength="10" v-model="form.name" />
      </el-form-item>
      <el-form-item prop="phone" label="手机号" :rules="{required:true,min:11,message:'请输入11位手机号'}">
        <el-input
          class="w600"
          placeholder="请输入手机号"
          clearable
          maxlength="11"
          v-model="form.phone"
          onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"
        />
      </el-form-item>
      <el-form-item prop="mail" label="邮箱">
        <el-input class="w600" placeholder="请输入邮箱" clearable maxlength="40" v-model="form.mail" />
      </el-form-item>
      <el-form-item
        prop="idCard"
        label="身份证号"
        :rules="{required:true,min:18,message:'请输入18位身份证号码'}"
      >
        <el-input
          class="w600"
          placeholder="请输入18位身份证号码"
          clearable
          maxlength="18"
          v-model="form.idCard"
          onkeyup="this.value = this.value.replace(/[^a-z0-9]+/gi, '');"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('form')">重置</el-button>
        <el-button @click="submitForm('form')" type="primary">提交表单</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let validMail = (rule, value, callback) => {
      var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        callback(new Error("请输入邮箱"));
      } else if (!reg.test(value)) {
        callback(new Error("邮箱格式错误，请重新输入"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        mail: [
          { type: "email", required: true, message: "请输入邮箱" },
          { validator: validMail, trigger: "change" }
        ]
      },
      loading: false,
      form: {
        type: null,
        name: null,
        phone: null,
        mail: null,
        idCard: null
      }
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.$message.success("提交成功");
          }, 3000);
        } else {
          this.$message.warning("提交错误");
          return false;
        }
      });
    }
  }
};
</script>