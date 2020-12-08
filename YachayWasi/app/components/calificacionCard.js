import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image } from 'react-native';

const calificacionCard = ({ Materia, Profesor, PBimestre, SBimestre, TBimestre, CBimestre }) => {
    var FINAL=0;
    
    var getRandomColor = function () {
        var color = '#';
        var instaGG = (parseInt(PBimestre) + parseInt(SBimestre) +parseInt(TBimestre)+parseInt(CBimestre))/4;
        if (parseFloat(instaGG) > 90.0) return "#51CDD7";
        if (parseFloat(instaGG) > 70.0) return "#107C91";
        if (parseFloat(instaGG) > 50.0) return "#E86830";
        else return '#D4C84C';
    };
    var getFINAL = function(){
        return (parseInt(PBimestre) + parseInt(SBimestre) +parseInt(TBimestre)+parseInt(CBimestre))/4;
    }
    const colorStyles = {
        backgroundColor: getRandomColor(),
    };
    return (
        <View style={styles.mainCard}>
            <View style={styles.carta, colorStyles}>
                <View style={styles.MateriaTheCard}>
                    <Text style={styles.textColorBold}>{Materia}</Text>
                </View>
                <View style={styles.alinSepa}/>
                <View style={styles.bodyTheCard}>

                    <Text style={styles.textColor}>PB: {PBimestre} </Text>
                    <Text style={styles.textColor}>SB: {SBimestre} </Text>
                    <Text style={styles.textColor}>TB: {TBimestre} </Text>
                    <Text style={styles.textColor}>CB: {CBimestre} </Text>
                    <Text style={styles.textFinalColor}> NF: {getFINAL()} </Text>

                </View>
                <View style={styles.alinSepa}/>
                <View style={styles.footerTheCard}>
                    <Text style={styles.textColorBold}>Profesor: {Profesor}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    textColorBold: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    mainCard: {
        flex: 1,
        padding: 5,
        height: 400,
        width: 310,
    },
    MateriaTheCard: {
        //backgroundColor:'red',
        justifyContent: 'center',
        marginLeft: 6,
        flex: 0.3

    },
    bodyTheCard: {
        //backgroundColor:'yellow',
        flexDirection: "row",
        justifyContent:"space-evenly",
        flex: 10,
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
        fontWeight: 'bold'

    },
    textColor: {
        color: 'white',
        flex: 1,
    },
    textFinalColor: {
        color: 'white',
        flex: 2,
        alignSelf:"center",
    },
    alinSepa: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    carta: {
        elevation: 4,
        height: 250,
        width: 300,
        borderRadius: 10
    }

});

export default calificacionCard;