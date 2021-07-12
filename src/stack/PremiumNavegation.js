/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Premium from '../pages/Premium'
import { IconButton, Colors } from 'react-native-paper'
import Icon from '../components/Icon'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import firebase from '../../database/firebase'
//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack Premium ----
*/
const PremiumNavigator = ({ navigation, route }) => {
	const [data, setData] = useState()
	//listar rutinas
	const datas = []
	firebase.db.collection('rutinaGratis').onSnapshot(query => {
		query.docs.forEach(doc => {
			datas.push({ id: doc.id, ...doc.data() })
		})
		setData(datas)
	})
	if (data) {
		return (
			<Stack.Navigator>
				<Stack.Screen
					component={Premium}
					name='Premium'
					initialParams={{ data }}
					options={{
						headerTitle: () => <Text style={styles.text}>Rutinas Premium</Text>,
						headerLeft: () => (
							<IconButton
								icon={() => <Icon name='menu' size={24} color={Colors.amber500} />}
								onPress={() => {
									route.params.drawer.toggleDrawer()
								}}
							/>
						),
					}}
				/>
			</Stack.Navigator>
		)
	} else {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 25, fontWeight: 'bold' }}>cargando......</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		marginLeft: 50,
		marginTop: 12,
		fontWeight: 'bold',
		fontSize: 18,
	},
})

//datos de prueba
// const data = [
// 	{
// 		img: 'https://image.freepik.com/foto-gratis/grupo-personas-haciendo-ejercicios-calentamiento-gimnasio_23-2147949530.jpg',
// 		nombre: 'loquito',
// 		des: 'Esta rutina es pensada para los principiantes, para entrenar todo el cuepesillo. ',
// 		id: 1,
// 	},
// 	{
// 		img: 'https://image.freepik.com/vector-gratis/establecer-personas-haciendo-ejercicio_18591-36176.jpg',
// 		nombre: 'prueba',
// 		des: 'no hay nada de que hablar pa. ',
// 		id: 2,
// 	},
// ]

export default PremiumNavigator
