import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import 'firebase/firestore';

import firebaseConfig from './utils/firebaseConfig';
import Navigatorl from './app/routes/loginStack';
import NavigatorT from './app/routes/homeTstack';
import NavigatorP from './app/routes/homePstack';
import NavigatorS from './app/routes/homeEstack';

export default function App() {
  const [loggedIn, onChangeLog] = useState(false);
  const [newUser, onChangeNewUser] = React.useState('');

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      if (user) {
        onChangeLog(true);
        onChangeNewUser(user);
      } else {
        onChangeLog(false)
      }
    })
  });

  if (loggedIn) {
    if (newUser.uid === 'dIekRraAJUSNtK5y41zp5Xghsk72') {
      return (
        <NavigatorT />
      );
    } else if (newUser.uid === 'iJzPecvIPYT4MCtEdqQGwHgme6q2') {
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
