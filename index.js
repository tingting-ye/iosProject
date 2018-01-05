import { AppRegistry } from 'react-native'
import { Navigator, StackNavigator } from 'react-navigation'
import LoginScene from './iosApp/page/login'
import HomeScene from './iosApp/page/home'
import MyInfoScene from "./iosApp/page/myInfo"

const App = StackNavigator({
    LoginScene: { screen: LoginScene }, // 登录界面
    HomeScene:{screen:HomeScene}, // 首页
    MyInfoScene:{screen:MyInfoScene} // 首页
});

AppRegistry.registerComponent('reactNativeOne', () => App)
