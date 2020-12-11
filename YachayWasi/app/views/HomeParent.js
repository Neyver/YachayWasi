
import { View, StyleSheet, Text, Button, ImagePropTypes, Image } from 'react-native';
import CustomButton from "../components/CustomButton";

import CalificacionCard from '../components/calificacionCard';
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';

const db = firebase.app();
const HomeParent = ({ navigation, user1 }) => {
  const [ListMaterias, setListMaterias] = useState([])

  useEffect(() => {
    getMaterias();
  }, [])

  const getMaterias = async () => {
    let list = [];
    const response = await db.firestore().collection('Estudiante').where("Tutor","==","Manuel Perez Rocha").get();

    response.forEach(document => {
      let id = document.id
      let curso = document.data().Curso
      let nombre = document.data().Nombre
      let tutor = document.data().Tutor
      let obj = { id, nombre, tutor, curso, curso, curso, curso}
      list.push(obj);
    })
    setListMaterias(list)
  }
  const createItem = ({ item }) => (
    <CalificacionCard
      Materia={item.nombre}
      Profesor={item.tutor}
      PBimestre={item.curso}
      SBimestre={item.curso}
      TBimestre={item.curso}
      CBimestre={item.curso}
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
    justifyContent:"center",
    alignItems: "center",
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
    container:{
      flex:1,
      justifyContent:'center',
      alignItems : 'center',
      backgroundColor :'#4F728E'
    },
  container1:{
      flexDirection : 'column',
      alignItems : 'center',
  justifyContent : 'center',
  },
  row :{
      flexDirection : 'row' 
    },
    textColor : {
      fontWeight: 'bold',
      margin:8,
      color: '#FFFFFF',
      fontSize: 24,
      
    }, 
    body:{
      flex:0.5,
      //backgroundColor:'yellow',
      justifyContent:'center',
      alignItems : 'center',
      top: -100
     },
     header:{
      flex: 0.2,
      //backgroundColor:"red",
      alignItems : 'center',
      
    },
    innerText: {
      color: '#FFFFFF',
      fontSize: 24,
    },
    propsbutton:{
      alignItems : 'center',
      justifyContent:'center', 
      backgroundColor:'goldenrod',
      elevation:4,
      height:65, 
      width:300,
      borderRadius:6,
      margin:8
    }

})
export default HomeParent;