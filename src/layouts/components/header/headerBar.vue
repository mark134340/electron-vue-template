<template>
  <div
    id="header_titlebar"
    class="top-header-menu"
    style="-webkit-app-region: drag"
  >
    <!-- Header -->
    <div class="left-menu">
      <span class="top-icon">
        <svg-icon file-name="vue" size="25px" />
      </span>
    </div>
    <div class="center-searchbar">
      <el-input
        size="mini"
        placeholder="请输入..."
        v-model="searchQuery"
        @keyup.enter.native="toSearch"
        suffix-icon="fa fa-search"
      />
    </div>
    <div class="right-menu">
      <div class="menu-btn">
        <span>
          <profile-drop-down style="-webkit-app-region: no-drag" />
        </span>

        <span style="-webkit-app-region: no-drag">
          <svg-icon file-name="setting" size="25px" />
        </span>
      </div>
      <div class="window-cotrl-btn">
        <span
          class="cotrl-btn"
          @click="appInteractive('minimize')"
          style="-webkit-app-region: no-drag"
        >
          <i class="fa fa-minus"></i>
        </span>
        <span
          class="cotrl-btn"
          @click="appInteractive('maximize')"
          style="-webkit-app-region: no-drag"
        >
          <i class="fa fa-window-maximize"></i>
        </span>
        <span
          class="cotrl-btn"
          @click="appInteractive('closeWindow')"
          style="-webkit-app-region: no-drag"
        >
          <i class="fa fa-times"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import isUrl from "is-url";
import { ipcRenderer } from "electron";

import ProfileDropDown from "../../../components/ProfileDropDown.vue";

export default {
  name: "header-bar",
  components: {
    ProfileDropDown,
  },
  props: {},
  data() {
    return {
      searchQuery: "",
      SearchEngineURL: "https://www.baidu.com/s?wd=",
    };
  },
  computed: {},
  watch: {},
  methods: {
    appInteractive(oder) {
      ipcRenderer.send(oder);
      console.log(oder);
    },

    toSearch() {
      if (this.searchQuery !== "" && !isUrl(this.searchQuery)) {
        this.$router.push({
          name: "WebView",
          params: {
            catalog: "a",
            URL: this.SearchEngineURL + this.searchQuery,
          },
        });
      }
      if (this.searchQuery !== "" && isUrl(this.searchQuery)) {
        this.$router.push({
          name: "WebView",
          params: { catalog: "a", URL: this.searchQuery },
        });
      }
      console.log(this.searchQuery);
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.top-header-menu {
  display: inline-flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
  background-color: #313542;
  user-select: none;
  z-index: 100;
  -webkit-app-region: drag;
  .left-menu {
    flex: none;
    color: #fff;
  }
  .center-searchbar {
    // flex: auto;
    width: 50%;

    -webkit-app-region: no-drag;
  }
  .right-menu {
    flex: none;
    height: 100%;
    display: inline-flex;

    justify-content: flex-end;
    align-items: center;
    min-width: 200px;
    color: #fff;

    .menu-btn {
      flex: auto;
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 5px;
      min-width: 100px;
    }
    .window-cotrl-btn {
      flex: none;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      min-width: 100px;
      height: 100%;

      .cotrl-btn {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 50px;
        &:hover {
          background-color: #363a47;
        }
      }
    }
  }
  .top-icon {
    margin: 0px 10px;
  }
}
</style>
