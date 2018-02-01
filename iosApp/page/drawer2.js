
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button, ScrollView, StyleSheet, Image } from 'react-native'

import base from '../style/base'

export default class Drawer2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "drawer2", // 导航条标题
  })

  render() {
    return (
      <View
        style={base.container}>
        <Text >drawer2</Text>
      </View>
    )
  }
}