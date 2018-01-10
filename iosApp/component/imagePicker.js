import React, { Component } from 'react'
import  ImagePicker from 'react-native-image-picker' //第三方相机
import { Button } from 'antd-mobile'

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
        this.state = {}
        this.clickIcon = this.clickIcon.bind(this)
    }

    clickIcon(){
        ImagePicker.showImagePicker(photoOptions,(response) =>{
        if (response.didCancel){return}
        this.props.onReturn(response)
        })
    }

    render() { 
        return (<Button type="primary" onClick={this.clickIcon}>拍照&&相册</Button>)
    }
}