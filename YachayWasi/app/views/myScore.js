import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import CalificacionCard from '../components/calificacionCard';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';

const db = firebase.app();

const MyScore = ({ navigation }) => {
  const [ListMaterias, setListMaterias] = useState([])

  useEffect(() => {
    getMaterias();
  }, [])

  const getMaterias = async () => {
    let list = [];
    const response = await db.firestore().collection('Calificacion').where("Estudiante","==","Ginny Perez Quiroga").get();

    response.forEach(document => {
      let id = document.id
      let pBimestre = document.data().PB
      let sBimestre = document.data().SB
      let tBimestre = document.data().TB
      let cBimestre = document.data().CB
      let materia = document.data().Materia
      let profesor = document.data().Profesor
      let obj = { id, materia, profesor, pBimestre, sBimestre, tBimestre, cBimestre}
      list.push(obj);
    })
    setListMaterias(list)
  }
  const createItem = ({ item }) => (
    <CalificacionCard
      Materia={item.materia}
      Profesor={item.profesor}
      PBimestre={item.pBimestre}
      SBimestre={item.sBimestre}
      TBimestre={item.tBimestre}
      CBimestre={item.cBimestre}
    />
  );

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerCard}>
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
  containerCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "stretch",
    padding: 10,
    },
});

export default MyScore;