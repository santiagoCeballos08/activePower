import React from 'react'
import { Text,View,StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import { Colors } from 'react-native-paper'

const ingresarinfo = () => {
   return (
        <View style={styles.container}>

        <View style={styles.vista}> 
      <Text style={styles.textos}>Correo de cuenta paypal</Text>
      <TextInput
            style={styles.place}
            placeholder="Correo"
          />
      </View>

      <View>
      <Text style={styles.textos}>Clave de cuenta</Text>
      <TextInput
            style={styles.place}
            placeholder="Clave"
          />
      </View>

      <View style={styles.boton}>
      <TouchableOpacity style={styles.Col}>
            <Text style={styles.textobot}>Comprar</Text>
          </TouchableOpacity>
      </View>
           

        </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:50,
        backgroundColor: Colors.white,
      },
    
      vista:{
        marginTop: 30,
      },

      textos:{
        textAlign: "center",
        marginTop: 35,
        fontWeight: "bold",
        fontSize:18,
      },
    
      place:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 4,
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
    },
    boton:{
        marginTop: 180,
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

export default ingresarinfo 