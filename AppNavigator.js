import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from './src/views/Login'
import Dashboard from './src/views/Dashboard'

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
        headerLeft: null,
        gesturesEnabled: false,
        headerTitleStyle: { color: '#fff' },
        headerStyle: { backgroundColor: '#3089f1' }
      }
    }
  },
  {
    initialRouteName: 'Login'
  }
)

const AppNavigator = createAppContainer(NavigationStack)

export default AppNavigator
