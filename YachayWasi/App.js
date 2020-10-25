import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './app/views/Profile'
import Home from './app/views/Home'


export default function App() {
  return (
    <Home></Home>
    //<View style={styles.container}>
      //<Text>Open up App.js to start working on your app!</Text>
     // <StatusBar style="auto" />
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
