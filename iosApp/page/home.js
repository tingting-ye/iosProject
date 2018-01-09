
import React, { Component } from 'react';
import { Text, View, TouchableOpacity,  ScrollView, StyleSheet,Image} from 'react-native'
import { Button } from 'antd-mobile'

import base from '../style/base'

export default class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.clickIcon = this.clickIcon.bind(this)
  }

  static navigationOptions = ({navigation, screenProps})=>({
    headerTitle: "首页", // 导航条标题
    headerLeft:null, // 导航条左侧返回键隐藏
    tabBarLabel: '首页',
    // tabBarIcon: ({ tintColor, focused }) => (
    //   <Icon
    //     name={focused ? 'ios-home' : 'ios-home-outline'}
    //     size={26}
    //     style={{ color: tintColor }}
    //   />
    // ),
  })

  clickIcon(){
    const { navigate } = this.props.navigation
    navigate("IconScene")
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View
        style={base.container}>
        <Text >啊啊啊啊啊~~不开森</Text>
        <Button type="primary" onClick={this.clickIcon}>图标</Button>
      </View>
    )
  }
}