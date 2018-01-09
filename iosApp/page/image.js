
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet,Image} from 'react-native'
import { Button } from 'antd-mobile'
import  ImagePicker from 'react-native-image-picker' //第三方相机

import base from '../style/base'

var photoOptions = {
  //底部弹出框选项
  title:'请选择',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'选择相册',
  quality:0.75,
  allowsEditing:true,
  noData:false,
  storageOptions: {
      skipBackup: true,
      path:'images'
  }
}

export default class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc:{},
    }
    this.clickIcon = this.clickIcon.bind(this)
  }

  static navigationOptions = ({navigation, screenProps})=>({
    headerTitle: "图标", // 导航条标题
  })
  

  clickIcon(){
    ImagePicker.showImagePicker(photoOptions,(response) =>{
      console.log('response'+response);
      this.setState({imgSrc:response})
      if (response.didCancel){
          return
      }
  })
  }

  render() { 
    return (
      <View
        style={base.container}>
        <Button type="primary" onClick={this.clickIcon}>拍照&&相册</Button>
        <Image source={this.state.imgSrc.uri} style={{width:20}}/>
      </View>
    )
  }
}