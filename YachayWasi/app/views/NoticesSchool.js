import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import NoticeCard from '../components/NoticeCard';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import Icon from 'react-native-vector-icons/Feather';

const db = firebase.app();

const NoticesSchool = ({ navigation }) => {
  const name = navigation.state.params.userName;

  const onBottomPress = () => {
    navigation.navigate('CreateNotice');
  }

  const onBottonForm = () => {
    navigation.navigate('login');
  }

  const onUpdateNotice = (key) => {
    navigation.navigate('CreateNotice');
  }

  const onDeleteNotice = (key) => {
    const response = db.firestore().collection('Aviso').doc(key).delete().then(
      function () {
        console.log("Aviso eliminada correctamente");
        
      }
    ).catch(
      function (error) {
        console.error("Error en eliminar",error);
      }
    )
    getActivities();

  }

  const [ListNotices, setListNotices] = useState([])

  useEffect(() => {
    getActivities();
  }, [])

  const getActivities = async () => {
    let list = [];
    const response = await db.firestore().collection('Aviso').where('ProfesorEmisor', '==', name).get();
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
    console.log(date);
    if (date == "") {
      return "Fecha no definida";
    }
    let dateLocal;
    dateLocal = date.toDate();
    console.log(dateLocal);
    var d = dateLocal.toString()
    console.log(d);
    return d.substr(0, 21);
  }

  const createItem = ({ item }) => {


    return (
      <View>

          <TouchableOpacity style={styles.buttonDelete} onPress={() => onDeleteNotice(item.id)} >
            <Icon name="delete" size={18} color="#ffff" />
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onUpdateNotice(item.id)}
        >
          <NoticeCard
            Title={item.aviso}
            Contenido={item.descripcion}
            Date={item.date + ""}
          />


        </TouchableOpacity>

      </View>


    );


  }

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerCard}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onBottomPress} >
          <Icon name="plus" size={35} color="#ffff" />
        </TouchableOpacity>
        {/**<TouchableOpacity style={styles.buttonContainer} onPress={onBottonForm} >
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>*/}
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
    //backgroundColor: "rgb(255, 255, 250)"
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
    marginLeft: 280,
    elevation: 20
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