
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button, ScrollView, StyleSheet,Image} from 'react-native'
import { InputItem} from 'antd-mobile'


import base from '../style/base'

export default class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static navigationOptions = ({navigation, screenProps})=>({
    headerTitle: "图标", // 导航条标题
  })

  render() { 
    return (
      <View
        style={base.container}>
          <InputItem
            type={"money"}
            placeholder="start from right"
            clear
          >光标在右</InputItem>
      </View>
    )
  }
}