import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, RefreshControl } from 'react-native'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Avatar from '../components/avatar';
// import { styles} from '../styles/styles.js' ;
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
      //name: user.name,
      //email: user.email,
      Nombre: user.name,
      Correo: user.email,
      Telefono: user.phone,
      Foto: usuario.Foto,
      Rol: usuario.Rol,
      Contrasenia: usuario.Contrasenia
    });
  };


  const hm = () => {
    console.log(Texto1);
  }



  const [disable_text, edit] = React.useState(false);
  return (
    
    <View style={styles.container}>
      <View style={styles.hoja}>
      
      <Avatar name={user.name} linkphoto={user.photo} ></Avatar>

      <View style={styles.body}>
        <View style={styles.container1}>
          <View style={{ left: 100 }}>
            <Button title="Editar" color="rgba(91,132,168,100)" onPress={() => { edit(true) }}></Button>
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
            <Button title="GUARDAR" color="rgba(91,132,168,100)" onPress={() => updateUser()}></Button>
          </View>
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
  hoja: {
    margin:20,
    height:700,
    backgroundColor: '#2E4053'
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