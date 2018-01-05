
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../style/home'

export default class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static navigationOptions = ({navigation, screenProps})=>({
    headerTitle: "我的", // 导航条标题
    headerRight:null
  })

  render() {
    const { params } = this.props.navigation.state
    return (
      <View
        style={styles.container}>
        <Text >好多信息。怎么破。。不知道哎</Text>
      </View>
    )
  }
}