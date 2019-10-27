import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from './src/views/Login'
import Dashboard from './src/views/Dashboard'
import SplashScreen from './src/views/SplashScreen'

const NavigationStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: 'Medical Equipment Mngt. System',
        headerTitleStyle: { color: '#fff' },
        headerStyle: { backgroundColor: '#3089f9' }
      }
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'SplashScreen'
  }
)

const AppNavigator = createAppContainer(NavigationStack)

export default AppNavigator
