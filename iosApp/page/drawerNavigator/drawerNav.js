import React from 'react'
import { Navigator, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Drawer1 from '../drawer1'
import Drawer2 from '../drawer2'

const DrawerNavProject = DrawerNavigator({
  Drawer1: { screen: Drawer1 },
  Drawer2: { screen: Drawer2 },
})

module.exports = DrawerNavProject