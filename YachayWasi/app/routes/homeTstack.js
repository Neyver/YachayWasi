import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeTeacher from '../views/HomeTeacher';
import EmailAndPassword from '../components/EmailAndPassword';
import ActivitiesSchool from '../views/ActivitiesSchool';
import NoticesSchool from '../views/NoticesSchool';
import Horarios from '../views/Horarios';
import Cursos from '../views/Courses'
import firebaseConfig from '../../utils/firebaseConfig';
import CreateNotice from '../views/CreateNotice';
import UserDetailScreen from '../views/UserDetailScreen';
import Login from '../components/login';
import NotasTeacher from '../views/NotasTeacher';

const views = {
  HomeTeacher: {
    screen: HomeTeacher,
    navigationOptions: ({ navigation }) => {

      const irdetalles = () => {
        navigation.navigate('UserDetailScreen');
      };
      return ({
        title: "Profesor",
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
  NoticesSchool: {
    screen: NoticesSchool,
    navigationOptions: ({ navigation }) => ({
      title: "Avisos Escolar",
    }),
  },
  CreateNotice: {
    screen: CreateNotice,
    navigationOptions: ({ navigation }) => ({
      title: "Agregar Avisos"
    }),
  },
  login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: "Iniciar Sesipon"
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

  Schedule: {
    screen: Horarios,
    navigationOptions: ({ navigation }) => ({
      title: "Horario Profesor",
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
  Courses: {
    screen: Cursos,
    navigationOptions: ({ navigation }) => ({
      title: "Cursos",
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
  NotasTeacher: {
    screen: NotasTeacher,
    navigationOptions: ({ navigation }) => ({
      title: "Detalle de Notas",
      headerStyle: {
        backgroundColor: '#475B6F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    }),
  }
}


const HomeTstack = createStackNavigator(views);

export default createAppContainer(HomeTstack);