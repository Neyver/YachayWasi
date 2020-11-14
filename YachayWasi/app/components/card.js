
const card = () =>{
    const [Title, onChangeText1] = React.useState('TITULO');
    const [Contenido, onChangeText2] = React.useState('Esta es una prueba de del contenido que puede tener un aviso, mas y mas contenido, mucho, mucho y mas contenido');
    const [Date, onChangeText3] = React.useState('11/11/2020');
   return(
                
        <View style={styles.carta}>  
        <View style={styles.titleTheCard}>
   <Text style={styles.textColorBold}>{Title}</Text>
        </View>
        <View style={styles.alinSepa}>
        <Separator />
        </View>
        <View style={styles.bodyTheCard }>
   <Text style={styles.textColor}>{Contenido}</Text>
        </View>
        <View style={styles.footerTheCard}>
   <Text style={styles.textColorBold}>{Date}</Text>
        </View>           
        </View>
       
    );
    }
 
const Separator = () => (
        <View style={styles.separator} />
    );    
  
const styles = StyleSheet.create({
    
      textColorBold:{
        color : 'white',
        fontWeight: 'bold',
        fontSize:20       
        
      },
      separator: {
    
        marginVertical: 3,
        borderBottomColor: 'white',
        width:280,
        borderBottomWidth: StyleSheet.hairlineWidth,
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
        backgroundColor:'darkviolet',
        elevation:4,
        height:150, 
        width:300,
        borderRadius:10
    }
      
})

export default card;