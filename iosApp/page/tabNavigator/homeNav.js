import React from 'react'
import { Navigator, StackNavigator, TabNavigator } from 'react-navigation'


import HomeScene from '../home'
import MyInfoScene from "../myInfo"

const MyFirstProject = TabNavigator({
	HomeScene: { screen: HomeScene },
	MyInfoScene: { screen: MyInfoScene },
}, {
		//  navigationOptions：配置TabNavigator的一些属性  
    //  title：标题，会同时设置导航条和标签栏的title  
    //  tabBarVisible：是否隐藏标签栏。默认不隐藏(true)  
    //  tabBarIcon：设置标签栏的图标。需要给每个都设置  
    //  tabBarLabel：设置标签栏的title。推荐  
    //  导航栏配置  
    //  tabBarPosition：设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）  
    //  swipeEnabled：是否允许在标签之间进行滑动  
    //  animationEnabled：是否在更改标签时显示动画  
    //  lazy：是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true  
    //  trueinitialRouteName： 设置默认的页面组件  
    //  backBehavior：按 back 键是否跳转到第一个Tab(首页)， none 为不跳转  
    //  tabBarOptions：配置标签栏的一些属性iOS属性  
    //  activeTintColor：label和icon的前景色 活跃状态下  
    //  activeBackgroundColor：label和icon的背景色 活跃状态下  
    //  inactiveTintColor：label和icon的前景色 不活跃状态下  
    //  inactiveBackgroundColor：label和icon的背景色 不活跃状态下  
    //  showLabel：是否显示label，默认开启 style：tabbar的样式  
    //  labelStyle：label的样式安卓属性  
    //  activeTintColor：label和icon的前景色 活跃状态下  
    //  inactiveTintColor：label和icon的前景色 不活跃状态下  
    //  showIcon：是否显示图标，默认关闭  
    //  showLabel：是否显示label，默认开启 style：tabbar的样式  
    //  labelStyle：label的样式 upperCaseLabel：是否使标签大写，默认为true  
    //  pressColor：material涟漪效果的颜色（安卓版本需要大于5.0）  
    //  pressOpacity：按压标签的透明度变化（安卓版本需要小于5.0）  
    //  scrollEnabled：是否启用可滚动选项卡 tabStyle：tab的样式  
    //  indicatorStyle：标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题  
    //  labelStyle：label的样式  
    //  iconStyle：图标样式 
		
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

module.exports = MyFirstProject