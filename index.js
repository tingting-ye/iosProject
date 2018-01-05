import { AppRegistry } from 'react-native'
import { Navigator, StackNavigator } from 'react-navigation'
import LoginScene from './iosApp/page/login/index'
import HomeScene from './iosApp/page/home/index'

const App = StackNavigator({
    LoginScene: { screen: LoginScene },
    HomeScene:{screen:HomeScene}
});

AppRegistry.registerComponent('reactNativeOne', () => App)
