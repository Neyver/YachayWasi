import React, { Component } from 'react'
import {Button, Text, TextInput, View, Image,  StyleSheet} from 'react-native'



function Login(){
    return(
        <View style={styles.containerLogin}>
            <View>
                <Image source={require('../../assets/icon.png')} style={styles.logo}/>
            </View>
            
            <View style={styles.containerTwo}>
                <TextInput placeholder="  Usuario" placeholderTextColor="white"
                    style={{marginBottom:15, borderColor: 'white', borderWidth:3, borderRadius:40,height:30}} 
                ></TextInput>
                <TextInput textContentType="newPassword" placeholder="  Contraseña" placeholderTextColor="white"
                    style={{marginBottom:5, borderColor: 'white', borderWidth:3, borderRadius:40, height:30}}  
                ></TextInput>
                <Text style={{color:'white', marginLeft:10, marginBottom:10}}>olvidó su contraseña?</Text>
                <View style={{marginBottom:15, backgroundColor: 'rgba(91, 132, 168, 100)'}}>
                    <Button  
                    title="INGRESAR"
                    color = '#'
                    />
                </View>
                
                <View style={{marginBottom:10, backgroundColor: 'rgba(91, 132, 168, 100)'}}>
                    <Button  
                    title="CANCELAR"
                    color = '#'
                    />
                </View>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    logo :{
        width: 150,
        height: 150,
        borderRadius: 50,
        resizeMode: "contain",
        marginTop:100
    },
    containerTwo:{
        marginTop: 50,
        marginBottom: 50,
        width: 300
    },
    containerLogin:{
        width: '100%',
        alignItems: "center"
    }
});