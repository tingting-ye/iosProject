import { AppRegistry } from 'react-native'
import { Navigator, StackNavigator, TabNavigator } from 'react-navigation'
import LoginScene from './iosApp/page/login'
import MyFirstProject from './iosApp/page/tabNavigator/homeNav'
import ImageScene from './iosApp/page/image'
import NavigationScene from './iosApp/page/navigation'

const App = StackNavigator({
	LoginScene: { 
		screen: LoginScene,
	 }, // 登录界面
	HomeScene: {
		screen: MyFirstProject,
		navigationOptions: {  // 配置StackNavigator的一些属性
			//  header:null ,//可以设置一些导航的属性，隐藏设置为null (当此处和详情页同时配置时，以此处为准)
		}
	}, // 首页
	ImageScene: { screen: ImageScene }, // icon
	NavigationScene: {
		screen: NavigationScene,
	},
})

AppRegistry.registerComponent('reactNativeOne', () => App)
