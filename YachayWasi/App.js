import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EmailAndPassword from './app/components/EmailAndPassword';
import Home from './app/views/Home';
import HomeTeacher from './app/views/HomeTeacher';
import firebase from './utils/firebase';
import Navigatorl from './app/routes/loginStack';
import Navigator from './app/routes/homeStack';

export default function App() {
  const [loggedIn, onChangeLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        onChangeLog(true)
      } else {
        onChangeLog(false)
      }
    })
  });
  const renderContent = () => {
    switch (loggedIn) {
      case false:
        return <Home />
      case true:
        return <HomeTeacher />
      default:
        return <HomeTeacher />
    }
  }
  if (loggedIn == true) {
    return (
        <Navigator></Navigator>
      );  
    }else{
      return (
        <Navigatorl></Navigatorl>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});