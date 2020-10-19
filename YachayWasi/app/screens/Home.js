import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image, Slider } from 'react-native';
import Carousel from './app/components/Carousel'
const images = [
  'https://i.pinimg.com/236x/09/66/4f/09664f3441de659f26bf604a2f1f8f43.jpg',
  'https://i.pinimg.com/236x/1f/9a/44/1f9a4405c1db5d23a13d8608dfba6850.jpg',
  'https://i.pinimg.com/236x/28/b9/43/28b94382c8bea2d56afbabe1369d3b68.jpg',
  'https://i.pinimg.com/564x/9c/40/ac/9c40acb5931b72b8ace4cb446ee0d068.jpg',
  'https://i.pinimg.com/236x/0d/a7/3b/0da73b6592ba04b63385c12280d1bf6a.jpg',
];

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME</Text>
        <Carousel images = {images}></Carousel>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: { marginTop: 50},
  });