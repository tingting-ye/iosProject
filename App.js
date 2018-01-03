
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import PropTypes from 'prop-types'
import { Navigator } from 'react-native-deprecated-custom-components'
import LoginScene from './iosApp/page/login/index'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
  }

  //第一次调用的时候，第一个参数route就是initialRoute
  renderScene(route, navigator){
    return (
      <route.scene navigator={navigator} />
    );
  }

  render() {
    return (
      <Navigator initialRoute={{ scene: LoginScene }} renderScene={this.renderScene} />
    )
  }
}

AppRegistry.registerComponent('Login', () => Login);