import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import { StyleSheet, View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import firebaseConfig from '../../utils/firebaseConfig';

const db = firebase.app();

const Horario = () => {
  const [name, onChangeName] = useState('');
  const [array, onChangeArray] = useState([]);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      getUserById(user.uid);
      getHorarios();
    })
  }, []);
  const getUserById = async (id) => {
    const response = await db.firestore().collection('Usuario').doc(id);
    const documento = await response.get();
    const usuario = documento.data();
    onChangeName(usuario.Nombre);
  };

  const getHorarios = async () => {
    let aux = [];
    const response = await db.firestore().collection('Horario').get();
    response.forEach(document => {
      aux.push(document.data());
    })
    onChangeArray(aux);
  };

  const diaUno = array.filter((option) => {
    return option.Periodo === 1 && name === option.Profesor
  });
  const horaDos = array.filter((option) => {
    return option.Periodo === 2 && name === option.Profesor
  });
  const horaTres = [
    {
      name: 'R'
    },
    {
      name: 'E'
    },
    {
      name: 'C'
    },
    {
      name: 'R'
    },
    {
      name: 'E'
    },
    {
      name: 'O'
    },
  ]
  const horaCuatro = array.filter((option) => {
    return option.Periodo === 4 && name === option.Profesor
  });
  const horaCinco = array.filter((option) => {
    return option.Periodo === 5 && name === option.Profesor
  });

  const header = [
    {
      name: 'hora'
    },
    {
      name: 'Luenes'
    },
    {
      name: 'Martes'
    },
    {
      name: 'Miercoles'
    },
    {
      name: 'Jueves'
    },
    {
      name: 'Viernes'
    },
  ];

  const createItem = (array) => array.map((option, index) => {
    if (option.Dia) {
      return (
        <Col key={index} style={[styles.col, { backgroundColor: option.Color }]}>
          <View>
            <Text style={styles.name}>{option.Materia}</Text>
            <Text style={styles.description}>{option.Aula}</Text>
          </View>
        </Col >
      );
    }
    else {
      return (
        <Col key={index} style={styles.col}><Text>{option.name}</Text></Col>
      );
    }
  });

  return (
    <View style={styles.container}>
      <Grid>
        <Row size={0.3}>{createItem(header)}</Row>
        <Row>{createItem([{ name: "1" }, ...diaUno])}</Row>
        <Row>{createItem([{ name: "2" }, ...horaDos])}</Row>
        <Row size={0.3}>{createItem(horaTres)}</Row>
        <Row>{createItem([{ name: "4" }, ...horaCuatro])}</Row>
        <Row>{createItem([{ name: "5" }, ...horaCinco])}</Row>
      </Grid>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    paddingTop: 30,
    backgroundColor: '#ffffff'
  },
  col: {
    borderWidth: 1,
    borderColor: '#CFCBC9',
    textAlign: "center",
    padding: 2,
  }
});
export default Horario;