import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

const App = () => {
  const onPress = () => console.log("neyver");
  const horario = [
    {
      hora: 1,
      name: 'mate',
      dia: 1,
      backgroundColor: "#6e3b6e",
      aula: 'A-001'
    },
    {
      hora: 1,
      name: 'Fisica',
      dia: 2,
      backgroundColor: "#339FFF",
      aula: 'A-001'
    },
    {
      hora: 1,
      name: 'mate',
      dia: 3,
      backgroundColor: "#6e3b6e",
      aula: 'A-001'
    },
    {
      hora: 1,
      name: 'Quimica',
      dia: 4,
      backgroundColor: "#FF8033",
      aula: 'A-001'
    },
    {
      hora: 1,
      name: 'mate',
      dia: 5,
      backgroundColor: "#6e3b6e",
      aula: 'A-001'
    },
    {
      hora: 2,
      name: 'fisica',
      dia: 1,
      backgroundColor: "#339FFF",
      aula: 'A-001'
    },
    {
      hora: 2,
      name: 'fisica',
      dia: 1,
      backgroundColor: "#339FFF",
      aula: 'A-001'
    },
    {
      hora: 2,
      name: 'fisica',
      dia: 1,
      backgroundColor: "#339FFF",
      aula: 'A-001'
    },
    {
      hora: 2,
      name: 'Quimica',
      dia: 1,
      backgroundColor: "#FF8033",
      aula: 'A-001'
    },
    {
      hora: 2,
      name: 'Quimica',
      dia: 1,
      backgroundColor: "#FF8033",
      aula: 'A-001'
    },

    {
      hora: 4,
      name: 'mate',
      dia: 1,
      backgroundColor: "#6e3b6e",
      aula: 'A-001'
    },
    {
      hora: 5,
      name: 'Fisica',
      dia: 2,
      backgroundColor: "#339FFF",
      aula: 'A-001'
    },
    {
      hora: 4,
      name: 'mate',
      dia: 3,
      backgroundColor: "#6e3b6e",
      aula: 'A-001'
    },
    {
      hora: 5,
      name: 'Quimica',
      dia: 4,
      backgroundColor: "#FF8033",
      aula: 'A-001'
    },
    {
      hora: 4,
      name: 'mate',
      dia: 5,
      backgroundColor: "#6e3b6e",
      aula: 'A-001'
    },
    {
      hora: 5,
      name: 'fisica',
      dia: 1,
      backgroundColor: "#339FFF",
      aula: 'A-001'
    },
    {
      hora: 4,
      name: 'fisica',
      dia: 1,
      backgroundColor: "#339FFF",
      aula: 'A-001'
    },
    {
      hora: 5,
      name: 'fisica',
      dia: 1,
      backgroundColor: "#339FFF",
      aula: 'A-001'
    },
    {
      hora: 4,
      name: 'Quimica',
      dia: 1,
      backgroundColor: "#FF8033",
      aula: 'A-001'
    },
    {
      hora: 5,
      name: 'Quimica',
      dia: 1,
      backgroundColor: "#FF8033",
      aula: 'A-001'
    },
  ];

  const diaUno = horario.filter((option) => {
    return option.hora === 1
  });
  const horaDos = horario.filter((option) => {
    return option.hora === 2
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
  const horaCuatro = horario.filter((option) => {
    return option.hora === 4
  });
  const horaCinco = horario.filter((option) => {
    return option.hora === 5
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
    if (option.hora) {
      return (
        <Col key={index} style={[styles.col, { backgroundColor: option.backgroundColor }]}>
          <View>
            <Text style={styles.name}>{option.name}</Text>
            <Text style={styles.description}>{option.aula}</Text>
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
export default App;