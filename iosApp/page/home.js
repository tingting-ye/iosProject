
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { Button, WingBlank, WhiteSpace, List } from 'antd-mobile'

import base from '../style/base'

const Item = List.Item

export default class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.navigation = this.navigation.bind(this) //页面跳转
    this.clickImage = this.clickImage.bind(this) //拍照
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: "头部头部头部头部头部头部", //导航条标题
    headerLeft: null, //设置导航条左侧。可以是按钮或者其他视图控件  
    headerStyle:{ //设置导航条的样式。背景色，宽高等  
      backgroundColor:'#4ECBFC',
    },
    //  title: "首页", //标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用   
    //  header:null, //可以设置一些导航的属性，隐藏设置为null (此处隐藏，只隐藏当前页面头部导航)
    //  headerRight: null, //设置导航条右侧。可以是按钮或者其他视图控件 
    tabBarLabel: '底部',
  })

  navigation() {
    const { navigate } = this.props.navigation
    navigate("NavigationScene", { name: "react-navigation" })
  }

  clickImage() {
    const { navigate } = this.props.navigation
    navigate("ImageScene",{callback: (data)=>{
      console.log(data); // 打印值为：'回调参数'
  }})
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View
        style={base.container}>
        <List renderHeader={() => '功能列表'}>
          <Item arrow="horizontal" onClick={this.navigation} >页面跳转</Item>
          <Item arrow="horizontal" onClick={this.clickImage} >拍照</Item>
        </List>
      </View>
    )
  }
}