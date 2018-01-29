import { AppRegistry } from 'react-native'
import { Navigator, StackNavigator, TabNavigator } from 'react-navigation'
import LoginScene from './iosApp/page/login'
import MyFirstProject from './iosApp/page/tabNavigator/homeNav'
import ImageScene from './iosApp/page/image'
import NavigationScene from './iosApp/page/navigation'

const App = StackNavigator({
	// 如果没有设置initialRouteName，则默认第一个screen显示界面
	LoginScene: {
		screen: LoginScene,
		path: "login",
		navigationOptions: {}  // 此处设置了, 会覆盖组件内的`static navigationOptions`设置. 具体参数详见下文
	}, // 登录界面
	HomeScene: {
		screen: MyFirstProject,
		path: "page/home",
		navigationOptions: {  // 配置StackNavigator的一些属性
			//  header:null ,//可以设置一些导航的属性，隐藏设置为null (当此处和详情页同时配置时，以此处为准)
		}
	}, // 首页
	ImageScene: {
		screen: ImageScene,
		path: "page/image",
	}, // icon
	NavigationScene: {
		screen: NavigationScene,
	},
}, {
		initialRouteName: 'LoginScene', // 默认显示界面
		mode: 'modal',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
		headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
		initialRouteParams: { title: "welcome to HangZhou" },// 初始路由参数
		headerBackTitle: null,
		onTransitionStart: () => {// 导航栏切换开始，当转换动画即将开始时被调用的功能
			// alert("开始")
		},
		onTransitionEnd: () => { // 导航栏切换结束，当转换动画完成，将被调用的功能
			// alert("结束")
		},
		// headerBackTitle:"返回",
		// containerOptions: {
		//   // on Android, the URI prefix typically contains a host in addition to scheme
		//   URIPrefix: Platform.OS == 'android' ? 'iosProject://mychat/' : 'iosProject://',
		// },
	})

AppRegistry.registerComponent('reactNativeOne', () => App)
