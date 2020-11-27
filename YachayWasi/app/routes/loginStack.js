import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../views/Home';
import EmailAndPassword from '../components/EmailAndPassword';
import login from '../views/login';


const views = {
  Home: {
    screen: Home,
    backgroundColor: '#475B6F',
    navigationOptions: ({ navigation }) => ({
      title: "Principal",
      headerStyle: {
        backgroundColor: '#475B6F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    }),
  },
  EmailAndPassword: {
    screen: EmailAndPassword,
    navigationOptions: ({ navigation }) => ({
      title: "Iniciar Sesion",
      headerStyle: {
        backgroundColor: '#475B6F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    }),
  },

}
const HomeStack = createStackNavigator(views);

export default createAppContainer(HomeStack);