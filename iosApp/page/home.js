
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
    headerTitle: "首页", // 导航条标题
    headerLeft:null, // 导航条左侧返回键隐藏
    headerRight:(<Text style={styles.headerRight} onPress={()=>{navigation.navigate("MyInfoScene")}}>我的</Text>)
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