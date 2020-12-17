import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image } from 'react-native';
import { styles} from '../styles/styles.js' ;
const Activcard = ({ Title, Contenido, Date}) =>{
  var getRandomColor = function () {
    let listCol =['#DB6D8C','#51CDD7','#D4C84C','#4CD472']
    console.log(getRandomInt(0, 4)); 
    return listCol[getRandomInt(0, 4)];
  };
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const colorStyles = {
    backgroundColor: getRandomColor(),
  };
   return(
      <View style={styles.actividadCardmainCard}>     
        <View style={[styles.actividadCardcarta, colorStyles]}>  
          <View style={styles.actividadCardtitleTheCard}>
            <Text style={styles.actividadCardtextColorBold}>{Title}</Text>
          </View>
        <View style={styles.actividadCardalinSepa}>
        
        </View>
          <View style={styles.actividadCardbodyTheCard }>
            <Text style={styles.actividadCardtextColor}>{Contenido}</Text>
          </View>
          <View style={styles.actividadCardfooterTheCard}>
            <Text style={styles.actividadCardtextColorBold}>{Date}</Text>
          </View>           
        </View>
        </View>
    );
    }      

export default Activcard;