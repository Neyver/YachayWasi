import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Card from '../components/card';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import NoticeFrom from "../components/NoticeForm";
import { render } from 'react-dom';

const db = firebase.app();

const NoticesSchool = ({ navigation }) => {


  const onBottomPress = () => {
    navigation.navigate('CreateNotice');
  }

  const onBottonForm = () => {
    navigation.navigate('login');
  }

  const onUpdateNotice = (key) => {
    navigation.navigate('CreateNotice');
  }

  const [ListNotices, setListNotices] = useState([])

  useEffect(() => {
    getActivities();
  }, [])

  const getActivities = async () => {
    let list = [];
    const response = await db.firestore().collection('Aviso').get();


    response.forEach(document => {
      let id = document.id
      let date = document.data().Fecha
      let descripcion = document.data().Descripcion
      let aviso = document.data().Aviso
      let obj = { id, aviso, descripcion, date }
      list.push(obj);
    })
    setListNotices(list)
  }
  const createItem = ({ item }) => {


    return (
      <TouchableOpacity
        onPress={() => onUpdateNotice(item.id)}
      >
        <Card
          Title={item.aviso}
          Contenido={item.descripcion}
          Date={item.date + ""}
        />
      </TouchableOpacity>

    );


  }

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerCard}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onBottomPress} >
          <Text style={styles.buttonText}>Crear un Aviso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={onBottonForm} >
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
        <FlatList
          data={ListNotices}
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
  },
  buttonContainer: {
    backgroundColor: '#3B3B98',
    padding: 5,
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
});

export default NoticesSchool;