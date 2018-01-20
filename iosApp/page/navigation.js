
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
      title: '自定义Header',
      navigatePress: this.onOpenChange
    })
  }

  onOpenChange() { this.setState({ open: !this.state.open }) }

  render() {
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index} multipleLine >Cdf</List.Item>)
        }
        return (<List.Item key={index} >Cdf{index}</List.Item>)
      })}
    </List>)

    return (
      <View style={baseStyle.container}>
        <Drawer
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={() => this.onOpenChange}
        >
        <Text>fdsf</Text>
        </Drawer>
      </View>
    )
  }
}