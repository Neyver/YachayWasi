import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Avatar from '../components/avatar';

import firebaseConfig from '../../utils/firebaseConfig';

const db = firebase.app();

const UserDetailScreen = (props) => {
  const [Texto1, onChangeText1] = useState('');
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(user => {
      onChangeText1(user.uid)
      getUserById(user.uid)
    })
  }, []);

  const [user, setUser] = useState({
    id: 'Aqui tiene el ide',
    name: 'Aqui otra cosa',
    email: 'fsdafa',
    phone: 'fsadf',
    photo: 'fdf',
  })

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  }

  const getUserById = async (id) => {

    const response = await db.firestore().collection('Usuario').doc(id);
    const documento = await response.get();
    const usuario = documento.data();

    setUser({
      ...user,
      id: Texto1,
      email: usuario.Correo,
      name: usuario.Nombre,
      phone: usuario.Telefono,
      photo: usuario.Foto
    })

  };

  const hm = () => {
    console.log(Texto1);
  }
  const [disable_text, edit] = React.useState(false);
  return (

    <View style={styles.container}>

      <View style={styles.header} >
        <TextInput placeholder="" placeholderTextColor="white" maxLength={15} value={Texto1} onChangeText={text => onChangeText1(text)}
          style={{ borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 7 }}
        >
        </TextInput>
        <Button title="Mostrar" color="rgba(91,132,168,100)" onPress={hm}></Button>
      </View>
      <Avatar name={user.name} linkphoto={user.photo} ></Avatar>

      <View style={styles.body}>
        <View style={styles.container1}>
          <View style={{ left: 100 }}>
            <Button title="Editar" color="rgba(91,132,168,100)" onPress={edit}></Button>
          </View>
          <View style={styles.row}>

            <Text style={styles.textColor} >
              Nombre de Usuario:</Text>
            <TextInput editable={disable_text} placeholder="" placeholderTextColor="white" maxLength={15} value={user.name} onChangeText={(value) => handleChangeText("name", value)}
              style={{ borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 7 }}
            >
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.textColor}>
              Numero Telefónico:</Text>
            <TextInput editable={disable_text} placeholder="" placeholderTextColor="white" maxLength={10} value={user.phone} onChangeText={(value) => handleChangeText("phone", value)}
              style={{ borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 7 }}
            >
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.textColor}>
              Correo Electronico:</Text>
            <TextInput editable={disable_text} placeholder="" placeholderTextColor="white" maxLength={30} value={user.email} onChangeText={(value) => handleChangeText("email", value)}
              style={{ borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 7 }}
            >
            </TextInput>
          </View>
          <View style={{ marginTop: 10, }}>
            <Button title="GUARDAR" color="rgba(91,132,168,100)"></Button>
          </View>
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
    color: 'white',
    padding: 10,

  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -100
  },
  header: {
    flex: 0.2,
    alignItems: 'center',

  },
})
export default UserDetailScreen 