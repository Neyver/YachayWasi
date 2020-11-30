//import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Login from '../components/login.js'

export default class UserLogin extends React.Component{
    render(){
        return(
            <View style={styles.containerLogo} >
                <Login/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerLogo: {
        flex:1,
        alignItems: "center",
        backgroundColor: 'rgba(64, 97, 115, 100)',
        width: '100%'
    }
});


