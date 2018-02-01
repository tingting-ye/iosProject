import React from 'react'
import { Navigator, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Drawer1 from '../drawer1'
import Drawer2 from '../drawer2'

const DrawerNavProject = DrawerNavigator({
  Drawer1: { screen: Drawer1 },
  Drawer2: { screen: Drawer2 },
},{
  drawerWidth: 200, // 抽屉宽
  drawerPosition: 'right', // 抽屉在左边还是右边
  contentOptions: {
    initialRouteName: 'Drawer1', // 默认页面组件
    activeItemKey : 'Notifications',
    labelStyle : {//标签样式
         height : 30,
    },
    activeTintColor: 'white',  // 选中文字颜色
    activeBackgroundColor: '#ff8500', // 选中背景颜色
    inactiveTintColor: '#666',  // 未选中文字颜色
    inactiveBackgroundColor: '#fff', // 未选中背景颜色
    style: {  // 样式
       marginVertical: 0, 
    },
  }
})

module.exports = DrawerNavProject