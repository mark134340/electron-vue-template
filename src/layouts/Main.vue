<!-- =========================================================================================
    File Name: Main.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
  Item Name: pgman
    Author: mark
  Author URL: http://www.ptynm.com
========================================================================================== -->


<template >
  <div class="layout--main"  >
    <header-bar/>
    <div class="body-content">

      <tab-content/>

    </div>
    
  </div>
</template>


<script>

import headerBar            from '@/layouts/components/header/headerBar.vue'
import tabContent            from '@/layouts/components/tabContent/tabContent.vue'
export default {
  components: {
    headerBar,
    tabContent,
    
  },
  data() {
    return {
        scrollBarOpts: {
            mode: 'native',
                sizeStrategy: 'number',
                detectResize: true,
                scrollPanel: {
                scrollingX: true,
                easing: 'easeOutQuad',
            },
            bar: {
                background: '#DFDFDF',
                opacity: 0.8
            }
        },             
     
      
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    handleWindowResize() {
    //   this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);
        console.log(window.innerHeight);
      // Set --vh property
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight}px`
      );
    },
    
  },
  mounted(){
    let vh = window.innerHeight;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  },
  created() {
    window.addEventListener("resize", this.handleWindowResize);
  },
  destroyed(){
      window.removeEventListener("resize", this.handleWindowResize);
  }
  
}
</script>

<style lang="scss">
.layout--main{
  height: 100%;
    background-color: #fff;
  .body-content{
    height: calc(100% - 60px);
    
  }
}

</style>