import { AppRegistry } from 'react-native'
import { Navigator, StackNavigator, TabNavigator } from 'react-navigation'
import LoginScene from './iosApp/page/login'
import MyFirstProject from './iosApp/page/tabNavigator/homeNav'
import ImageScene from './iosApp/page/image'
import NavigationScene from './iosApp/page/navigation'

const App = StackNavigator({
	LoginScene: { screen: LoginScene }, // 登录界面
	HomeScene: { screen: MyFirstProject }, // 首页
	ImageScene: { screen: ImageScene }, // icon
	NavigationScene: { screen: NavigationScene }, // 页面跳转

	//  title: 标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用   
	//  header：可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null 
	//  navigationOptions：配置StackNavigator的一些属性。 
	//  headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"  
	//  headerRight：设置导航条右侧。可以是按钮或者其他视图控件  
	//  headerLeft：设置导航条左侧。可以是按钮或者其他视图控件  
	//  headerStyle：设置导航条的样式。背景色，宽高等  
	//  headerTitleStyle：设置导航栏文字样式  
	//  headerBackTitleStyle：设置导航栏‘返回’文字样式  
	//  headerTintColor：设置导航栏颜色  
	//  headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0  
	//  gesturesEnabled：是否支持滑动返回手势，iOS默认支持，安卓默认关闭  
	//  screen：对应界面名称，需要填入import之后的页面  
	//  mode：定义跳转风格  
	//  card：使用iOS和安卓默认的风格  
	//  modal：iOS独有的使屏幕从底部画出。类似iOS的present效果  
	//  headerMode：返回上级页面时动画效果  
	//  float：iOS默认的效果  
	//  screen：滑动过程中，整个页面都会返回  
	//  none：无动画  
	//  cardStyle：自定义设置跳转效果  
	//  transitionConfig： 自定义设置滑动返回的配置  
	//  onTransitionStart：当转换动画即将开始时被调用的功能  
	//  onTransitionEnd：当转换动画完成，将被调用的功能  
	//  path：路由中设置的路径的覆盖映射配置  
	//  initialRouteName：设置默认的页面组件，必须是上面已注册的页面组件  
	//  initialRouteParams：初始路由参数  
})

AppRegistry.registerComponent('reactNativeOne', () => App)
