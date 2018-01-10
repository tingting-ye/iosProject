
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet,Image} from 'react-native'
import { Button } from 'antd-mobile'

import ImagePicker from '../component/imagePicker'

import base from '../style/base'

export default class ImageScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc:{}
    }
    this.onReturn = this.onReturn.bind(this)
  }

  static navigationOptions = ({navigation, screenProps})=>({
    headerTitle: "相册&拍照", // 导航条标题
  })

  onReturn(res){
    this.setState({imgSrc:res})
  }

  render() { 
    return (
      <View
        style={base.container}>
        <ImagePicker onReturn={this.onReturn} title={"拍照"}/>
        <Image source={this.state.imgSrc.uri}/>
      </View>
    )
  }
}