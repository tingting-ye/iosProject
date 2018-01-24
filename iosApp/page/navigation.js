
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { Drawer, List, NavBar, Icon,Button } from 'antd-mobile'

import ColorSence from './childSence/colorSence'

import baseStyle from '../style/base'
import navigationStyle from '../style/navigation'

const Item = List.Item
const Brief = Item.Brief

export default class NavigationScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.onOpenChange = this.onOpenChange.bind(this)
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: navigation.state.params.name,  // 设置导航栏标题，推荐screen：和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。  
    headerRight: (
      <Text style={navigationStyle.rightTitle} onPress={navigation.state.params ? navigation.state.params.navigatePress : null} >
        <Icon type="ellipsis" />
      </Text>
    ),
  })

  componentDidMount() {
    //在static中使用this方法  
    this.props.navigation.setParams({
      navigatePress: this.onOpenChange
    })
  }

  onOpenChange() { this.setState({ open: !this.state.open }) }

  render() {
    const sidebar = (
      <List>
        <Item arrow="horizontal" multipleLine onClick={() => { }}>
          StackNavigator<Brief>类似顶部导航条，用来跳转页面和传递参数</Brief>
        </Item>
        <Item arrow="horizontal" multipleLine onClick={() => { }}>
          TabNavigator<Brief>类似底部标签栏，用来区分模块</Brief>
        </Item>
        <Item arrow="horizontal" multipleLine onClick={() => { }}>
          DrawerNavigator<Brief>抽屉，类似从App左侧滑出一个页面</Brief>
        </Item>
      </List>
    )

    return (
      <ColorSence screenProps={{themeColor:'red'}}/>
    )
  }
}