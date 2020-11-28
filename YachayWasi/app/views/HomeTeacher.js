
import { View, StyleSheet, Text, Button, ImagePropTypes } from 'react-native';
import CustomButton from "../components/CustomButton";

import React, { useState, useEffect } from 'react';
import 'firebase/firestore';

import firebaseConfig from '../../utils/firebaseConfig';
const HomeTeacher = ({ navigation, user1 }) => {

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      console.log(user);
    })
  });
  
  const irdetalles = ()=>{
    console.log('AAAAAAAAA')
    navigation.navigate('UserDetailScreen');
    console.log(navigation,user1)
    
  }

  const options =
    [
      {
        action: () => {

        },
        name: "Mis Cursos",
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
        action: () => { 
          navigation.navigate('NoticesSchool');
        },
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
        <Button title="detalles" onPress={()=>irdetalles()}></Button>
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
    backgroundColor: "#888"
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

export default HomeTeacher;