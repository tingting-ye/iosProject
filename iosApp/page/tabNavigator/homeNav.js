import React from 'react'
import { Navigator, StackNavigator, TabNavigator } from 'react-navigation'


import HomeScene from '../home'
import MyInfoScene from "../myInfo"

const MyFirstProject = TabNavigator({
	HomeScene: { screen: HomeScene },
	MyInfoScene: { screen: MyInfoScene },
}, {
		tabBarVisible: true,
		animationEnabled: false, // 切换页面时是否有动画效果
		swipeEnabled: true, // 是否可以左右滑动切换tab
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