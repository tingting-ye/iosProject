
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'

export default class ImageScene extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: "react-navigation", 
    headerStyle:{backgroundColor:screenProps?screenProps.themeColor:'#4ECBFC'},
  })

  render() {
    console.log(this.props)
    return (
      <View>
        <Text>对不对！</Text>
      </View>
    )
  }
}