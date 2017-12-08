'use strict';

// 引入第三方包
import Vue from 'vue';

// 引入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 引入mint-ui
// import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
// Vue.use(Mint);

// mint-ui按需引入开始＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
import Header from 'mint-ui/lib/header';
import Switch from 'mint-ui/lib/switch';
import Swipe from 'mint-ui/lib/swipe';
import SwipeItem from 'mint-ui/lib/swipe-item';
import Lazyload from 'mint-ui/lib/lazyload';
import LoadMore from 'mint-ui/lib/loadmore';
import Indicator from 'mint-ui/lib/indicator';
import Button from 'mint-ui/lib/button';
Vue.component(Header.name,Header);
Vue.component(Switch.name,Switch);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(LoadMore.name,LoadMore);
Vue.component(Button.name,Button);
Vue.use(Lazyload);
// mint-ui按需引入结束＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// 引入MUI
import './static/vendor/mui/dist/css/mui.css'

// 引入自己的css
import './static/css/global.css'

// 引入Axios
import Axios from 'axios';
// 挂载原型
Vue.prototype.$ajax = Axios;
// 默认配置
Axios.defaults.baseURL = 'http://192.168.1.101:3000/api/';

// 拦截器操作loading...
Axios.interceptors.request.use(function(config){
	// 显示图标
	Indicator.open({
		text: '加载中...',
  		spinnerType: 'fading-circle'
	});
	return config;
});
Axios.interceptors.response.use(function(config){
	// 关闭图标
	Indicator.close();
	return config;
});


// 引入moment
import Moment from 'moment';

// 引入vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

// 引入第三方包结束


// 引入全局组件需要的组件对象
import NavBar from './components/common/navBar.vue'
Vue.component('navBar',NavBar);//使用最好以nav-bar
// 定义全局过滤器
Vue.filter('convertDate',function(value){
	return Moment(value).format('YYYY-MM-DD');
});

// 引入自己的vue文件开始
import App from './app.vue';

// const Foo = resolve => require(['./Foo.vue'],resolve)
const Home =r=> require([ './components/home/home.vue'],r);
const Vip =r=> require([ './components/vip/vip.vue'],r);
const Cart =r=> require([ './components/cart/cart.vue'],r);
const Search =r=> require([ './components/search/search.vue'],r);
const NewsList =r=> require([ './components/news/newsList.vue'],r);
const NewsDetail =r=> require([ './components/news/newsDetail.vue'],r);
const PicShare =r=> require([ './components/pic/picShare.vue'],r);
const PicDetail =r=> require([ './components/pic/picDetail.vue'],r);
const GoodsList =r=> require([ './components/goods/goodsList.vue'],r);
const GoodsDetail =r=> require([ './components/goods/goodsDetail.vue'],r);


// import Home from './components/home/home.vue';
// import Vip from './components/vip/vip.vue';
// import Cart from './components/cart/cart.vue';
// import Search from './components/search/search.vue';
// import NewsList from './components/news/newsList.vue';
// import NewsDetail from './components/news/newsDetail.vue';
// import PicShare from './components/pic/picShare.vue';
// import PicDetail from './components/pic/picDetail.vue';
// import GoodsList from './components/goods/goodsList.vue';
// import GoodsDetail from './components/goods/goodsDetail.vue';
// 引入自己的vue文件结束


// 创建对象并配置路由规则
let router = new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{path:'/',redirect:{name:'home'}},
		{name:'home',path:'/home',component:Home},
		{name:'vip',path:'/vip',component:Vip},
		{name:'cart',path:'/cart',component:Cart},
		{name:'search',path:'/search',component:Search},
		{name:'news.list',path:'/news/list',component:NewsList},
		{name:'news.detail',path:'/news/detail',component:NewsDetail},
		{name:'pic.share',path:'/pic/share',component:PicShare},
		{name:'pic.detail',path:'/pic/detail/:id',component:PicDetail},
		{name:'goods.list',path:'/goods/list',component:GoodsList},
		{name:'goods.detail',path:'/goods/detail',component:GoodsDetail},
		// 测试用例
	]
})



// 创建vue实例
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})