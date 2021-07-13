/*
---- importes utilizados ----
*/

import React , { useState }from 'react'
import { View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import { Value } from 'react-native-reanimated'
import { Colors } from 'react-native-paper'
/*
---- vista de la calculadora ----
*/

const CalculaMasa = ({ navigation, route }) => {

	/*
---- estados que se van a utilizar para la operacion  ----
*/

	const [state, setState] = useState({
		peso: 0,
	
	  });
		/*
---- estados que se van a utilizar para la operacion  ----
*/
	  const [stateAltura, setStateAltur] = useState({
		altura: 0,
	
	  });
		/*
---- estados que se van a utilizar para la operacion  ----
*/
	  const [stateResultado, setStateResult] = useState({
		resul: "",
	  });

	  /*
---- operacion logica de la calculadora  
*/
	  const fcalcular = (peso, altura, resul) => {
		 let imc = (peso / (altura * altura));   
		setStateResult({resul:imc});
	  };

	return (
		<View style={styles.cont}>
		<View style={styles.alt}>
          <Text style={styles.txt2}>peso (kg)</Text>
          <TextInput
            style={styles.place2}
            placeholder="peso"
			onChangeText={(value) => setState({peso:value})}
          />
        </View>

        <View style={styles.alt}>
          <Text style={styles.txt2}>altura (mt)</Text>
          <TextInput
            style={styles.place2}
            placeholder="altura"
			onChangeText={(value) => setStateAltur({altura:value})}
          />
        </View>

        <View style={styles.boton}>
          <TouchableOpacity onPress={() => fcalcular(state.peso, stateAltura.altura)}
		  style={styles.Col}
		  >
            <Text style={styles.CC}>CALCULAR IMC</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.txt2}>Resultado</Text>
        </View>

        <View>
          <Text style={styles.recimc}>   
		  IMC:{stateResultado.resul}        
            </Text>
        </View>


		</View>
	)
}

/*
---- estilos  de la calculadora ----
*/

const styles = StyleSheet.create({

	cont: {
		flex: 1,
		padding: 100,
		backgroundColor: Colors.white,
	  },

	  alt: {
		textAlign: "center",
		marginTop: 5,
	  },

	  txt2: {
		textAlign: "center",
		marginTop: 35,
		fontWeight: "bold",
		fontSize: 20,
	  },

	  place2: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		borderRadius: 5,
		shadowOpacity: 0.39,
		shadowRadius: 8.3,
	  },

	  boton: {
		marginTop: 60,
		marginLeft: 20,
		width: 150,
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		textAlign: "center",
	  },

	  CC: {
		textAlign: "center",
		marginLeft: 5,
		marginTop: 6,
		fontSize: 15,
		fontWeight: "bold",
		fontSize: 15,
	  },

	  recimc:{
		fontSize:15,
		fontWeight: "bold",
	  },
	  recimc:{
		textAlign:"center",
	  },
	  Col:{
		backgroundColor: Colors.yellow600,
	  }

})

export default CalculaMasa
