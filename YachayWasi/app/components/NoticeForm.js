import React, { Component } from 'react';
import * as firebase from 'firebase/app';
//import firebase from '../database/firebase'
//import 'firebase/firestore';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import Textarea from 'react-native-textarea';
//import DatePicker from 'react-native-modal-datetime-picker'
//import DatePicker from 'react-native-datepicker'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import firebaseConfig from '../../utils/firebaseConfig';



const db = firebase.app();


class NoticeForm extends Component {

  state = {
    notice: '',
    description: '',
    date: '',
    visibility: false,
    student: '',
    teacher: '',
    studentByID: [],
    navigation: ''
  }

  constructor(props) {
    super(props);
    firebaseConfig.auth().onAuthStateChanged(user => {
      this.getStudents(user.id);
      this.getUserById(user.uid);
      this.setState({ navigation: props });
    })
  }

  conponentDidMount() {
    firebaseConfig.auth().onAuthStateChanged(user => {
      getUserById(user.uid);
      this.getStudents(user.id);
    })
  }

  async getUserById(id) {
    let response = await db.firestore().collection('Usuario').doc(id)
    let document = await response.get();
    this.setState({ teacher: document.data().Nombre });
  }

  async getStudents(id) {
    let response = await db.firestore().collection('Estudiante').get();
    let listStudent = [];
    response.forEach(document => {
      let label = document.data().Nombre + " " + document.data().Curso;
      let value = document.data().Nombre;
      let icon = () => <Icon name="plus" size={18} color="#900" />

      let obj = { label, value, icon }
      listStudent.push(obj);
    })
    this.setState({ studentByID: listStudent })
  }

  onBottomPress = () => {
    db.firestore().collection('Aviso').add({
      Titulo: this.state.notice,
      Descripcion: this.state.description,
      FechaLimite: this.state.date,
      Receptor: this.state.student,
      ProfesorEmisor: this.state.teacher,
      TipoEnvio: 'Privado'
    }).
      then(function (docRef) {
        console.log("Se agregó correctamente");
        //this.state.navigation.navigate('NoticesSchool');
      }).
      catch(function (error) {
        console.error("ocurrió un error");
      });

  }

  /*onUpdatePress = (index) => {
      document.getElementById('tittle').value = "Actualizado";
      document.getElementById("description").value = "Description";
  }*/

  handleConfirm = (date) => {
    this.setState({ date: date })
  }

  onPressCancel = () => {
    this.setState({ visibility: false })
  }
  openDate = () => {
    this.setState({ visibility: true })
    /*items={[
        {label: 'Leonardo', value: 'Leonardo', icon: () => <Icon name="plus" size={18} color="#900" />},
        {label: 'Cosmefulano', value: 'Cosmefulanito', icon: () => <Icon name="plus" size={18} color="#900" />},
    ]}*/
  }

  render() {
    return (
      <View style={styles.container} >
        <TextInput
          title="title"
          placeholder="Título"
          value={this.state.notice}
          style={styles.input}
          onChangeText={notice => this.setState({ notice })}
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
          title="description"
          placeholder={'Descripción. . . '}
          multiline={true}
          numberOfLines={25}
          maxLength={500}
          style={styles.textarea}
          onChangeText={description => this.setState({ description })}

        />

        {/*<DatePicker
                    style={{width: 200}}
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
                    onDateChange={(date) => {this.setState({date: date})}}
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