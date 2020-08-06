<<<<<<< HEAD
/*
 * @Author: your name
 * @Date: 2020-07-27 09:15:09
 * @LastEditTime: 2020-08-04 19:08:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\vue.config.js
 */
module.exports = {
	devServer:{
		open:true,
		hot:true
	},
	
	configureWebpack:{
		resolve:{
			alias:{
				
			}
		}
	}
}
=======
module.exports = {
	configureWebpack:{
        resolve:{
          alias:{
            // "别名":"对应的文件夹"
            "&":"@/api"
          }
        }
      },
    devServer:{
        // 自动开启
        open:true,
        port:8082,
        // 热更新
        hotOnly:true,
         // 解决跨域
        proxy: {
          '/api': {
          //   target: 'http://www.weather.com.cn/', //请求的地址
          target:"http://10.12.159.99:8002",
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            } 
          }
        }
    },
}
>>>>>>> 9448dbb... 王
