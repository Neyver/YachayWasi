import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, TextInputBase } from 'react-native'
import firebase from '../database/firebase'
// import { styles} from '../styles/styles.js' ;
const CreateUserScreen = (props) => {

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value })
  }

  const saveNewUser = async () => {
    if (state.name === '') {
      alert("Plase provite a name")
    } else {
      firebase.db.collection('users').add({
        name: state.name,
        email: state.email,
        phone: state.phone
      })
      props.navigation.navigate('UsersList');
      alert('saved')
    }

  }
  return (
    <ScrollView style={styles.containerUserScreen}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Name User"
          onChangeText={(value) => setState({ ...state, name: value })}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Email User"
          onChangeText={(value) => handleChangeText('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Phone User"
          onChangeText={(value) => handleChangeText('phone', value)}
        />
      </View>
      <Button title="Save User" onPress={() => saveNewUser()}></Button>
    </ScrollView>
  )

}

export default CreateUserScreen 