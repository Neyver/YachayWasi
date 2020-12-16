import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';

import{ styles} from '../styles/styles.js';
const CustomButton = ({ icon, name, action, color }) => {
  var getRandomColor = function () {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const colorStyles = {
    backgroundColor: getRandomColor(),
  };
  return (
    <View style={styles.containerButton}>
      <TouchableHighlight onPress={action} >
       <View style={styles.button}> 
        <View style={styles.containerIconButton}>
          <Image
            style={styles.logo}
            source={{
              uri: icon,
            }}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.innerText}>{name}</Text>
        </View>
      </View>
    </TouchableHighlight>
    </View>
  );
}


export default CustomButton;