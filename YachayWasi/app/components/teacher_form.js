//import React from 'react';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, Button, TextInput, ImageEditor, Alert} from 'react-native';

const teacher_form = () =>{
  
    const [Texto, onChangeText] = React.useState('');
    const [disable_text, edit] = React.useState(false);
    return(
        <View style={styles.container}>
          <View style={{left:100}}>
          <Button  title="Editar" color="rgba(91,132,168,100)" onPress={edit}></Button>
          </View>
         <View style={styles.row}>
            
            <Text style={styles.textColor} >
            Nombre de Usuario:</Text>
            <TextInput editable = {disable_text} placeholder="" placeholderTextColor="white" maxLength={10} value={Texto} onChangeText={text => onChangeText(text)} 
            style={{ borderWidth : 1, borderColor : 'white', padding :5, marginTop : 7 }}
             >
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.textColor}>
            Numero Telefónico:</Text>
            <TextInput placeholder="" placeholderTextColor="white" maxLength={10} value="" 
            style={{ borderWidth : 1, borderColor : 'white', padding :5, marginTop : 7 }}
             >
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.textColor}>
            Correo Electronico:</Text>
            <TextInput placeholder="" placeholderTextColor="white" maxLength={10} value="" 
            style={{ borderWidth : 1, borderColor : 'white', padding :5, marginTop : 7 }}
             >
            </TextInput>
          </View>
          <View style={{ marginTop : 10,}}>
          <Button  title="GUARDAR" color="rgba(91,132,168,100)"></Button>
          </View>
          
          
        </View>

       
    );
    }
  

const styles = StyleSheet.create({
    container:{
        flexDirection : 'column',
        alignItems : 'center',
    justifyContent : 'center',
    },
    row :{
        flexDirection : 'row' 
      },
      textColor : {
        color : 'white',
        padding :10
      }  
})

export default teacher_form; 
