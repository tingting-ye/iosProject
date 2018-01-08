import { AppRegistry } from 'react-native'
import { Navigator, StackNavigator, TabNavigator } from 'react-navigation'
import LoginScene from './iosApp/page/login'
import MyFirstProject from './iosApp/page/tabNavigator/homeNav'
import IconScene from './iosApp/page/icon'

const App = StackNavigator({
	LoginScene: { screen: LoginScene }, // 登录界面
	HomeScene: { screen: MyFirstProject }, // 首页
	IconScene:{ screen: IconScene }, // icon
})

AppRegistry.registerComponent('reactNativeOne', () => App)
