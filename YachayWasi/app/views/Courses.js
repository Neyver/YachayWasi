import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Form_teacher from '../components/teacher_form'
import Avatar from '../components/avatar';
import Card from '../components/card';
import { FlatList } from 'react-native-gesture-handler';

import firebaseConfig from '../../utils/firebaseConfig';

const db = firebase.app();

const Courses = (props) => {
  const [Texto1, onChangeText1] = React.useState('');
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      onChangeText1(user.uid)
      //getDetailsUser()
      getUserById(user.uid)

    })

  }, []);
  const [ListCourses, setListCourses] = useState([]);
  const [user, setUser] = useState({
    id: 'ID',
    name: 'Nombre',
    email: 'Correo',
    phone: 'Telefono',
    photo: 'Foto',
  });

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  }

  const getDetailsUser = async () => {
    let list = [];
    const response = await db.firestore().collection('users').get();

    response.forEach(document => {
      let id = document.id
      let name = document.data().name
      let email = document.data().email
      let phone = document.data().phone
      let obj = { id, name, email, phone }
      list.push(obj);
      setUser({
        ...user,
        id: user.ui,
      })
    })
  }
  const getUserById = async (id) => {
    let list = [];
    const response = await db.firestore().collection('users').doc(id);
    const documento = await response.get();
    const usuario = documento.data();
    const cursos = await db.firestore().collection('users').doc(id).collection('courses').get();

    cursos.forEach(curso => {
      let id = curso.id
      let nombre = curso.data().name
      let obj = { id, nombre }
      list.push(obj)
    })
    setListCourses(list)

    setUser({
      ...user,
      id: Texto1,
      email: usuario.email,
      name: usuario.name,
      phone: usuario.phone,
      photo: usuario.photo
    })

  };
  const createItem = ({ item }) => (
    <View style={styles.propsbutton}

    >
      <Text style={styles.innerText}>{item.nombre}</Text>
    </View>
  );

  const [disable_text, edit] = React.useState(false);
  return (

    <View style={styles.container}>

      <View style={styles.header} >

        <Text style={styles.textColor} >
          {user.name}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.container1}>
          <View style={styles.row}>


          </View>
          <FlatList
            data={ListCourses}
            renderItem={createItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F728E'
  },
  container1: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  textColor: {
    fontWeight: 'bold',
    margin: 8,
    color: '#FFFFFF',
    fontSize: 24,

  },
  body: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    top: -100
  },
  header: {
    flex: 0.2,
    alignItems: 'center',

  },
  innerText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  propsbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'goldenrod',
    elevation: 4,
    height: 65,
    width: 300,
    borderRadius: 6,
    margin: 8
  }

})
export default Courses