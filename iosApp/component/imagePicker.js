import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker' //第三方相机
import { Button } from 'antd-mobile'

var photoOptions = {
	//底部弹出框选项
	title: '请选择',
	cancelButtonTitle: '取消',
	takePhotoButtonTitle: '拍照',
	chooseFromLibraryButtonTitle: '选择相册',
	quality: 0.75,
	allowsEditing: false,
	noData: false,
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
}

export default class HomeScene extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.clickIcon = this.clickIcon.bind(this)
	}

	clickIcon() {
		ImagePicker.showImagePicker(photoOptions, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker')
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton)
			}
			else {
				let source = { uri: response.uri }

				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };
				this.props.onReturn(source)
			}
		})
	}

	render() {
		return (<Button onClick={this.clickIcon}>{this.props.title}</Button>)
	}
}