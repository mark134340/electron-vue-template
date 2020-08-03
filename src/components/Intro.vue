<template>
  <div class="intro">
    <h1>{{ msg }}</h1>
      <br/>
      <br/>
      
    <span>
      gethub地址：
      
      <router-link :to="{ name: 'WebView',params: {'catalog': 'b', 'URL': 'https://github.com/mark134340/gitspace' }}">
        electron-vue-getstart
      </router-link>
    </span>
    <h3>已安装插件：</h3>
      <br/>
    <ul>
      <router-link :to="{ name: 'WebView',params: {'catalog': 'b', 'URL': 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel' }}">
        babel
      </router-link>
      <router-link :to="{ name: 'WebView',params: {'catalog': 'b', 'URL': 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router' }}">
        router
      </router-link>
      <router-link :to="{ name: 'WebView',params: {'catalog': 'b', 'URL': 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex' }}">
        vuex
      </router-link>
      <router-link :to="{ name: 'WebView',params: {'catalog': 'b', 'URL': 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint' }}">
        eslint
      </router-link>
      
    </ul>
    <h3>已安装UI框架：</h3>
      <br/>
    <ul>
      <router-link :to="{ name: 'WebView',params: {'catalog': 'c', 'URL': 'https://element.eleme.cn/#/zh-CN/component/installation' }}">
        Element-UI
      </router-link>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
