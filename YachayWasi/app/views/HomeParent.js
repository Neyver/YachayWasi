
import { View, StyleSheet, Text, Button, ImagePropTypes, Image } from 'react-native';
import CustomButton from "../components/CustomButton";

import React, { useState, useEffect } from 'react';
import 'firebase/firestore';

import firebaseConfig from '../../utils/firebaseConfig';
const HomeParent = ({ navigation, user1 }) => {

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      console.log(user);
    })
  });

  const irdetalles = () => {
    console.log('AAAAAAAAA')
    navigation.navigate('UserDetailScreen');
    console.log(navigation, user1)

  }

  const options =
    [
      {
        action: () => {

        },
        name: "Esteban Fuentes Cabrera",
        uriIcon: 'https://img2.freepng.es/20180320/dqe/kisspng-santa-barbara-city-college-computer-icons-student-graduation-icon-5ab0950fc6dbb7.4205234215215219358145.jpg',
        color: "#f20c0c"
      },
      {
        action: () => { },
        name: "Mario Fuentes Cabrera",
        uriIcon: 'https://img2.freepng.es/20180320/dqe/kisspng-santa-barbara-city-college-computer-icons-student-graduation-icon-5ab0950fc6dbb7.4205234215215219358145.jpg',
        color: "#5976b3"
      },
    ];

  const createItem = () => options.map((option) => {
    const { action, name, uriIcon } = option;
    return (
      <CustomButton
        icon={uriIcon}
        name={name}
        action={action}
        key={uriIcon}
      />
    );
  });

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerWelcom}>

        <Text style={styles.textWelcom}>Bienvenido</Text>
      </View>
      <View style={styles.containerHome}>
        {createItem()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#4F728E"
  },
  containerWelcom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWelcom: {
    fontSize: 40,
  },
  imageT: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 100,
    position: 'absolute',
    right: -13,
    top: 90
  },
});

export default HomeParent;