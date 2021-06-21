import React from 'react'
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
//import { Button } from 'react-native-elements'
import { Colors } from 'react-native-paper'
import ListaChatEntrenador from '../components/ListaChatEntrenador'

const { width, height } = Dimensions.get('screen')
/*
---- vista del modulo del mensaje ----
*/
const Mensaje = ({ navigation, route }) => {
	return (
		<View style={{ backgroundColor: '#fff', height }}>
			<Text style={styles.principalText}>Chat con entrenador</Text>
			<ListaChatEntrenador navigation={navigation} data={data} />
			<Text style={styles.principalText}>Salas sociales</Text>
			<View style={styles.container}>
				{route.params.data.map(i => {
					return (
						<RenderItem
							key={i.id}
							name={i.nombre}
							online={i.online}
							navigation={navigation}
						/>
					)
				})}
			</View>
		</View>
	)
}

const RenderItem = ({ name, online, navigation }) => {
	return (
		<View style={styles.card}>
			<Text style={styles.cardTitle}>{name}</Text>
			<TouchableOpacity
				style={styles.cardBtn}
				onPress={() => {
					console.log('click')
				}}
			>
				<Text style={{ color: Colors.black, textAlign: 'center' }}>Power</Text>
			</TouchableOpacity>
			<Text style={styles.cardFooter}>online {online}</Text>
		</View>
	)
}

//datos de prueba h
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
		marginTop: 30,
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
		alignItems: 'center',
		backgroundColor: '#fff',
		margin: 10,
		width: width / 3,
		height: 175,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		borderRadius: 8,
	},
	cardBtn: {
		marginTop: 35,
		width: 60,
		backgroundColor: Colors.deepOrange100,
		borderRadius: 15,
	},
	cardTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 10,
	},
	cardFooter: {
		marginTop: 30,
		marginRight: 50,
		marginBottom: 10,
		color: Colors.greenA700,
	},
})

export default Mensaje
