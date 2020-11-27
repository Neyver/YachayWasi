import React, { Component } from 'react';
import * as firebase from 'firebase/app';
//import firebase from '../database/firebase'
//import 'firebase/firestore';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import Textarea from 'react-native-textarea';
import DatePicker from 'react-native-modal-datetime-picker'




const db = firebase.app();

class NoticeForm extends Component{
    
    state = {
        notice:'',
        description:'',
        date:'',
        visibility:false,
    }

    onBottomPress = () => {
        let response = db.firestore().collection('Avisos').add({
            Aviso: this.state.notice,
            Descripcion: this.state.description,
            Fecha: this.state.date,
        }
            
        );

        
        
    }
    
    handleConfirm=(date)=>{
        this.setState({date:date})
    }

    onPressCancel=()=>{
        this.setState({visibility:false})
    }
    openDate=()=>{
        this.setState({visibility:true})
    }

    render(){
        return (
            <View style={styles.container} >
                <TextInput
                    placeholder="Título"
                    value={this.state.notice}
                    style={styles.input}
                    onChangeText={notice => this.setState({notice})} 
                />
                <TextInput
                    placeholder={'Descripción. . . '}
                    multiline={true}
                    numberOfLines={25}
                    maxLength={500}
                    style={styles.textarea}
                    onChangeText={description => this.setState({description})}
                    
                />
                <TouchableOpacity style={styles.buttonDateContainer} onPress={this.openDate}>
                    <Text> Fecha </Text>
                </TouchableOpacity>
                <DatePicker
                    isVisible={this.state.visibility}
                    onConfirm={this.handleConfirm}
                    onCancel={this.onPressCancel}
                />
                {/*<Textarea
                    containerStyle={styles.textareaContainer}
                    style={styles.textarea}
                    onChangeText={description => this.setState({description})}
                    defaultValue={this.state.description}
                    maxLength={120}
                    placeholder={'Descripción。。。'}
                    placeholderTextColor={'#c7c7c7'}
                    underlineColorAndroid={'transparent'}
                />
                

                <TextInput
                    placeholder="Descripcion"
                    value={this.state.description}
                    style={styles.inputArea}
                    onChangeText={description => this.setState({description})}
                />

                {/*<DatePicker
                        style={{width: 200, marginBottom:10}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        
                        onDateChange={date => this.setState({date})}
                    />*/}

                <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress} >
                    <Text style={styles.buttonText}>Agragar Aviso</Text>
                </TouchableOpacity>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,.5)',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 15,
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
        backgroundColor: 'rgba(255,255,255,.5)',
        paddingLeft: 10,
        paddingTop: 10,
        marginBottom: 15,
      },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonContainer: {
        backgroundColor: '#3B3B98',
        padding: 10,
        borderRadius: 8
    },
    buttonDateContainer: {
        backgroundColor: 'rgba(255,255,255,.5)',
        marginBottom: 15,
        width: 70
    }
});

export default NoticeForm;