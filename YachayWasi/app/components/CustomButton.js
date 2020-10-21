import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
//const book = '../assets/book.png';
import book from '../assets/book.png'
var colorButton = "blue";
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
    <TouchableHighlight onPress={action}>
      <View style={[styles.button, colorStyles]}>
        <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 45,
    height: 45,
  },
  button: {
    flex: 2,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  container: {
    flex: 0.3,
    justifyContent: "center",
    paddingRight: 10,
  },
  containerText: {
    flex: 0.5,
  },
  innerText: {
    color: '#FFFFFF',
    fontSize: 20,
  }
});

export default CustomButton;