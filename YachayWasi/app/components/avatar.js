import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageEditor, Alert, Image } from 'react-native';

const avatar = ({ name, linkphoto }) => {
  const [name, setName] = useState(name || 'LAURA ROSEMBLUT');
  const [linkphoto, setImage] = useState(linkphoto || 'https://i.pinimg.com/564x/e0/b7/e8/e0b7e895361da676c3d709170508cc39.jpg');
  return (

    <View style={styles.moderow}>
      <View style={styles.modoflexPerfilrow}>
        <Image
          style={styles.imageProfile}
          source={{ uri: linkphoto }}
        />
        <Image
          style={styles.imageT}
          source={require('../../assets/perfil.png')}
        />

      </View>
      <Text style={styles.textColorBold}>{name}</Text>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
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
  modoflexPerfilrow: {
    flexDirection: 'row'
  },
  imageT: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 100,
    position: 'absolute',
    right: -13,
    top: 90
  },
  imageProfile: {
    width: 130,
    height: 130,
    borderRadius: 100
  },
  moderow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColorBold: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default avatar; 