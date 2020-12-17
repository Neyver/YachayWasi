
import { View, StyleSheet, Text, Button, ImagePropTypes, Image } from 'react-native';
import CustomButton from "../components/CustomButton";

import CalificacionCard from '../components/calificacionCard';
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import firebaseConfig from '../../utils/firebaseConfig';

const db = firebase.app();
const HomeParent = ({ navigation }) => {
  const [name, onChangeName] = useState('');
  const [ListMaterias, setListMaterias] = useState([])

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      getUserById(user.uid);
      getHijos(user.uid);
    })
  }, []);
  const getUserById = async (id) => {
    const response = await db.firestore().collection('Usuario').doc(id);
    const documento = await response.get();
    const usuario = documento.data();
    onChangeName(usuario.Nombre);
  };


  const getHijos = async (id) => {
    let list = [];
    const response = await db.firestore().collection('Estudiante').where("Tutor", "==", id).get();

    response.forEach(document => {
      let id = document.id
      let curso = document.data().Curso
      let nombre = document.data().Nombre
      let tutor = document.data().Tutor
      let action = async () => {
        navigation.navigate('MyScore', {
          userName: nombre,
        });
      }
      let obj = { id, nombre, tutor, curso, action }
      list.push(obj);
    })
    setListMaterias(list)
  }
  const uriIcon = 'https://www.esfmjuanmisaelsaracho.edu.bo/images/especialidad.png'
  const createItem = ({ item }) => (
    <CustomButton
      icon={uriIcon}
      name={item.nombre}
      action={item.action}
      key={uriIcon}
    />
  );

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerWelcom}>
      </View>
      <View style={styles.containerHome}>
        <FlatList
          data={ListMaterias}
          renderItem={createItem}
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
})
export default HomeParent;
