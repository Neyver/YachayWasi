import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import { StyleSheet, View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles} from '../styles/styles.js' ;
const db = firebase.app();

const Horario = ({ navigation }) => {
  const name = navigation.state.params.userName;
  const [array, onChangeArray] = useState([]);

  useEffect(() => {
    getHorarios();
  }, []);
  const getHorarios = async () => {
    let aux = [];
    let curso = [];
    const response1 = await db.firestore().collection('Estudiante').where('Nombre', '==', name).get();
    response1.forEach(document => {
      curso = document.data().Curso;
    })
    const response = await db.firestore().collection('Horario').where('Curso', '==', curso).get();
    response.forEach(document => {
      aux.push(document.data());
    })
    onChangeArray(aux);
  };

  const diaUno = array.filter((option) => {
    return option.Periodo === 1
  });
  const horaDos = array.filter((option) => {
    return option.Periodo === 2
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
    return option.Periodo === 4
  });
  const horaCinco = array.filter((option) => {
    return option.Periodo === 5
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

export default Horario;