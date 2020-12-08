import 'react-native-gesture-handler';
import React, {useRef, useState, useEffect } from 'react';
import 'firebase/firestore';

import firebaseConfig from './utils/firebaseConfig';
import Navigatorl from './app/routes/loginStack';
import NavigatorT from './app/routes/homeTstack';
import NavigatorP from './app/routes/homePstack';
import NavigatorS from './app/routes/homeEstack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserLogin from './app/views/user_login.js';

export default function App() {
  const [loggedIn, onChangeLog] = useState(false);
  const [newUser, onChangeNewUser] = React.useState('');
  const [userRolU, setUserRol] = React.useState('');
  const isMounted = useRef(false);

  useEffect(() => {/*
    firebaseConfig.auth().onAuthStateChanged(user => {
      if (user) {
        onChangeLog(true);
        onChangeNewUser(user);
      } else {
        onChangeLog(false);
      }  
    })*/
    isMounted.current = true;
    const getTypeUserData = async () => {
      try {
        const value = await AsyncStorage.getItem('userRol')
        const logg = await AsyncStorage.getItem('loggInd')
        if(logg != null){
          onChangeLog(logg);
        }
        if(value !== null) {
          setUserRol(value);
        }
      } catch(e) {
      }
    }
    getTypeUserData();
    return () => isMounted.current = false;
  });
  console.log(loggedIn);
  if (loggedIn) {
    console.log("why");
    if (userRolU === 'Tutor') {
      
      return (
        <NavigatorP />
      );
    } else if (userRolU === 'Estudiante') {
      return (
        <NavigatorS />
      );
    } else {
      return (
        <NavigatorT />
      );
    }
  } else {
    return (
      <Navigatorl />
    );
  }

}
