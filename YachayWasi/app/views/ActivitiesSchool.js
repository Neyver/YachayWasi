import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';

import CustomButton from "../components/CustomButton";

const ActivitiesSchool = ({navigation}) => {
  const options =
    [
      {
        action: () => { 
          
        },
        titulo: "Actividad 1",
        descripcion: 'En esta actividad no hacemos nada',
        color: "#f20c0c"
      },
      {
        action: () => { 
          
        },
        titulo: "Actividad 1",
        descripcion: 'En esta actividad no hacemos nada',
        color: "#f20c0c"
      },
      {
        action: () => { 
          
        },
        titulo: "Actividad 1",
        descripcion: 'En esta actividad no hacemos nada',
        color: "#f20c0c"
      },
      {
        action: () => { 
          
        },
        titulo: "Actividad 1",
        descripcion: 'En esta actividad no hacemos nada',
        color: "#f20c0c"
      },
      {
        action: () => { 
          
        },
        titulo: "Actividad 1",
        descripcion: 'En esta actividad no hacemos nada',
        color: "#f20c0c"
      },
      {
        action: () => { 
          
        },
        titulo: "Actividad 1",
        descripcion: 'En esta actividad no hacemos nada',
        color: "#f20c0c"
      },
    ];

  const createItem = () => options.map((option) => {
    const { action, name, uriIcon } = option;
    return (
      <CustomButton
        icon={uriIcon}
        name={name}
        key={uriIcon}
      />
    );
  });

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerHome}>
        {}
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

export default ActivitiesSchool;