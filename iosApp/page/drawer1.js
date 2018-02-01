
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { Button } from 'antd-mobile'

import base from '../style/base'

export default class Drawer1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.click = this.click.bind(this)
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "drawer1", // 导航条标题
  })

  click(){
    this.props.navigation.navigate('DrawerToggle');
  }

  render() {
    return (
      <View
        style={base.container}>
        <Text>drawer1</Text>
        <Button onClick={this.click}>显示弹窗</Button>
      </View>
    )
  }
}