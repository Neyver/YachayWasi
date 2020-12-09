import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, TextInputBase } from 'react-native'
import firebase from '../database/firebase'

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
    <ScrollView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
})
export default CreateUserScreen 