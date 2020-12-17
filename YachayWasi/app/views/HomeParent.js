
import { View, StyleSheet, Text, Button, ImagePropTypes, Image } from 'react-native';
import CustomButton from "../components/CustomButton";

import CalificacionCard from '../components/calificacionCard';
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import firebaseConfig from '../../utils/firebaseConfig';
import { styles} from '../styles/styles.js' ;
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

  var getRandomColor = function () {
    let listCol =['#DB6D8C','#51CDD7','#D4C84C','#4CD472']
    console.log(getRandomInt(0, 4)); 
    return listCol[getRandomInt(0, 4)];
  };
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
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
      color={getRandomColor()}
      key={uriIcon}
    />
  );

  return (
    <View style={styles.containerHome}>
    <View style={styles.containerHomeElements}>
      <View style={styles.containerWelcom}>
      </View>
      <View style={styles.containerButtons}>
        <FlatList
          data={ListMaterias}
          renderItem={createItem}
          keyExtractor={item => item.id}
        />
      </View>
      </View>
    </View>
  );
}
export default HomeParent;
