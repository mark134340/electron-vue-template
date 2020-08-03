 <template>
 
    <div id="header_tab" class="header-tab ">
      <meta name="referrer" content="no-referrer" />    
          <div class="top-tabs " >
            <router-tab alive-id="fullPath" :closable="true" :restore="true" :restoreWatch="true" page-transition="page-fade">
              <template v-slot="tab" >
                <img :src="tab.icon" v-if="IsUrl(tab.icon)" alt=""   :style="{ width:'15px', height:'15px',marginRight: '5px'}">
                <i v-else class=" hover:text-primary router-tab__item-icon iconfont" :icon="tab.icon" svgClasses="w-4 h-4" />
                <span class="router-tab__item-title hover:text-primary" :title="tab.tips">{{tab.title}}</span>
                
                <i
                  
                  class="router-tab__item-close"
                  @click.prevent="tab.close"
                />
                
                
              </template>
            </router-tab>
            
          </div>
          
    </div>
</template>
<script>
import isUrl  from 'is-url';
export default {
  name:'tab-content',
  components:{
    
  },
  props:{
    
  },
  data() {
    return {
        
        
    }
  },
  watch:{
    
    
  },
  computed:{
    
    
  },
  methods:{
    IsUrl(url){
      return isUrl(url)
    },

  },
  mounted() {
    
    
  },
}
</script>
<style lang="scss" >
.header-tab{
  height: 100%;
  .top-tabs{
    height: inherit;
    .router-tab{
      height: inherit;
    }
  }
}
.router-tab__header{
  background-color: rgb(98, 99, 105);
  position: sticky;
  top:0;
  .router-tab__nav{
    background-color: rgb(216, 216, 216);
    .router-tab__item{
      background-color: rgb(162, 163, 170);
    }
    .router-link-exact-active{
      background-color: rgb(216, 216, 216);
    }
  }
}
.router-tab__container{
    height: 100%;
    background-color: rgb(216, 216, 216);
  }



  // 页面 fade 过渡
  .page-fade {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.2s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }
</style>
