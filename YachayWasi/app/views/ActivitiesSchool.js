import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Activcard from '../components/actividadCard';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';

const db = firebase.app();

const ActivitiesSchool = ({ navigation }) => {
  const [ListActivities, setListActivities] = useState([])

  useEffect(() => {
    getActivities();
  }, [])
  
  const getActivities = async () => {
    let list = [];
    const response = await db.firestore().collection('Actividad').get();
    response.forEach(document => {
      let id = document.id
      let date =   convertDate(document.data().FechaLimite.toDate())
      let descripcion = document.data().Descripcion
      let actividad = document.data().Titulo
      let obj = { id, actividad, descripcion, date }
      list.push(obj);
    })
    setListActivities(list)
  }
  
    const convertDate = (date) => {
      var d = date.toString()
      return d.substr(0, 21);
    }
  const createItem = ({ item }) => (
    <Activcard
      Title={item.actividad}
      Contenido={item.descripcion}
      Date={item.date + ""}
    />
  );

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerCard}>
        <FlatList
          data={ListActivities}
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