
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
    headerTitle: "首页", // 导航条标题
    headerLeft: null, // 导航条左侧返回键隐藏
    tabBarLabel: '首页',
  })

  navigation(){
    const { navigate } = this.props.navigation
    navigate("NavigationScene")
  }

  clickImage() {
    const { navigate } = this.props.navigation
    navigate("ImageScene")
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