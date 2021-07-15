import React from 'react'
import { Text,View,Image,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import Imagen from './../assets/active.png'; 
import { Colors } from 'react-native-paper'
const { width, height } = Dimensions.get("window");


const premim = (props) => {
   return (
        <View style={styles.container}>
            <Image  
        source = {Imagen} 
        style={styles.activepower}  
        /> 

        <View style={styles.nav}>
        <TouchableOpacity style={styles.view}>
    <Image  
     style={styles.paypal}  
         source={{
          uri: "https://blog.gosocket.net/wp-content/uploads/2015/06/new-paypal-logo.jpg",
        }} 
    />        
        </TouchableOpacity>
      <Text style={styles.txt}>adjunto copyright,precio,funcionalidades nuevas paypal</Text>
        </View>

<View style={styles.boton}>
       <TouchableOpacity onPress={() => props.navigation.navigate("ingresarinfo")}
       style={styles.Col}>
            <Text style={styles.textobot}>Comprar Por $2.00</Text>
        </TouchableOpacity>
      </View>
            
        </View>

   )
}

const styles = StyleSheet.create({
    container:{
        flex: 1  ,
        alignItems:"center",
        padding: 20,
        backgroundColor: Colors.white,
      },

      activepower:{
        height: 200 ,
        width: 200,
      },
      nav: {
        width: 250,
        height: 250,
        borderRadius: 5,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
       
      },
      view: {
        position: "absolute",
        top: 15,
        left: 9,
      },
      paypal: {
        width: 100,
        height: 100,
        
      },
      txt: {
        textAlign: "center",
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 109,
      },
      boton:{
        marginTop: 5,
        marginLeft: 20,
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
      },
      textobot:{
        textAlign: "center",
        marginLeft: 5,
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold",
      },
      Col:{
		backgroundColor: Colors.yellow600,
	  },
})

export default premim 