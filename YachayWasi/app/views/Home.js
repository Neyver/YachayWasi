import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image, Slider, Button } from 'react-native';
import Carousel from '../components/Carousel'
const images = [
  'https://ccinformacion.ucm.es/data/cont/docs/16-2018-04-25-Aula%20B07.jpg',
  'https://web.iespplasalleabancay.edu.pe/wp-content/uploads/2019/10/servicios_61.jpg',
  'https://c4.wallpaperflare.com/wallpaper/1000/780/17/knowledge-mathematics-students-university-wallpaper-preview.jpg',
  'https://c1.wallpaperflare.com/preview/544/345/284/library-books-knowledge-information.jpg',
  'https://c1.wallpaperflare.com/preview/160/500/36/various-college-education-learning.jpg',
];

const Home = ({ navigation }) => {

  const pressHandler = () => {
    navigation.navigate('EmailAndPassword');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle1}>LABORATORIOS INFO-SIS</Text>
      <Text style={styles.textTitle}>INFO-LAB APP</Text>
      <Carousel images={images} style={styles.containerCarousel}></Carousel>
      <View style={styles.containerButton}>
        <Button title="Iniciar Sesion"
          color="#51CDD7"
          style={styles.buttonIni}
          onPress={pressHandler}
        ></Button>
      </View>
      <Text style={styles.textDescription}>
           Un laboratorio es un lugar que se encuentra equipado con los medios necesarios para llevar a cabo experimentos.
          </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textTitle: { flex: 1, textAlign: "center", color: "white", fontSize: 20 },
  textTitle1: { flex: 1, textAlign: "center", marginTop: 12, color: "white", fontSize: 25 },
  container: { flex: 1, backgroundColor: "#4F728E" },
  containerCarousel: { flex: 4 },
  containerButton: { flex: 3, alignSelf: "center", justifyContent: "center" },
  buttonIni: { padding: 10 },
  textDescription: { textAlign: "center", flex: 3, color: "white" }
});

export default Home
