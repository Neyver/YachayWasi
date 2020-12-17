import { View, StyleSheet, Text, FlatList } from 'react-native';
import CustomButton from "../components/CustomButton";
import { styles} from '../styles/styles.js' ;
import React, { useState, useEffect } from 'react';
import 'firebase/firestore';

const HomeTeacher = ({ navigation }) => {

  const options =
    [
      {
        action: () => {
          navigation.navigate('Courses');

        },
        name: "Mis Cursos",
        uriIcon: 'https://www.esfmjuanmisaelsaracho.edu.bo/images/especialidad.png',
        color: "#f20c0c"
      },
      {
        action: () => {
          navigation.navigate('Schedule');
        },
        name: "Horario",
        uriIcon: 'https://image.flaticon.com/icons/png/512/376/376853.png',
        color: "#5976b3"
      },
      {
        action: () => {
          navigation.navigate('ActivitiesSchool');
        },
        name: "Actividades",
        uriIcon: 'https://img.icons8.com/color/452/calendar.png',
        color: "#5976b3"
      },
      {
        action: () => {
          navigation.navigate('NoticesSchool');
        },
        name: "Avisos",
        uriIcon: 'https://images.vexels.com/media/users/3/157272/isolated/preview/e6d8b2a22f0f860af01343af96e94a8a-libros-apilados-vector-by-vexels.png',
        color: "red"
      },
    ];

  const renderItem = ({ item }) => (
    <CustomButton
      icon={item.uriIcon}
      name={item.name}
      action={item.action}
      key={item.uriIcon}
    />
  );

  return (
    <View style={styles.containerHome}>
      <View style={styles.containerWelcom}>
        <Text style={styles.textWelcom}>Bienvenido</Text>
      </View>
      <View style={styles.containerHome}>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}


export default HomeTeacher;