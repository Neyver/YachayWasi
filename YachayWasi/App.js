import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import 'firebase/firestore';

import firebaseConfig from './utils/firebaseConfig';
import Navigatorl from './app/routes/loginStack';
import Navigator from './app/routes/homeStack';

import UserLogin from './app/views/user_login.js';

export default function App() {
  const [loggedIn, onChangeLog] = useState(false);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      if (user) {
        onChangeLog(true)
      } else {
        onChangeLog(false)
      }
    })
  });

  if (loggedIn == true) {
    return (
      <Navigator name="neyver"></Navigator>
    );
  } else {
    return (
      <Navigatorl></Navigatorl>
    );
  }

}
