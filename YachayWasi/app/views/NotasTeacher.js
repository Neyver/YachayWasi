import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as firebase from 'firebase/app';

import ItemNotas from "./../components/ItemNotas";

const db = firebase.app();

const NotasTeacher = ({ navigation }) => {
  const [array, onChangeArray] = useState([]);
  const [Type, onChangeType] = useState('CBimestre');

  const curso = navigation.state.params.type;
  const name1 = navigation.state.params.profe;
  const onPress = (id) => { onChangeType(id) };

  useEffect(() => {
    getCalificaciones();
  }, []);

  const getCalificaciones = async () => {
    let aux = [];
    const response = await db.firestore().collection('Calificacion')
      .where('Curso', '==', curso)
      .where('Profesor', '==', name1).get();
    response.forEach(document => {
      aux.push(document.data());
    })
    onChangeArray(aux);
  };

  const press = (object, value) => {
    object[Type] = value;
    updateCalificaciones(object);
  };

  const updateCalificaciones = async (object) => {
    const response = await db.firestore().collection('Calificacion')
      .where('Curso', '==', object.Curso)
      .where('Estudiante', '==', object.Estudiante)
      .where('Profesor', '==', object.Profesor)
      .get();
    response.forEach(document => {
      db.firestore().collection('Calificacion').doc(document.id).update(object);
    })
  };

  const items = array.map((option, key) => {
    return <ItemNotas key={key} name={option.Estudiante} nota={option[Type]} onclick={press} object={option} />
  });

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: "row",
        padding: 20,
        paddingTop: 0
      }}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => { onPress("PBimestre") }}
        >
          <Text>Practicas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { onPress("SBimestre") }}
        >
          <Text>Participacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { onPress("TBimestre") }}
        >
          <Text>Examen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { onPress("CBimestre") }}
        >
          <Text>Exposicion</Text>
        </TouchableOpacity>
      </View>
      { items}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#4F728E",
    height: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderColor: "#20232a",
    borderWidth: 1,
  },

});

export default NotasTeacher;