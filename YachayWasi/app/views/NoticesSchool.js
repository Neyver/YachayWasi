import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Card from '../components/card';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import NoticeFrom from "../components/NoticeForm";
import { render } from 'react-dom';
import Icon from 'react-native-vector-icons/Feather';

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
    console.log(key, "update");
  }

  const onDeleteNotice = (key) => {
    console.log(key, "delete");
    const response = db.firestore().collection('Avisos').doc(key).delete().then(
      function(){
        console.log("Aviso eliminada correctamente");
        navigation.navigate('NoticesSchool');
      }
    ).catch(
      function(error){
        console.error("Error en eliminar");
      }
    )
    
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
    
    
    return(
      <View>
          
          
        <TouchableOpacity
          onPress={()=>onUpdateNotice(item.id)}
          >
            <TouchableOpacity style={styles.buttonDelete} onPress={()=>onDeleteNotice(item.id)} >
                <Icon name="delete" size={18} color="#ffff" />
          </TouchableOpacity>
          <Card
          Title={item.aviso}
          Contenido={item.descripcion}
          Date={item.date + ""}
          >
          </Card>
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
  buttonDelete:{
    backgroundColor: 'rgb(179, 11, 26)',
    padding: 5,
    borderRadius: 20,
    width: 50,
    marginLeft: 15
  }
});

export default NoticesSchool;