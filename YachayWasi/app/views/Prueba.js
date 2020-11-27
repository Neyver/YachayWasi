import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
function Prueba({ state, navigation }) {
  /* 2. Get the param */
  const { user } = navigation.state.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{user}</Text>
    </View>
  );
}


export default Prueba;