import { AppRegistry } from 'react-native'
import { Navigator, StackNavigator, TabNavigator } from 'react-navigation'
import LoginScene from './iosApp/page/login'
import HomeScene from './iosApp/page/home'
import MyInfoScene from "./iosApp/page/myInfo"

const MyFirstProject = TabNavigator({
	HomeScene: { screen: HomeScene },
	MyInfoScene: { screen: MyInfoScene },
}, {
		// tabBar 显示的位置 ，android 默认是显示在页面顶端的 
		// tabBarPosition: 'top',
		animationEnabled: false, // 切换页面时是否有动画效果
		swipeEnabled: true, // 是否可以左右滑动切换tab 如果设置这个属性，这事例中下面设置的按钮 Go back home | Go to notifications就不好使了
		backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转 
		//第一次加载时，显示的tab
		initialRouteName: 'HomeScene',
		tabBarOptions: { //配置标签栏的一些属性
			activeTintColor: '#fff', // 文字和图片选中颜色
			inactiveTintColor: '#999', // 文字和图片未选中颜色
			showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
			showLabel: true, // android 是否展现文字 默认 true 
			upperCaseLabel: false, //android 文字是否需要大写 默认true 
			pressColor: 'blue', // android 按压时显示的颜色 
			scrollEnabled: false,
			indicatorStyle: {
				height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
			},
			style: {
				backgroundColor: '#ff6449', // TabBar 背景色
			},
			labelStyle: {
				fontSize: 15, // 文字大小
				paddingTop: 0,
				marginTop: 0,
			},
			tabStyle: {
				marginTop: -15,
				height: 50,
			},
		},
	});

const App = StackNavigator({
	HomeScene: { screen: MyFirstProject }, // 首页
	LoginScene: { screen: LoginScene }, // 登录界面
});

AppRegistry.registerComponent('reactNativeOne', () => App)
