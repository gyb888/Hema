<template>
  <div class="hm-container">
    <!-- 图片 -->
    <div class="login-left">
      <img
        src="https://fe-hmzs.itheima.net/assets/login-bg-e4ea539c.svg"
        alt=""
      />
    </div>
    <!-- 登录 -->
    <div class="login-right">
      <div class="flex">
        <p style="font-size: 26px; font-weight: 500; padding: 30px 0">
          智慧园区-登录
        </p>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <template>
              <!-- `checked` 为 true 或 false -->
              <el-checkbox v-model="remember">记住我</el-checkbox>
            </template>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="primary" @click="login()"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
        <p style="color: red">
          仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息（如手机号、身份证号等）！
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";

export default {
  data() {
    return {
      ruleForm: {
        username: "demo",
        password: "zh@hm#23",
      },
      remember: false,
      rules: {
        username: [{ required: true, message: "请输入账号!", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码!", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          console.log("登录");
          await this.$store.dispatch("user/getlogin", this.ruleForm);
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.hm-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  .login-left {
    flex: 1;
    img {
      height: 100%;
    }
  }
  .login-right {
    width: 800px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .flex {
      width: 400px;
    }
  }
}
</style>
