'use strict'
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const version = 'v1.1.1';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 引入webpack
const webpack = require('webpack');

// 压缩混淆
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports={
	// 入口
	entry:{
		main:'./src/main.js',
		// 再加一个入口
		vendors:['vue','vue-router','moment','axios','vue-preview'],
	},
	// 出口
	output:{
		path:path.join(__dirname,'dist4'),
		// 设置资源路径的请求地址
		// style.css内部有请求assets中的ttf
		// style.css->css/assets/mui.ttf
		publicPath:'/',//企业中也可以是www.baidu.com/ 

		filename:'js/[name].[chunkhash:6].js'
	},
	module:{
		loaders:[
			// 处理css
			{
				test:/\.css$/,
				// 执行顺序从右到左
				// loader:'style-loader!css-loader!autoprefixer-loader'
				// 打包提取css
				use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader!autoprefixer-loader"
		        })
			},

			{
				test:/\.less$/,
				// 执行顺序从右到左
				loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
			},
			// 处理图片／文件
			{
				test:/\.(jpg|png|svg|ttf|woff|woff2|gif)$/,
				loader:'url-loader',
				options:{
					// 字节，以上生成文件，否则base64
					limit:4096,
					// 超出范围的文件需要name,file-loader中可查
					name:'assets/[name].[ext]'
				}
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				// 排除node_modules文件夹下的文件
				exclude:/node_modules/,
				// options:{//如果多次使用babel-loader,就需要多次options
				// 	presets:['es2015'],//关键字
				// 	plugins:['transform-runtime'] //函数
				// }
			},
			// 解析vue-preview的es6代码
			{
			    test: /vue-preview.src.*?js$/,
			    loader: 'babel-loader',
			 //    options:{//建议使用.babelrc文件，在当前根目录就可以
				// 	presets:['es2015'],//关键字
				// 	plugins:['transform-runtime'] //函数
				// }
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	plugins:[
		// 混淆代码
		new UglifyJsPlugin(),
		// 提取公共模块
		new webpack.optimize.CommonsChunkPlugin({
			// 清单，用来记录使用者和第三方的关系
			names:['vendors','manifest']
		}),
		// 提取css插件，设置名称
	 	new ExtractTextPlugin("css/[name].[contenthash:6].css"),
		new htmlWebpackPlugin({
			template:'./src/index.html'
		}),
		 new webpack.DefinePlugin({
	      'process.env': {
	        NODE_ENV: '"production"'
	      }
	    })
	]
}