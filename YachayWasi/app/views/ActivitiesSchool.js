import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/card';
import CustomButton from "../components/CustomButton";

import * as firebase from 'firebase/app';
import 'firebase/firestore';

if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig);}
const db = firebase.app();

const [ListActivities, setListActivities] = useState([])

useEffect(() => {
  getActivities()
}, [])

const getActivities = async() =>{
  let list = [];
   
}

const ActivitiesSchool = ({navigation}) => {
  const options =
    [
      {
        titulo: "Actividad 1",
        contenido: 'En esta actividad no hacemos nada',
        date: "02-10-2020"
      },
      {
        titulo: "Actividad 2",
        contenido: 'En esta actividad no hacemos nada',
        date: "02-10-2020"
      },
      {
        titulo: "Actividad 3",
        contenido: 'En esta actividad no hacemos nada',
        date: "02-10-2020"
      },
      {
        titulo: "Actividad 4",
        contenido: 'En esta actividad no hacemos nada',
        date: "02-10-2020"
      },
      {
        titulo: "Actividad 5",
        contenido: 'En esta actividad no hacemos nada',
        date: "02-10-2020"
      },
      {
        titulo: "Actividad 6",
        contenido: 'En esta actividad no hacemos nada',
        date: "02-10-2020"
      },
    ];

  const createItem = () => options.map((option) => {
    const { titulo, contenido, date } = option;
    return (
      <Card
        Title={titulo}
        Contenido={contenido}
        Date={date}
      />
    );
  });

  return (
    <View style={styles.containerHome}>
        <View style={styles.containerCard}>
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