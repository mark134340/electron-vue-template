const path = require('path')

module.exports = {
	publicPath: '/',
    configureWebpack: {
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
  
      },  
    },
    
    chainWebpack: config => {
      
      // 清除已有的所有 loader。
      // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
      
      //使用 "svg-sprite-loader"加载器加载'./src/assets/svg-icons/UI-icons'目录下的SVG文件
      const svgIconRule = config.module.rule('svg')
      svgIconRule.uses.clear()
      svgIconRule
        .test(/\.svg$/)
        .include.add(path.resolve(__dirname, './src/assets/svg-icons/UI-icons'))
        .end()
        .use('svg-sprite-loader')
		.loader('svg-sprite-loader')
		.options({
			symbolId: 'icon-[name]'
		})
      
      //使用 "file-loader"加载器加载除了该目录下的SVG文件
      const fileRule = config.module.rule('svg1')
      fileRule.uses.clear()
      fileRule
        .test(/\.svg$/)
        .exclude.add(path.resolve(__dirname, './src/assets/svg-icons/UI-icons'))
        
        .end()
        .use('file-loader')
        .loader('file-loader')
    },
    pluginOptions: {
      electronBuilder: {
        nodeIntegration: true,
        builderOptions: {
          
          productName: "myapp",
          appId: "com.example.app",
          "copyright":"Copyright © 2020",
          "directories":{
              "output":"./dist"//输出文件路径
          },
          
          mac: {
            icon: 'public/favicon.ico'
          },
          win: {
            icon: 'public/favicon.ico',
            target: [
              {
                target: 'nsis',
                arch: [
                  "x64"
                ]
              }
            ]
		  },
		  nsis: {
			"oneClick": false, // 是否一键安装
			"allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
			"allowToChangeInstallationDirectory": true, // 允许修改安装目录
			"installerIcon": "public/favicon.ico",// 安装图标
			"uninstallerIcon": "public/favicon.ico",//卸载图标
			"installerHeaderIcon": "public/favicon.ico", // 安装时头部图标
			"createDesktopShortcut": true, // 创建桌面图标
			"createStartMenuShortcut": true,// 创建开始菜单图标
			"shortcutName": "myapp", // 图标名称
			'license': 'LICENSE.txt'
		  },
          
        }
      }
    }
  }