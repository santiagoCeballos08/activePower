/*
---- importes utilizados ----
*/
import React, { useEffect } from 'react'
import { Dimensions } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
import ListaInfo from './ListaInfo'

const { width, height } = Dimensions.get('screen')
/*
---- vista de informacion de la rutina
*/
const InfoRutina = ({ navigation, route }) => {
	// useEffect(() => {
	// 	console.log(route.params)
	// })
	const { des, img, name } = route.params.data
	return (
		<View>
			<Text style={styles.title}>{name}</Text>
			<ScrollView>
				<ListaInfo data={datas} navigation={navigation} />
			</ScrollView>
		</View>
	)
}
{
	// <ScrollView>
	// 			<ListaInfo data={datas} navigation={navigation} />
	// 		</ScrollView>
}
//datos de prueba para mostrar rutinas
const datas = [
	{
		id: 1,
		img: 'https://media.istockphoto.com/photos/african-american-man-doing-push-up-picture-id154370462',
		nombre: 'Flexión',
		des: 'reps			series\n5		X		7',
		res: 'cada vez que se extienda por completo los brazos debes botar el aire cuando llegue a bajo',
	},
	{
		img: 'https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2019/01/1140-group-exercise-streching-esp.jpg',
		nombre: 'loco',
		des: 'reps			series\n5		X		7',
		id: 2,
	},
]

//estilos de la vista
const styles = StyleSheet.create({
	img: {
		width: 200,
		height: 200,
		marginLeft: 50,
	},
	title: {
		marginTop: 20,
		marginBottom: 20,
		textAlign: 'center',
		color: Colors.black,
		fontSize: 20,
		fontWeight: 'bold',
	},
})

export default InfoRutina
