import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image, Slider, Button } from 'react-native';
import Carousel from '../components/Carousel'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
const images = [
  'https://c4.wallpaperflare.com/wallpaper/912/238/496/architecture-artistic-buildings-castle-wallpaper-preview.jpg',
  'https://c0.wallpaperflare.com/preview/638/482/358/castle-lawn-great-britain-england.jpg',
  'https://c4.wallpaperflare.com/wallpaper/1000/780/17/knowledge-mathematics-students-university-wallpaper-preview.jpg',
  'https://c1.wallpaperflare.com/preview/544/345/284/library-books-knowledge-information.jpg',
  'https://c1.wallpaperflare.com/preview/160/500/36/various-college-education-learning.jpg',
];
//const db = firebase.app();
const Home = ({ navigation }) => {
  //console.log("ssssssss");
  // var tipoUsuario="";
  // const usr = db.firestore().collection('Usuario').doc("usuario0");
  // var docRef = db.firestore().collection("Usuario").doc("usuario0");
  //   docRef.get().then(function(doc) {
  //       if (doc.exists) {
  //           tipoUsuario = doc.data().Rol;
  //         } else {
  //           // doc.data() will be undefined in this case
  //           console.log("No such document!");
  //       }
  //   }).catch(function(error) {
  //       console.log("Error getting document:", error);
  //   });
  //   console.log(tipoUsuario);

  const pressHandler = () => {
    navigation.navigate('EmailAndPassword');
  }

  return (

    <View style={styles.container}>
      <Text style={styles.textTitle}>Unidad Educativa Cositas React-Native</Text>
      <Carousel images={images} style={styles.containerCarousel}></Carousel>
      <View style={styles.containerButton}>
        <Button title="Iniciar Sesion"
          color="#51CDD7"
          style={styles.buttonIni}
          onPress={pressHandler}
        ></Button>
      </View>
      <Text style={styles.textDescription}>
        Lorem ipsu sfovjndfkl dsodslk neo weo
          </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textTitle: { flex: 1, textAlign: "center", marginTop: 12 },
  container: { flex: 1, backgroundColor: "#4F728E" },
  containerCarousel: { flex: 4 },
  containerButton: { flex: 3, alignSelf: "center", justifyContent: "center" },
  buttonIni: { padding: 10 },
  textDescription: { textAlign: "center", flex: 3 }
});

export default Home