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
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

/*
---- vista de inicio ----
*/
const Inicio = ({ navigation }) => {
	return <View></View>
}
const styles = StyleSheet.create({
	btn: {
		height: 10,
		position: 'relative',
		display: 'flex',
	},
	img: {
		width: width / 2,
		height: height / 2,
		backgroundColor: Colors.green100,
	},
})

export default Inicio
