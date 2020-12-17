import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import 'firebase/firestore';
import * as firebase from 'firebase/app';

import firebaseConfig from '../../utils/firebaseConfig';
import CustomButton from "../components/CustomButton";
const db = firebase.app();

const HomeStudent = ({ navigation }) => {
  const [usuario, onChangeUsuario] = useState({});

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      getUsuario(user.uid);
    })
  }, []);

  const getUsuario = async (uid) => {
    const response = await db.firestore().collection('Usuario').doc(uid);
    const documento = await response.get();
    const usuario = documento.data();
    onChangeUsuario(usuario);
  }

  const options =
    [
      {
        action: () => {
          navigation.navigate('MyScore', {
            userName: usuario.Nombre,
          });
        },
        name: "Mis Notas",
        uriIcon: 'https://www.esfmjuanmisaelsaracho.edu.bo/images/especialidad.png',
        color: "#f20c0c"
      },
      {
        action: () => {
          navigation.navigate('HorarioEstudent', {
            userName: usuario.Nombre,
          });
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
          navigation.navigate('AvisosStudent', {
            userName: usuario.Nombre,
          });
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
  const renderItem = ({ item }) => (
    <CustomButton
      icon={item.uriIcon}
      name={item.name}
      action={item.action}
      key={item.uriIcon}
    />
  );

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerWelcom}>
        <Text style={styles.textWelcom}>Bienvenido</Text>
      </View>
      <View style={styles.containerHome}>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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