<template>
  <div class="home">
    <Intro msg="快速开始你的桌面应用开发"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'

export default {
  name: 'Home',
  components: {
    Intro
  }
}
</script>
<style lang="scss" >
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>