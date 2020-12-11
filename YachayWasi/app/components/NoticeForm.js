import React, { Component } from 'react';
import * as firebase from 'firebase/app';
//import firebase from '../database/firebase'
//import 'firebase/firestore';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import Textarea from 'react-native-textarea';
import DatePicker from 'react-native-modal-datetime-picker'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import firebaseConfig from '../../utils/firebaseConfig';



const db = firebase.app();

class NoticeForm extends Component{
    
    state = {
        notice:'',
        description:'',
        date:'',
        visibility:false,
        student: '',
        teacher:'Docente',
        studentByID: [] 
    }

    constructor(props){
        super(props); 
        firebaseConfig.auth().onAuthStateChanged(user => {
            //getUserById(user.uid);
            this.getStudents(user.id);
          })
    }

    conponentDidMount() {
        firebaseConfig.auth().onAuthStateChanged(user => {
            getUserById(user.uid);
            this.getStudents(user.id);
          })
    }

    async getStudents(id){
        let response =  await db.firestore().collection('Estudiante').get();
        console.log(response);
        let listStudent = [];
        response.forEach(document => {
            let label = document.data().name;
            let value = document.data().name;
            let icon = () => <Icon name="plus" size={18} color="#900" />
            
            let obj = { label, value, icon}
            listStudent.push(obj);
          })
        this.setState( {studentByID: listStudent} )
    }

    onBottomPress = () => {
        let response = db.firestore().collection('Avisos').add({
            Titulo: this.state.notice,
            Descripcion: this.state.description,
            FechaLimite: this.state.date,
        })

    }

    /*onUpdatePress = (index) => {
        document.getElementById('tittle').value = "Actualizado";
        document.getElementById("description").value = "Description";
    }*/
    
    handleConfirm=(date)=>{
        this.setState({date:date})
    }

    onPressCancel=()=>{
        this.setState({visibility:false})
    }
    openDate=()=>{
        this.setState({visibility:true})
        /*items={[
            {label: 'Leonardo', value: 'Leonardo', icon: () => <Icon name="plus" size={18} color="#900" />},
            {label: 'Cosmefulano', value: 'Cosmefulanito', icon: () => <Icon name="plus" size={18} color="#900" />},
        ]}*/
    }

    render(){
        return (
            <View style={styles.container} >
                <TextInput
                    title = "title"
                    placeholder="Título"
                    value={this.state.notice}
                    style={styles.input}
                    onChangeText={notice => this.setState({notice})} 
                />

                <DropDownPicker
                    items={this.state.studentByID}
                    style={styles.dropContainer}
                    defaultValue={this.state.student}
                    
                    onChangeItem={item => this.setState({
                        student: item.value
                    })}
                    
                />

                <TextInput
                    title = "description"
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
        height: 190,
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
    },
    dropContainer: {
        backgroundColor: 'rgba(255,255,255,.5)',
        marginBottom: 15,
        borderRadius: 8,
        height: 40,
        fontSize: 15,
        paddingLeft: 10,
    }
});

export default NoticeForm;