
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button, ScrollView, StyleSheet, Image } from 'react-native'

import base from '../style/base'

export default class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: "我的", // 导航条标题
    headerLeft: null,
    tabBarLabel: '我的',
  })

  render() {
    return (
      <View
        style={base.container}>
        <Text >好多信息。怎么破。。不知道哎</Text>
      </View>
    )
  }
}