import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import * as firebase from 'firebase/app';

import firebaseConfig from './utils/firebaseConfig';
import Navigatorl from './app/routes/loginStack';
import NavigatorT from './app/routes/homeTstack';
import NavigatorP from './app/routes/homePstack';
import NavigatorS from './app/routes/homeEstack';

import UserLogin from './app/views/user_login.js';

const db = firebase.app();

export default function App() {
  const [loggedIn, onChangeLog] = useState(false);
  const [newUser, onChangeNewUser] = useState({ uid: 'Cadena' });
  const [rolLogged, onChangeNrolLogged] = useState({ Rol: 'profesor' });

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      if (user) {
        onChangeLog(true);
        onChangeNewUser(user);
        getUserById(user.uid);
      } else {
        onChangeLog(false)
      }
    })
  }, []);

    const getUserById = async (id) => {
    const response = await db.firestore().collection('Usuario').doc(id);
    const documento = await response.get();
    const usuario = documento.data();
    onChangeNrolLogged(usuario);
  };

  if (loggedIn) {
     

    if (rolLogged.Rol === 'Profesor') {
      return (
        <NavigatorT />
      );
    } else if (rolLogged.Rol === 'Estudiante') {
      return (
        <NavigatorS />
      );
    } else {
      return (
        <NavigatorP />
      );
    }
  } else {
    return (
      <Navigatorl />
    );
  }

}
