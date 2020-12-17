import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NoticeCard = ({ Title, Contenido, Date, action, color }) => {
  return (
    <View style={styles.mainCard}>
      <View style={styles.carta}>
        <View style={styles.titleTheCard}>
          <Text style={styles.textColorBold}>{Title}</Text>
        </View>
        <View style={styles.alinSepa}>

        </View>
        <View style={styles.bodyTheCard}>
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

  textColorBold: {
    color: 'white',
    //color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  mainCard: {
    flex: 1,
    padding: 10,
  },
  titleTheCard: {
    //backgroundColor:'red',
    justifyContent: 'center',
    marginLeft: 6,
    flex: 0.3

  },
  deleteButton: {
    alignContent: 'flex-end'

  },
  bodyTheCard: {
    //backgroundColor:'yellow',
    flex: 1,
    marginLeft: 6

  },
  footerTheCard: {
    //backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginRight: 6,
    flex: 0.3
  },
  textColorBold: {
    color: 'white',
    fontWeight: 'bold',

  },
  textColor: {
    color: 'white',

  },
  alinSepa: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carta: {
    backgroundColor: 'teal',
    elevation: 10,
    width: 300,
    borderRadius: 10
  }

});

export default NoticeCard;
