import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
//import { Button } from 'react-native-elements'
import { Colors } from 'react-native-paper'
//import ListaChatEntrenador from '../components/ListaChatEntrenador'

/*
---- vista del modulo del mensaje ----
*/
const Mensaje = ({ navigation, route }) => {
	const salas = route.params
	return (
		<View>
			<Text>Chat con entrenador</Text>
		</View>
	)
}

//datos de prueba
const data = [
	{
		nombre: 'Daniel Stiven Agudelo',
		img: 'https://duemosli.blogs.uv.es/files/2019/01/Requisitos-estudios-y-cursos-para-ser-entrenador-de-f%C3%BAtbol.jpg',
	},
	{
		nombre: 'Santiago Ceballos',
		img: 'https://www.clikisalud.net/wp-content/uploads/2019/08/consejos-top-entrenadores-personales-hacer-ejercicio.jpg',
	},
	{
		nombre: 'Cristian Echeverri',
		img: 'https://duemosli.blogs.uv.es/files/2019/01/Requisitos-estudios-y-cursos-para-ser-entrenador-de-f%C3%BAtbol.jpg',
	},
	{
		nombre: 'Johan Stiven Murillo',
		img: 'https://www.clikisalud.net/wp-content/uploads/2019/08/consejos-top-entrenadores-personales-hacer-ejercicio.jpg',
	},
]

// estilos utilizados para vista mensajes
const styles = StyleSheet.create({
	principalText: {
		textAlign: 'center',
		marginTop: 20,
		fontSize: 22,
		marginBottom: 25,
		fontWeight: '500',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	card: {
		margin: 10,
		width: 150,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 1,
	},
	cardBtn: {
		marginTop: 15,
		width: 60,
		backgroundColor: Colors.deepOrange200,
		borderRadius: 15,
	},
	cardTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 5,
	},
	cardFooter: {
		marginTop: 15,
		marginLeft: 15,
		marginBottom: 10,
		color: Colors.greenA700,
	},
})

export default Mensaje
