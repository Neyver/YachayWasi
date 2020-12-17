import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
// import { styles} from '../styles/styles.js' ;
import NoticeCard from '../components/NoticeCard';

const db = firebase.app();

const NoticesSchool = ({ navigation }) => {
  const name = navigation.state.params.userName;

  const [ListNotices, setListNotices] = useState([])

  useEffect(() => {
    getActivities();
  }, [])

  const getActivities = async () => {
    let list = [];
    const response = await db.firestore().collection('Aviso').where('Receptor', '==', name).get();
    response.forEach(document => {
      let id = document.id
      let date = convertDate(document.data().FechaLimite)
      let descripcion = document.data().Descripcion
      let aviso = document.data().Titulo
      let obj = { id, aviso, descripcion, date }
      list.push(obj);
    })
    setListNotices(list)
  }

  const convertDate = (date) => {
    if (date == "") {
      return "Fecha no definida";
    }
    let dateLocal;
    dateLocal = date.toDate();
    var d = dateLocal.toString()
    return d.substr(0, 21);
  }

  const createItem = ({ item }) => {
    return (
      <View>
        <NoticeCard
          Title={item.aviso}
          Contenido={item.descripcion}
          Date={item.date + ""}
        />
      </View>
    );
  }

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerCard}>
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
    backgroundColor: 'rgb(89, 217, 157);',
    padding: 5,
    borderRadius: 23,
    marginLeft: 250
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  buttonDelete: {
    backgroundColor: 'rgb(179, 11, 26)',
    padding: 5,
    borderRadius: 20,
    width: 50,
    marginLeft: 10,
  }
});

export default NoticesSchool;