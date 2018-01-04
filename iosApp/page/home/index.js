
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
        <Text>好讨厌的感觉，啊啊啊啊啊~~不开森</Text>
      </View>
    )
  }
}