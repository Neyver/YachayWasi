

import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, TextInput} from 'react-native'
import Form_teacher from '../components/teacher_form'




export default class Profile extends React.Component {
    render() {
      return (
        <View style={styles.container}>               
        <View style={styles.body}>
          <Form_teacher/>        
        </View>

      </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container : {
      flex : 1,
      flexDirection : 'column',
      backgroundColor : 'rgba(64,97,115,100)'
    },
    
    body : {  
      flex : 4,
      alignItems : 'center',
      justifyContent : 'center',  
    },
    row :{
      flexDirection : 'row' 
    },
  })