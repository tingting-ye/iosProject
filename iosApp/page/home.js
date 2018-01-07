
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button, ScrollView, StyleSheet,Image} from 'react-native'
// import {Icon} from 'react-native-vector-icons'

import base from '../style/base'

export default class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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

  render() {
    const { params } = this.props.navigation.state
    return (
      <View
        style={base.container}>
        <Text >啊啊啊啊啊~~不开森</Text>
      </View>
    )
  }
}