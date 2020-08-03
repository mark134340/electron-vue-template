<template>
	<div id="webview_container" class="webview_container" v-loading="loading">
		<meta name="referrer" content="no-referrer" />

		<webview 
			id="webview" 
			:src="webURL" 
			
			httpreferrer="http://cheng.guru"
			useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
			allowpopups="on"
			plugins="1"
			style="width:100%; height:100%;" 
			>
		</webview>

		
	</div>
</template>
<script>


export default {
	data() {
		return {
			routeTab: null,//tab标签
			loading: false,
			
		}
	},
	watch:{
		
	},
	
	computed:{
		webURL(){
			return this.$route.params.URL
			
		}
	},
	methods: {
		
		onloadWeb(){
			let webview = document.querySelector('#webview')

			const loadstart = () => {
				this.loading = true
			}

			const loadstop = () => {
				this.loading = false
			}
			// console.log(webview)
			webview.addEventListener('did-start-loading', loadstart)
			webview.addEventListener('did-stop-loading', loadstop)

			webview.addEventListener('dom-ready', () => {
				loadstop();
				let URL = webview.getURL()	
				this.routeTab = {
						title: webview.getTitle(),
						icon: 'fa fa-internet-explorer',
						tips: URL
					}
			})
			//防止点击链接在新窗口打开
			webview.addEventListener('new-window', (e) => {
				const protocol = require('url').parse(e.url).protocol;
				if (protocol === 'http:' || protocol === 'https:') {
					webview.src = e.url;
				}
			});
			//页内导航跳转 更新tab图标
			webview.addEventListener('page-favicon-updated', (event) => {
				this.routeTab.icon = event.favicons[0]	
			})
			//事件
			// webview.addEventListener('did-frame-finish-load', (event) => {
			// 	// console.log(event.isMainFrame)
					
			// })
			// webview.addEventListener('will-navigate', (event) => {
			// 	console.log('导航至：'+event.url)
					
			// })
			// webview.addEventListener('did-navigate-in-page', (event) => {
			// 	console.log('页内导航：'+event.url)
					
			// })
			// webview.addEventListener('enter-html-full-screen', (e) => {
					
			// 	console.log(e)
			// })
			// webview.addEventListener('leave-html-full-screen', (e) => {
					
			// 	console.log(e)
			// })
			// webview.addEventListener('ipc-message', (event) => {
			
			// 	// console.log(event.args[0])
					
			// })
			
			// webview.addEventListener('update-target-url', (e) => {
			// 	// console.log(e)
			// 	// if(e.url){
	
			// })
			webview.addEventListener('plugin-crashed', (event) => {
				console.log(event.name+'插件已崩溃'+'('+event.version+')')
					
			})
			// webview.addEventListener('crashed', () => {
			// 	console.log('页面已崩溃')
					
			// })
			// webview.addEventListener('console-message', e => {
	
			// });
	
		},

	},
	mounted(){
		this.onloadWeb();
	}
	
}
</script>
<style lang='scss'>
.webview_container{
	background-color: rgb(221, 234, 241);
	height: 100%;
	width: 100%;
	// overflow: hidden;
	// display: flex;
	
	#webview{
		// height: calc(var(--vh)*100 - 100px);
		width: inherit;
		// overflow: hidden;
		// flex:	0,1,auto;
		iframe {
			// height: inherit;
			width: inherit;
		}
	}
	
	
	
}

</style>