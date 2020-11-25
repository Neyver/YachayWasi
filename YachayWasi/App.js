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
  const [Texto1, onChangeText1] = React.useState('');

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      if (user) {
        onChangeLog(true)
      } else {
        onChangeLog(false)
      }
    })
  });


  let userType = 0
  if (loggedIn == true) {
    if(userType==0){
      return (
        <NavigatorT></NavigatorT>
      );
    }else if(userType==1){
      return (
        <NavigatorP></NavigatorP>
      );
    }else{
      return (
        <NavigatorS></NavigatorS>
      );
    }
  } else {
    return (
      <Navigatorl></Navigatorl>
    );
  }

}
