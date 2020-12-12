
import { View, StyleSheet, Text, Button, ImagePropTypes } from 'react-native';
import CustomButton from "../components/CustomButton";

import React, { useState, useEffect } from 'react';
import 'firebase/firestore';

import firebaseConfig from '../../utils/firebaseConfig';
const HomeStudent = ({ navigation }) => {

  const [user1, onChangeText1] = React.useState('hola');

  useEffect(() => {
    console.log('funca')
    firebaseConfig.auth().onAuthStateChanged(user => {
    
     onChangeText1(user)
     console.log(user1);

    })
  });

  const irdetalles = () => {
    console.log('AAAAAAAAA')
    navigation.navigate('Prueba1', { user: "XD" });
    //console.log(navigation,user)
  }

  const options =
    [
      {
        action: () => {
          console.log()
          navigation.navigate('MyScore',{
            userUID: user1.uid  
          });
        },
        name: "Mis Notas",
        uriIcon: 'https://www.esfmjuanmisaelsaracho.edu.bo/images/especialidad.png',
        color: "#f20c0c"
      },
      {
        action: () => {
          navigation.navigate('Schedule');
        },
        name: "Horario",
        uriIcon: 'https://image.flaticon.com/icons/png/512/376/376853.png',
        color: "#5976b3"
      },
      {
        action: () => {
          navigation.navigate('ActivitiesSchool');
        },
        name: "Actividades",
        uriIcon: 'https://img.icons8.com/color/452/calendar.png',
        color: "#5976b3"
      },
      {
        action: () => { },
        name: "Avisos",
        uriIcon: 'https://images.vexels.com/media/users/3/157272/isolated/preview/e6d8b2a22f0f860af01343af96e94a8a-libros-apilados-vector-by-vexels.png',
        color: "red"
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
  }
});

export default HomeStudent;