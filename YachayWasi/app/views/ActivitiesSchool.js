import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/card';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
//import {firebaseConfig} from '../../utils/firebaseConfig';

const db = firebase.app();

const ActivitiesSchool = ({ navigation }) => {
  const [ListActivities, setListActivities] = useState([])

  useEffect(() => {
    getActivities();
  }, [])

  const getActivities = async () => {

    let list = [];
    const response = await db.firestore().collection('Actividades').get();

    response.forEach(document => {
      let id = document.id
      let date = document.data().Fecha
      let descripcion = document.data().Descripcion
      let actividad = document.data().Actividad
      let obj = {id, actividad, descripcion, date }
      list.push(obj);
    })
    setListActivities(list)
    console.log(list)
  }
  const createItem = ({item})=>(
      <Card
        Title={item.actividad}
        Contenido={item.descripcion}
        Date={item.date+""}
      />
  );

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerCard}>
        <FlatList
          data = {ListActivities}
          renderItem = {createItem}
          keyExtractor={item=>item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#888"
  },
  containerCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textWelcom: {
    fontSize: 40,
  }
});

export default ActivitiesSchool;