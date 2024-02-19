<template>
  <div class="navbar">
    <div class="right-menu">
      <el-button
        style="border: 1px solid #7094ff; color: #7094ff; margin-right: 20px"
        >可视化大屏</el-button
      >
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <h3 style="color: #000">黑马管理员</h3>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> 修改密码 </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import { logout } from "@/api/user";

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {

    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  background: #f4f6f8;
  .right-menu {
    float: right;
    margin-top: 5px;
    margin-right: 30px;
  }
}
</style>
