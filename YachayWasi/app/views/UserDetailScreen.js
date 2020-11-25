import React, { useEffect, useState } from 'react'
import {View, Text,StyleSheet, Button,TextInput } from 'react-native'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Form_teacher from '../components/teacher_form'
import Avatar from '../components/avatar';
//import Avatar from '../components/avatar'

const db = firebase.app();

const UserDetailScreen = (props) => {
    //console.log(props.route.params.userId)
    const [Texto1, onChangeText1] = React.useState('');

    const [user, setUser] =useState({
        id:'',
        name:'',
        email:'',
        phone:''
    })
    const getUserById = async (id) =>{
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        //console.log(doc)
        const user = doc.data();
        console.log(user)
        setUser ({
            ...user,
            id: doc.id,          
        })       
    };
    //   useEffect(()=>{
      //     getUserById(props.route.params.userId) ;  
    //},[]);

    const handleChangeText = (name,value) =>{
        setUser({...user,[name]: value });
    }  
    const hm = () => {
      console.log(Texto1);
    }
    const [disable_text, edit] = React.useState(false);
    return(

        <View style={styles.container}>
          
            <View style={styles.header} >
            <TextInput  placeholder="" placeholderTextColor="white" maxLength={15} value={Texto1} onChangeText={text => onChangeText1(text)} 
            style={{ borderWidth : 1, borderColor : 'white', padding :5, marginTop : 7 }}
             >
            </TextInput>
            <Button  title="Mostrar" color="rgba(91,132,168,100)" onPress={hm}></Button>
            </View>
            <Avatar name='Laura' linkphoto ='https://i.pinimg.com/564x/e0/b7/e8/e0b7e895361da676c3d709170508cc39.jpg' ></Avatar>

        <View style={styles.body}>            
           <View style={styles.container1}>
          <View style={{left:100}}>
          <Button  title="Editar" color="rgba(91,132,168,100)" onPress={edit}></Button>
          </View>
         <View style={styles.row}>
            
            <Text style={styles.textColor} >
            Nombre de Usuario:</Text>
            <TextInput editable = {disable_text} placeholder="" placeholderTextColor="white" maxLength={15} value={user.name} onChangeText={(value) => handleChangeText("name",value)} 
            style={{ borderWidth : 1, borderColor : 'white', padding :5, marginTop : 7 }}
             >
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.textColor}>
            Numero Telefónico:</Text>
            <TextInput editable = {disable_text} placeholder="" placeholderTextColor="white" maxLength={10} value={user.phone} onChangeText={(value) => handleChangeText("phone",value)} 
            style={{ borderWidth : 1, borderColor : 'white', padding :5, marginTop : 7 }}
             >
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.textColor}>
            Correo Electronico:</Text>
            <TextInput editable = {disable_text} placeholder="" placeholderTextColor="white" maxLength={30} value={user.email} onChangeText={(value) => handleChangeText("email",value)} 
            style={{ borderWidth : 1, borderColor : 'white', padding :5, marginTop : 7 }}
             >
            </TextInput>
          </View>
          <View style={{ marginTop : 10,}}>
          <Button  title="GUARDAR" color="rgba(91,132,168,100)"></Button>
          </View>      
        </View>             
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent:'center',
        //alignItems : 'center',
        backgroundColor :'rgb(64,97,115)'
      },
    container1:{
        flexDirection : 'column',
        alignItems : 'center',
    justifyContent : 'center',
    },
    row :{
        flexDirection : 'row' 
      },
      textColor : {
        color : 'white',
        padding :10,
        
      }, 
      body:{
        flex:1,
        //backgroundColor:'yellow',
        justifyContent:'center',
        alignItems : 'center',
        top: -180
       },
       header:{
        flex: 1,
        //backgroundColor:"red",
        alignItems : 'center',
        
      },
})
export default UserDetailScreen 