/*
---- importes utilizados ----
*/
import React from 'react'
import { Text, View , StyleSheet, Image, Dimensions,TextInput,TouchableOpacity} from 'react-native'
const { width, height } = Dimensions.get('window')
import { Colors } from 'react-native-paper'
import { DataTable } from "react-native-paper";
/*
---- vista crear rutinas ----
*/
const CrearRutina = ({ navigation, route }) => {
	return (
		<View style={styles.wi}>
				
			<Text style={styles.title}>Ejercicios</Text>
				<Image
				style={styles.img}
				source={{
					uri: 'https://staticuestudio.blob.core.windows.net/buhomag/2016/10/04145501/fitness.jpg',
				    }}
			    />
			<View>
				<Text style={styles.txt}>Series x Reps</Text>
			</View>
			
			<View>
				<TextInput style={styles.input} placeholder='series x reps' />
				<TextInput style={styles.inputName} placeholder='nombre del ejercicio' />
				<TextInput style={styles.inputTiempo} placeholder='tiempo estimado en minutos' />
			</View>
			

	<View>

		<DataTable>
    			<DataTable.Header>
      			<DataTable.Title>Nombre</DataTable.Title>
      			<DataTable.Title numeric>Series</DataTable.Title>
      			<DataTable.Title numeric>Reps</DataTable.Title>
    		</DataTable.Header>

    		<DataTable.Row>
      			<DataTable.Cell>Flexiones</DataTable.Cell>
      			<DataTable.Cell numeric>4</DataTable.Cell>
      			<DataTable.Cell numeric>10</DataTable.Cell>
    		</DataTable.Row>

    		<DataTable.Row>
      			<DataTable.Cell>Dominadas</DataTable.Cell>
      			<DataTable.Cell numeric>4</DataTable.Cell>
      			<DataTable.Cell numeric>8</DataTable.Cell>
    		</DataTable.Row>

			<DataTable.Row>
      			<DataTable.Cell>Sentadillas</DataTable.Cell>
      			<DataTable.Cell numeric>4</DataTable.Cell>
      			<DataTable.Cell numeric>18</DataTable.Cell>
    		</DataTable.Row>

			<DataTable.Row>
      			<DataTable.Cell>Plancha</DataTable.Cell>
      			<DataTable.Cell numeric>4</DataTable.Cell>
      			<DataTable.Cell numeric>20"</DataTable.Cell>
    		</DataTable.Row>

  		</DataTable>

	</View>

	<View style={styles.view}>
      		<TouchableOpacity>
        		<Text style={styles.txt2}>Finalizar</Text>
      		</TouchableOpacity>
    </View>


		</View>
	)
}

const styles = StyleSheet.create({
	img: {
		width: 100,
		height: 100,
		borderRadius: 10,
		marginLeft: height / 6,
		marginTop: 25,
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		marginTop: 25,
		fontSize: 18,
	},

	txt: {
		marginLeft: 15,
		marginTop: 20,
		fontWeight: 'bold',
		fontSize: 18,
	},

	input: {
		borderColor: Colors.black,
		borderWidth: 1,
		width: 82,
		height: 40,
		marginLeft: 15,
		marginTop: 10,
	},
	inputName: {
		borderColor: Colors.black,
		borderWidth: 1,
		width: 160,
		height: 40,
		marginLeft: 15,
		marginTop: 10,
		position: 'absolute',
		left: 83,
	},

	inputTiempo: {
		borderColor: Colors.black,
		borderWidth: 1,
		width: 250,
		height: 40,
		marginTop: 15,
		marginLeft: height / 11,
	},

	view: {
		marginTop: 25,
		marginLeft: 125,
		width: 120,
		height: 40,
		backgroundColor: Colors.amber200,
		borderWidth: 1,
		borderRadius: 14,
	  },
	  txt2: {
		textAlign: "center",
		marginLeft: 5,
		marginTop: 6,
		fontSize: 15,
		color: Colors.black,
	  },

	  wi:{
		backgroundColor: Colors.white,
	  }

})

export default CrearRutina
