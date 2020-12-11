import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";

const ItemNotas = ({ name, nota, onclick, object }) => {
  const aux = nota;
  const [value, onChangeText] = useState(nota);
  const press = () => {
    onclick(object, value);
  };

  useEffect(() => {
    onChangeText(nota);
  }, [nota]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={{ height: 30, borderColor: "#20232a", borderWidth: 2, borderRadius: 6, width: 30, color: "white" }}
        onChangeText={text => onChangeText(text)}
        value={value}
        maxLength={3}
        keyboardType="numeric"
      />
      {aux !== value &&
        <View onStartShouldSetResponder={press}>
          < Image
            style={styles.tinyLogo}
            source={{
              uri: 'http://www.pngmart.com/files/7/Save-PNG-Image.png',
            }}
          />
        </View>
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  text: {
    fontSize: 20,
    borderColor: "#20232a",
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: "#61dafb",
    width: 250,
  },
  tinyLogo: {
    width: 25,
    height: 25,
    marginLeft: 15,
  },
});

export default ItemNotas;