
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'

import ImagePicker from '../component/imagePicker'

import base from '../style/base'

export default class ImageScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: {}
    }
    this.onReturn = this.onReturn.bind(this)
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: "相册&拍照", // 导航条标题
  })

  onReturn(res) {
    const {state}=this.props.navigation
    this.setState({ imgSrc: res },()=>{
      state.params.callback("已经讲刚刚拍好的照片显示出来！")
    })
  }

  render() {
    return (
      <View
        style={base.container}>
        <WingBlank>
          <WhiteSpace />
          <ImagePicker onReturn={this.onReturn} title={"拍照"} />
          <WhiteSpace />
          <Image source={{ uri: this.state.imgSrc.uri }} style={{ width: '100%', height: '100%' }} />
        </WingBlank>
      </View>
    )
  }
}