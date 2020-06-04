<template>
  <div class="_login ">
    <div class="sub-main-w3 _register">
      <form>
        <h2>
          <span class="cursor " @click="$router.push('/login')">登 录 </span>/
          <span class="cursor c_red" @click="$router.push('/register')"
            >注 册</span
          >
        </h2>
        <div class="form-style-agile">
          <label>
            <i class="el-icon-user-solid"></i>
            用户名
          </label>

          <el-popover
            popper-class="validate"
            placement="bottom-end"
            width="320"
            trigger="manual"
            v-model="validateUserName.visible"
          >
            <span class="c_red40">
              <i class="el-icon-warning-outline "></i>
              {{ validateUserName.message }}
            </span>

            <input
              placeholder="请输入用户名"
              slot="reference"
              type="text"
              maxlength="20"
              v-model="form.userName"
              @change="handleUserName"
            />
          </el-popover>
        </div>
        <div class="form-style-agile">
          <label>
            <i class="el-icon-unlock"></i>
            密 码
          </label>
          <el-popover
            popper-class="validate"
            placement="bottom-end"
            width="320"
            trigger="manual"
            v-model="validatePassword.visible"
          >
            <span class="c_red40">
              <i class="el-icon-warning-outline "></i>
              {{ validatePassword.message }}
            </span>
            <div slot="reference" class="pass">
              <input
                placeholder="请输入密码"
                maxlength="16"
                v-model="form.password"
                :type="viewPass ? 'text' : 'password'"
                @change="handlePassword"
              />
              <em
                v-if="form.password"
                class="el-icon-view f20 cursor"
                @click="viewPass = !viewPass"
              ></em>
            </div>
          </el-popover>
        </div>
        <div class="form-style-agile">
          <label>
            <i class="el-icon-unlock"></i>
            重复密码
          </label>
          <el-popover
            popper-class="validate"
            placement="bottom-end"
            width="320"
            trigger="manual"
            v-model="validateRepeatPassword.visible"
          >
            <span class="c_red40">
              <i class="el-icon-warning-outline "></i>
              {{ validateRepeatPassword.message }}
            </span>
            <div slot="reference" class="pass">
              <input
                placeholder="请输入密码"
                maxlength="16"
                v-model="form.repeatPassword"
                :type="viewRepeatPass ? 'text' : 'password'"
                @change="handleRepeatPassword"
              />
              <em
                v-if="form.repeatPassword"
                class="el-icon-view f20 cursor"
                @click="viewRepeatPass = !viewRepeatPass"
              ></em>
            </div>
          </el-popover>
        </div>
        <div class="form-style-agile">
          <label>
            <i class="el-icon-key"></i>
            验 证
          </label>

          <verify
            :successFun="onMpanelSuccess"
            :errorFun="onMpanelError"
          ></verify>
        </div>

        <!-- checkbox -->
        <div class="wthree-text">
          <ul>
            <li>
              <label class="anim">
                <input type="checkbox" class="checkbox" required="" checked />
                <span class="mar10_l">记住密码</span>
              </label>
            </li>
            <li>
              <a href="#">忘记密码?</a>
            </li>
          </ul>
        </div>
        <!-- //checkbox -->
        <input
          type="button"
          value="立即注册"
          :class="{
            active:
              verifyPass &&
              !validateUserName.visible &&
              !validatePassword.visible &&
              !validateRepeatPassword.visible,
          }"
          @click="submitRegisterForm"
        />
      </form>
    </div>
  </div>
</template>

<script>
import verify from "./verify";

export default {
  components: {
    verify,
  },
  data() {
    return {
      viewPass: false,
      viewRepeatPass: false,
      form: {
        userName: "",
        password: "",
        repeatPassword: "",
      },
      verifyPass: false,
      validateUserName: { visible: false, message: "" },
      validatePassword: { visible: false, message: "" },
      validateRepeatPassword: { visible: false, message: "" },
    };
  },

  methods: {
    onMpanelError() {
      this.verifyPass = false;
    },
    onMpanelSuccess() {
      this.verifyPass = true;
      this.handleUserName();
      this.handlePassword();
      this.handleRepeatPassword();
    },

    handleUserName() {
      if (!this.form.userName) {
        this.validateUserName.visible = true;
        this.validateUserName.message = "请输入用户名";
      } else {
        let re = /^[a-zA-Z0-9_]{2,20}$/;
        if (!re.test(this.form.userName)) {
          this.validateUserName.visible = true;
          this.validateUserName.message =
            "用户名2-20位，支持字母、数字和下划线";
        } else {
          this.validateUserName.visible = false;
          this.validateUserName.message = "";
        }
      }
    },
    handlePassword() {
      if (!this.form.password) {
        this.validatePassword.visible = true;
        this.validatePassword.message = "请输入密码";
      } else {
        let re = /^[a-zA-Z0-9\,\.\@\#\$\%\^\&\*\(\)\_\-\+\=]{8,16}$/;
        if (!re.test(this.form.password)) {
          this.validatePassword.visible = true;
          this.validatePassword.message =
            "密码8-16位，支持字母、数字和特殊字符";
        } else {
          this.validatePassword.visible = false;
          this.validatePassword.message = "";
        }
      }
    },
    handleRepeatPassword() {
      if (!this.form.repeatPassword) {
        this.validateRepeatPassword.visible = true;
        this.validateRepeatPassword.message = "请输入密码";
      } else {
        if (this.form.password !== this.form.repeatPassword) {
          this.validateRepeatPassword.visible = true;
          this.validateRepeatPassword.message = "密码输入不一致";
        } else {
          this.validateRepeatPassword.visible = false;
          this.validateRepeatPassword.message = "";
        }
      }
    },

    submitRegisterForm() {
      this.handleUserName();
      this.handlePassword();
      this.handleRepeatPassword();
      let {
        validateUserName,
        validatePassword,
        validateRepeatPassword,
        verifyPass,
      } = this;
      if (
        validateUserName.visible ||
        validatePassword.visible ||
        validateRepeatPassword.visible ||
        !verifyPass
      ) {
        return;
      }
      this.$store
        .dispatch("register", {
          name: this.form.userName,
          pass: this.form.password,
          repeatpass: this.form.repeatPassword,
        })
        .then((res) => {
          if (res.code === "0") {
            this.$router.push("/login");
          }
        });
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
