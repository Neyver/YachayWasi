import React, { Component } from 'react'
import {Button, Text, TextInput, View, Image,  StyleSheet} from 'react-native'



function Login(){
    return(
        <View style={styles.containerLogin}>
            <View style={styles.containeLogo}>
                <Image source={require('../../assets/person_icon.png')} style={styles.logo}/>
            </View>
            
                <TextInput 
                    placeholder="Usuario" 
                   
                    style={styles.input}
                ></TextInput>
                <TextInput 
                    secureTextEntry 
                    placeholder="Contraseña" 
                    /*placeholderTextColor="white"*/
                    style={styles.input}  
                ></TextInput>
                <Text style={{color:'white', marginLeft:10, marginBottom:10}}>olvidó su contraseña?</Text>
                <View style={styles.button}>
                    <Button  
                    title="INGRESAR"
                    color = '#'
                    />
                </View>
                
                <View style={styles.button}>
                    <Button  
                    title="CANCELAR"
                    color = '#'
                    />
                </View>
            
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    containerLogin:{
        flex: 1,
        padding: 20
    },
    logo :{
        width: 90,
        height: 90,
        borderRadius: 50,
        resizeMode: "contain",
        marginTop:15,
        
    },
    containeLogo: {
        alignItems: 'center',
        marginBottom: 35
    },
    containerTwo:{
        marginTop: 50,
        marginBottom: 50,
        width: 300
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,.5)',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 15
    },
    button: {
        backgroundColor: 'rgba(91, 132, 168, 100)',
        padding: 5,
        borderRadius: 8,
        marginBottom: 15
    }
});

