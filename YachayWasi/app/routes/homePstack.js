import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeParent from '../views/HomeParent';
import EmailAndPassword from '../components/EmailAndPassword';
import ActivitiesSchool from '../views/ActivitiesSchool';
import firebaseConfig from '../../utils/firebaseConfig';
import UserDetailScreen from '../views/UserDetailScreen';
//import Avatar from '../components/avatar'


const views = {
  HomeParent: {
    screen: HomeParent,
    navigationOptions: ({ navigation }) => ({
      title: "Padre/Tutor",
      headerRight: () => (
        <TouchableOpacity style={{ padding: 20 }} onPress={() => firebaseConfig.auth().signOut()} >
          <Text style={{ color: '#1B9CFC' }} >Logout</Text>
        </TouchableOpacity>
      ),
    }),
  },
  EmailAndPassword: {
    screen: EmailAndPassword,
    navigationOptions: ({ navigation }) => ({
      title: "Iniciar Sesion",
    }),
  },
  ActivitiesSchool: {
    screen: ActivitiesSchool,
    navigationOptions: ({ navigation }) => ({
      title: "Actividades de la Escuela",
    }),
  },
  UserDetailScreen: {
    screen: UserDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Detalles de usuario",
    }),
  },

}

const HomePstack = createStackNavigator(views);

export default createAppContainer(HomePstack);