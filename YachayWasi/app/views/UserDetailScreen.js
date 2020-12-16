import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, RefreshControl } from 'react-native'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Avatar from '../components/avatar';

import firebaseConfig from '../../utils/firebaseConfig';
import {styles} from '../styles/styles.js';
const db = firebase.app();

const UserDetailScreen = (props) => {
  const [Texto1, onChangeText1] = useState('');
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      onChangeText1(user.uid)
      getUserById(user.uid)
    })
  }, []);
  const initialState = {

    id: '',
    name: '',
    email: '',
    phone: '',
    photo: '',
    rol: '',
    password: ''

  }
  const [user, setUser] = useState(initialState)

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  }

  const getUserById = async (id) => {

    const response = await db.firestore().collection('Usuario').doc(id);
    const documento = await response.get();
    const usuario = documento.data();

    setUser({
      ...user,
      id: documento.id,
      email: usuario.Correo,
      name: usuario.Nombre,
      phone: usuario.Telefono,
      photo: usuario.Foto,
      rol: usuario.Rol,
      password: usuario.Contraseña
    })

  };

  const updateUser = async () => {

    const response = await db.firestore().collection('Usuario').doc(user.id);
    const documento = await response.get();
    const usuario = documento.data();
    await response.set({
      Nombre: user.name,
      Correo: user.email,
      Telefono: user.phone,
      Foto: usuario.Foto,
      Rol: usuario.Rol,
      Contraseña: usuario.Contraseña
    });
  };


  const hm = () => {
    console.log(Texto1);
  }



  const [disable_text, edit] = React.useState(false);
  return (

    <View style={styles.containerUserDetail}>

      <View style={styles.headerUserDetail}>
        <View style={styles.buttonEditCenter}>
          <Button title="Editar" color="#4F728E" onPress={edit}></Button>
          <Avatar name={user.name} linkphoto={user.photo} ></Avatar>
        </View>
      </View>
      

      <View style={styles.bodyUserDetail}>
        <View style={styles.container1}>

          <View style={styles.column}>

            <Text style={styles.textColor} >
              Nombre de Usuario:</Text>
            <TextInput editable={disable_text} placeholder="" placeholderTextColor="white" maxLength={15} value={user.name} onChangeText={(value) => handleChangeText("name", value)}
              style={styles.label}
            >
            </TextInput>
          </View>
          <View style={styles.column}>
            <Text style={styles.textColor}>
              Numero Telefónico:</Text>
            <TextInput editable={disable_text} placeholder="" placeholderTextColor="white" maxLength={10} value={user.phone} onChangeText={(value) => handleChangeText("phone", value)}
              style={styles.label}
            >
            </TextInput>
          </View>
          <View style={styles.column}>
            <Text style={styles.textColor}>
              Correo Electronico:</Text>
            <TextInput editable={disable_text} placeholder="" placeholderTextColor="white" maxLength={30} value={user.email} onChangeText={(value) => handleChangeText("email", value)}
              style={styles.label}
            >
            </TextInput>
          </View>
          <View style={{ marginTop: 10, }}>
            <Button title="GUARDAR" color="#4F728E" onPress={() => updateUser()}></Button>
          </View>
        </View>
      </View>
    </View>
  )
}
export default UserDetailScreen 