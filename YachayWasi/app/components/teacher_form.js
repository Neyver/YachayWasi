import React from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';

function Form_teacher(){
    return(
        <View style={styles.container}>
         <View style={styles.row}>
            <Text style={styles.textColor} >
            Nombre de Usuario:</Text>
            <TextInput placeholder="" placeholderTextColor="white" maxLength={10} value="" 
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

export default Form_teacher;
