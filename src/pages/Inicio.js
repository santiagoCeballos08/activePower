/*
---- importes utilizados ----
*/
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View, TextInput, StyleSheet, Image, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'

//obtencion de tamaño de la ventana

/*
---- vista de inicio ----
*/
const Inicio = ({ navigation }) => {
	return (
		<View>
			<TouchableOpacity style={styles.btn} onPress={console.log('hola')}>
				<Text>Inicio</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => navigation.navigate('registro')}
			>
				<Text>Registro</Text>
			</TouchableOpacity>
		</View>
	)
}
const styles = StyleSheet.create({
	btn: {
		margin: 25,
		position: 'relative',
		display: 'flex',
	},
	img: {
		width: 50,
		height: 25,
		backgroundColor: Colors.green100,
	},
})

export default Inicio
