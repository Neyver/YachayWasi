import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/EmailAndPassword';
import HomeTeacher from './app/views/HomeTeacher';
import firebase from './utils/firebase';

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
        return <Home></Home>

      case true:
        return <HomeTeacher />

      default:
        return <HomeTeacher />
    }
  }
  return (
    <View style={styles.container}>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});