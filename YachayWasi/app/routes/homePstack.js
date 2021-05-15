import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeParent from '../views/HomeParent';
import EmailAndPassword from '../components/EmailAndPassword';
import ActivitiesSchool from '../views/ActivitiesSchool';
import firebaseConfig from '../../utils/firebaseConfig';
import UserDetailScreen from '../views/UserDetailScreen';
import MyScore from '../views/myScore';

//import Avatar from '../components/avatar'

const views = {
  HomeParent: {
    screen: HomeParent,
    navigationOptions: ({ navigation }) => {

      const irdetalles = () => {
        navigation.navigate('UserDetailScreen');
      }
      return ({
        title: "Padre/Tutor",
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
      title: "Actividades de Laboratorio",
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
  MyScore: {
    screen: MyScore,
    navigationOptions: ({ navigation }) => ({
      title: "Mis calificaciones",
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

}

const HomePstack = createStackNavigator(views);

export default createAppContainer(HomePstack);