import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// RouterTab 内置路由
import { RouterTabRoutes } from 'vue-router-tab'
import Iframe from 'vue-router-tab/lib/page/Iframe.vue'
Vue.use(VueRouter)

  const routes = [
    ...RouterTabRoutes,
    {
      path: '',
        component: () => import('@/layouts/Main.vue'),
        meta: {
          

          rule: '*',
        },
        
        
        children: [
          {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
              title: '首页', // 页签标题
              icon: 'home', // 页签图标，可选
              tips: '首页', // 页签提示，可选，如未设置则跟title一致
              
            }
          },
          
          {
            path: '/views/WebView/WebView/:catalog/:URL',
            name: 'WebView',
            components: {
              default:  () => import('../views/WebView/WebView.vue')
            
            },
            meta: {
              title: '浏览器', // 页签标题
              icon: 'fa fa-internet-explorer', // 页签图标，可选
              tips: '浏览器', // 页签提示，可选，如未设置则跟title一致
              aliveId (route) {
                return `/WebView/WebView/${route.params.catalog}`
              },

            }
          },
          {
            // iframe 路由
            path: '/iframe/:src/:title?/:icon?',
            name:'Iframe',
            component: Iframe,
            props: true,
            meta: {
              
              key: route => `iframe-${route.params.src}`,
              title: route => route.params.title,
              icon: route => route.params.icon,

            }
          },
        ]
    }
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
