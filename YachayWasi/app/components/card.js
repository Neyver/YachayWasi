import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image } from 'react-native';

const card = ({ Title, Contenido, Date, color }) =>{
    //const [Title, onChangeText1] = React.useState('TITULO');
    //const [Contenido, onChangeText2] = React.useState('Esta es una prueba de del contenido que puede tener un aviso, mas y mas contenido, mucho, mucho y mas contenido');
    //const [Date, onChangeText3] = React.useState('11/11/2020');
   return(
      <View style={styles.mainCard}>     
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
const styles = StyleSheet.create({
    
      textColorBold:{
        color : 'white',
        fontWeight: 'bold',
        fontSize:20       
      },
      mainCard: {
        flex: 1,
        padding: 10,
      },
      titleTheCard:{
        //backgroundColor:'red',
        justifyContent:'center',
        marginLeft:6,
        flex:0.3
    
      },
      titleTheCard:{
        //backgroundColor:'red',
        justifyContent:'center',
        marginLeft:6,
        flex:0.3
    
      },
      bodyTheCard:{
        //backgroundColor:'yellow',
        flex:1,
        marginLeft:6
    
      },
      footerTheCard:{
        //backgroundColor:'green',
        justifyContent:'center',
        alignItems: 'flex-end',
        
        marginRight: 6,
        flex:0.3
      },
      textColorBold:{
        color : 'white',
        fontWeight: 'bold'
        
      },
      textColor : {
        color : 'white',
        
      },
      alinSepa:{
        alignItems : 'center',
        justifyContent:'center',  
      },
      carta:{
        backgroundColor:'#6b407e',
        elevation:4,
        height:150, 
        width:300,
        borderRadius:10
    }
      
});

export default card;