
import React, { Component } from 'react';
import { Text, View, TabBarIOS, TextInput, TouchableOpacity, ImageBackground, Image, AlertIOS } from 'react-native'

import styles from '../style/login'

export default class LoginScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
    this.forget = this.forget.bind(this) //忘记密码
    this.username = this.username.bind(this) //获取用户名
    this.password = this.password.bind(this) //获取用户密码
    this.login = this.login.bind(this) //登录
  }

  static navigationOptions = {
    header: null, // 当header为null时，顶部导航条隐藏
  };

  forget() {
    AlertIOS.alert('提示', '忘记密码请联系系统管理员！', [
      { text: '取消', onPress: function () { console.log('取消按钮点击') } },
      { text: '确认', onPress: function () { console.log('确认按钮点击') } },
    ])
  }

  username(key) { this.setState({ username: key }) }

  password(key) { this.setState({ password: key }) }

  login(type = 'Normal') {
    const { navigate } = this.props.navigation
    // if (!(this.state.username || this.state.password)) {
    //   alert('请填写信息');
    //   return
    // }
    // if (this.state.username === "admin" && this.state.password === "123") {
    // alert('登录成功');
    navigate("HomeScene")
    // } else {
    //   alert('登录失败');
    // }
  }

  render() {
    // console.log(this.props.navigation.state.params.title)
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.img} source={require('../img/timg.jpeg')} resizeMode='cover'>
          <View style={styles.inputBox}>
            <Image style={styles.icon} source={require('../img/user.png')} />
            <TextInput
              style={styles.input}
              placeholderTextColor={'rgba(255,255,255,0.5)'}//提示文本的颜色
              placeholder={'username'}//提示文本内容
              underlineColorAndroid={'transparent'}
              onChangeText={this.username}
            />
          </View>
          <View style={styles.inputBox}>
            <Image style={styles.icon} source={require('../img/lock.png')} />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={this.password}
              placeholderTextColor={'rgba(255,255,255,0.5)'}//提示文本的颜色
              placeholder={'password'}//提示文本内容
              underlineColorAndroid={'transparent'}
            />
          </View>
          <TouchableOpacity onPress={() => this.login("Bottom")} style={styles.button}>
            <Text style={styles.btText}>登录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btText}>注册</Text>
          </TouchableOpacity>
          <View style={styles.passwordView}><Text onPress={() => this.forget()} style={styles.forgetPassword}>忘记密码？</Text></View>
        </ImageBackground>
      </View>
    )
  }
}