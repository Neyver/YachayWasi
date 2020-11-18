

import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, TextInput} from 'react-native'
import Form_teacher from '../components/teacher_form'
import Avatar from '../components/avatar'




export default class Profile extends React.Component {
    render() {
      return (
      <View style={styles.container}>
          <View style={styles.header}>
        <Avatar></Avatar>
        </View>    
        <View style={styles.body}>       
          <Form_teacher></Form_teacher>         
      </View>
         
    </View>
        
      )
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor :'rgb(64,97,115)'
    },
     body:{
      flex:1,
      justifyContent:'center',
      alignItems : 'center',
      top: -90
     },
    header:{
      flex: 1,
      alignItems : 'center',
      justifyContent:'center',
    },
  })