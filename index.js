import { AppRegistry } from 'react-native'
import { Navigator, StackNavigator, TabNavigator } from 'react-navigation'
import LoginScene from './iosApp/page/login'
import MyFirstProject from './iosApp/page/tabNavigator/homeNav'
import ImageScene from './iosApp/page/image'

const App = StackNavigator({
	LoginScene: { screen: LoginScene }, // 登录界面
	HomeScene: { screen: MyFirstProject }, // 首页
	ImageScene: { screen: ImageScene }, // icon
})

AppRegistry.registerComponent('reactNativeOne', () => App)
