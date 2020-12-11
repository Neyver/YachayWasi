import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as firebase from 'firebase/app';

import ItemNotas from "./../components/ItemNotas";

const db = firebase.app();

const NotasTeacher = ({ navigation }) => {
  const [array, onChangeArray] = useState([]);
  const [Type, onChangeType] = useState('CB');

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

  const items = array.map((option, key) => {
    return <ItemNotas key={key} name={option.Estudiante} nota={option[Type]} disabled={false} />
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
          onPress={() => { onPress("PB") }}
        >
          <Text>PB</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { onPress("SB") }}
        >
          <Text>SB</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { onPress("TB") }}
        >
          <Text>TB</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { onPress("CB") }}
        >
          <Text>CB</Text>
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