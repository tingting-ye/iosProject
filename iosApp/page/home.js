
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
    headerTitle: "首页", // 导航条标题
    headerLeft:null, // 导航条左侧返回键隐藏
    tabBarLabel: '首页',
    tabBarIcon: () => (
      <Image source={require('../img/user.png')} style={{width:20,height:20}}/> 
    ),
  })

  render() {
    const { params } = this.props.navigation.state
    return (
      <View
        style={styles.container}>
        <Text >啊啊啊啊啊~~不开森</Text>
      </View>
    )
  }
}