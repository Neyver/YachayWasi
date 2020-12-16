import React from 'react';
import { StyleSheet, Text, View,  TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from '../styles/styles.js';

const NoticeCard = ({ Title, Contenido, Date, action, color , Emisor}) =>{
   return(
        <View style={styles.mainCard}>     
            <View style={styles.carta}>  
                <View style={styles.titleTheCard}>
                    <Text style={styles.textColorBoldWhite}>{Title}</Text>
                </View>
                <View style={styles.titleTheCard}>
                    <Text style={styles.textColorBoldWhite}>De: {Emisor}</Text>
                </View>
                <View style={styles.alinSepa}>
                
                </View>
                <View style={styles.bodyTheCard }>
                    <Text style={styles.textColorWhite}>{Contenido}</Text>
                </View>
                <View style={styles.footerTheCard}>
                    <Text style={styles.textColorBoldWhite}>{Date}</Text>
                </View>           
            </View>
        </View>
    );
    }      

export default NoticeCard;