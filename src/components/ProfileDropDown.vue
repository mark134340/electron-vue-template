<template>
  <div class="demo-type">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" :src="activeUserInfo.photoURL" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item disabled>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  methods: {
    errorHandler() {
      return true;
    },
  },
};
</script>
