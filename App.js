
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import PropTypes from 'prop-types'
import { Navigator } from 'react-native-deprecated-custom-components'
import LoginScene from './iosApp/page/login/index'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
    this.configureScene = this.configureScene.bind(this)
  }

  /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  configureScene(route, routeStack) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

  /**
  * 使用动态页面加载
  * @param route 路由
  * @param navigator 导航器
  * @returns {XML} 页面
  */
  renderScene(route, navigator) {
    return (
      <route.scene navigator={navigator} {...route.passProps}/>
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{ scene: LoginScene }} //初始化路由(initialRoute)
        onfigureScene={this.configureScene}//配置场景动画(configureScene)
        renderScene={this.renderScene} //渲染场景(renderScene)
      />
    )
  }
}

AppRegistry.registerComponent('Login', () => Login);