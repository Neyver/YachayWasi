import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const ItemNotas = ({ name, nota, disabled = true }) => {
  const [value, onChangeText] = useState(nota);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={{ height: 30, borderColor: "#20232a", borderWidth: 2, borderRadius: 6, width: 30, color: "white" }}
        onChangeText={text => onChangeText(text)}
        value={nota}
        editable={disabled}
      />
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
  }
});

export default ItemNotas;