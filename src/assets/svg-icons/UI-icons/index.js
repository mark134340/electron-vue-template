import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(req)
console.log(requireAll(req));
export default req