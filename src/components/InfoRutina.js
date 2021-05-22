/*
---- importes utilizados ----
*/
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ListaInfo from './ListaInfo'

/*
---- vista de informacion de la rutina
*/
const InfoRutina = ({ navigation, route }) => {
	return (
		<ScrollView>
			<View>
				<Text style={styles.title}>{route.params.data.nombre}</Text>
				<ListaInfo data={datas} navigation={navigation} />
			</View>
		</ScrollView>
	)
}

//datos de prueba para mostrar rutinas
const datas = [
	{
		img:
			'https://media.istockphoto.com/photos/african-american-man-doing-push-up-picture-id154370462',
		nombre: 'Flexión',
		des: 'reps			series\n5		X		7',
		res:
			'cada vez que se extienda por completo los brazos debes botar el aire cuando llegue a bajo',
	},
	{
		img:
			'https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2019/01/1140-group-exercise-streching-esp.jpg',
		nombre: 'loco',
		des: 'no hay nada de que hablar pa. ',
	},
]

//estilos de la vista
const styles = StyleSheet.create({
	img: {
		width: '200px',
		height: '200px',
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
})

export default InfoRutina
