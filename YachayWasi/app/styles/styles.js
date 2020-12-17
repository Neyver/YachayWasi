import { StyleSheet } from 'react-native';




const darkColor = '#2A333A';
const FirstThemeDarkColor = '#475B6F';
const FirstThemeLigthColor = '#4F728E';
const pinkColor = '#DB6D8C';
const yellowColor = '#D4C84C';
const skyblueColor = '#51CDD7';
const greenColor = '#4CD472';

const styles = StyleSheet.create({
    //HOME
    textTitle: { flex: 1, textAlign: "center", marginTop: 12 },
    container: { flex: 1, backgroundColor: darkColor },
    containerCarousel: { flex: 4 },
    containerButton: { flex: 3, alignSelf: "center", justifyContent: "center" },
    buttonIni: { padding: 10,color: yellowColor, backgroundColor: yellowColor,elevation:4, height:150,  width:300,},
    textDescription: { textAlign: "center", flex: 3 },
    //HOMEUSER
    containerHome: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 24,
        backgroundColor: darkColor,
    },
    containerHomeElements: {
        flex: 1,
        // paddingVertical: 25,
        // paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: FirstThemeLigthColor
    },
    containerButtons: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
      containerWelcom: {
        justifyContent: 'center',
        fl: 'center',
        flex: 2,
      },
      textWelcom: {
        fontSize: 40,
      },
    //MYSCORE
    
    //HORARIO   and     HORARIO STUDENT
    

    //UserDetail
    containerUserScreen: {
        flex: 1,
        padding: 35
      },
      inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
    //InfoStudent
    container1: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      row: {
        flexDirection: 'row'
      },
      textColor: {
        color: 'white',
        padding: 10,
    
      },
      body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: -100
      },
      header: {
        flex: 0.2,
        alignItems: 'center',
    
      },

      //Notas Teacher
      containerNotasTeacher: {
        paddingHorizontal: 10,
        backgroundColor: "#4F728E",
        height: "100%",
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderColor: "#20232a",
        borderWidth: 1,
      },
      
      // Notices Teacher
      containerCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      textWelcom: {
        fontSize: 40,
      },
      buttonContainer: {
        backgroundColor: 'rgb(89, 217, 157);',
        padding: 5,
        borderRadius: 23,
        marginLeft: 280,
        elevation: 20
      },
      buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
      },
      buttonDeleteNotice: {
        backgroundColor: 'rgb(179, 11, 26)',
        padding: 5,
        borderRadius: 20,
        width: 50,
        marginLeft: 10,
      }

  });
  

export {styles};
