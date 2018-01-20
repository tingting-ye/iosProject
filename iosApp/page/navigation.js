
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { Drawer, List, NavBar, Icon } from 'antd-mobile'

import baseStyle from '../style/base'
import navigationStyle from '../style/navigation'

export default class NavigationScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
    }
    this.onOpenChange = this.onOpenChange.bind(this)
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: "页面跳转详解",  // 设置导航栏标题，推荐screen：和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。  
    headerRight: (
      <Text style={navigationStyle.rightTitle} onPress={navigation.state.params ? navigation.state.params.navigatePress : null} >
        <Icon type="ellipsis"/>
      </Text>
    )
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
        <Text>杭州江干区四季青</Text>
      </List>
    )

    return (
      <View style={baseStyle.container}>
        <Drawer
          style={navigationStyle.drawer}
          enableDragHandle
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={() => this.onOpenChange}
          drawerWidth={250}
        >
        <Text>fdsf</Text>
        </Drawer>
      </View>
    )
  }
}