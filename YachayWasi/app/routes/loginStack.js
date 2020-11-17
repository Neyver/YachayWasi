import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../views/Home';
import EmailAndPassword from '../components/EmailAndPassword';

const views = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Principal",
    }),
  },
  EmailAndPassword: {
    screen: EmailAndPassword,
    navigationOptions: ({ navigation }) => ({
      title: "Iniciar Sesion",
    }),
  },

}

const HomeStack = createStackNavigator(views);

export default createAppContainer(HomeStack);