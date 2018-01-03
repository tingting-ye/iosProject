
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

import styles from '../../style/app'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View
        style={styles.container}>
        <Text>登录成功!这是主页!</Text>
      </View>
    )
  }
}