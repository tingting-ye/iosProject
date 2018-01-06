
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button, ScrollView, StyleSheet,Image} from 'react-native'

import styles from '../style/home'

export default class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static navigationOptions = ({navigation, screenProps})=>({
    headerTitle: "我的", // 导航条标题
    headerLeft:null,
    tabBarLabel: '我的',
    tabBarIcon: () => (
      <Image source={require('../img/lock.png')} style={{width:20,height:20}}/>
    ),
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