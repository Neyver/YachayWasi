import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeStudent from '../views/HomeStudent';
import EmailAndPassword from '../components/EmailAndPassword';
import ActivitiesSchool from '../views/ActivitiesSchool';
import firebaseConfig from '../../utils/firebaseConfig';
import UserDetailScreen from '../views/UserDetailScreen';
import Prueba from '../views/Prueba';
//import Avatar from '../components/avatar'


const views = {
  HomeStudent: {
    screen: HomeStudent,
    navigationOptions: ({ navigation }) => {
      const irdetalles = () => {
        navigation.navigate('UserDetailScreen');
      };
      return ({
        title: "Estudiante",
        headerStyle: {
          backgroundColor: '#475B6F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity style={{ padding: 20 }} onPress={() => firebaseConfig.auth().signOut()} >
            <Text style={{ color: '#fff', fontWeight: 'bold' }} >Salir</Text>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => irdetalles()} >
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={require('../../assets/edit.png')}
            />
          </TouchableOpacity>
        ),
      })
    },
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
  ActivitiesSchool: {
    screen: ActivitiesSchool,
    navigationOptions: ({ navigation }) => ({
      title: "Actividades de la Escuela",
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
  UserDetailScreen: {
    screen: UserDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Detalles de usuario",
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

  Prueba1: {
    screen: Prueba,
    navigationOptions: ({ navigation }) => ({
      title: "Test",
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

const HomeEstack = createStackNavigator(views);

export default createAppContainer(HomeEstack);