
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../../style/home'

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigator.pop()}>
          <Text>
            返回上一页
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}