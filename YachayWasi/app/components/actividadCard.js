import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image } from 'react-native';
import { styles } from '../styles/styles.js';
const Activcard = ({ Title, Contenido, Date, color }) =>{
   return(
      <View style={styles.avtivityMainCard}>     
        <View style={styles.carta}>  
          <View style={styles.titleTheCard}>
            <Text style={styles.textColorBold}>{Title}</Text>
          </View>
        <View style={styles.alinSepa}>
        
        </View>
          <View style={styles.bodyTheCard }>
            <Text style={styles.textColor}>{Contenido}</Text>
          </View>
          <View style={styles.footerTheCard}>
            <Text style={styles.textColorBold}>{Date}</Text>
          </View>           
        </View>
        </View>
    );
    }      
export default Activcard;