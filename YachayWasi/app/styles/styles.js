import { StyleSheet } from 'react-native';
const firstColor = "#21201f";
const secondColor = "#ef6817";
const buttonsColor = "#21201f";
const appBarColor = "#21201f";
const cardColor = "#51CDD7";
const styles = StyleSheet.create({
    //////////////////////////////////home user
    containerHome: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 24,
        backgroundColor: firstColor,
    },
    containerHomeElements: {
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondColor
    },
    containerWelcom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWelcom: {
        fontSize: 40,
    },

    //////////////////////////////////////button home
    containerButton: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: secondColor
    },
    logo: {
        width: 55,
        height: 55,
        padding: 15,
        elevation: 10,
        borderRadius: 100,
        backgroundColor: '#475B6F',
    },
    button: {
        flex: 2,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'flex-end',
        width: 190,
        height: 120,

        backgroundColor: '#475B6F',

    },
    containerIconButton: {
        flex: 0.5,
        position: 'absolute',
        justifyContent: "center",
        bottom: 37,
        left: 0,

        // backgroundColor:  '#475B6F',
    },

    containerText: {
        paddingBottom: 10,
        paddingLeft: 4,
        flex: 0.5,
    },
    innerText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    ////////////////////////////Card Actividad

    textColorBold: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    avtivityMainCard: {
        flex: 1,
        paddingBottom: 10,
        paddingHorizontal: 20,
        // backgroundColor: '#475B6F',
    },
    titleTheCard: {
        //backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingTop: 10, 
        
        flex: 0.5

    },
    bodyTheCard: {
        //backgroundColor:'yellow',
        flex: 1,
        marginLeft: 6,
        justifyContent: 'center',
        paddingHorizontal: 5,
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

    },
    alinSepa: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    carta: {
        backgroundColor: cardColor,
        // elevation: 4,
        // height: 150,
        // width: 300,
        borderRadius: 10
    }
    ////////////////////////////Card Aviso
    
});

export { styles };