/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Gratis from '../pages/Gratis'
import InfoRutina from '../components/InfoRutina'
import Info from '../pages/Info'
import firebase from '../../database/firebase'
import { View, Text } from 'react-native'
import HeaderStack from '../components/HeaderStack'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack gratis ----
*/
const GratisNavigator = ({ navigation, route }) => {
	const [mensaje, setMensaje] = useState()
	const [data, setData] = useState()
	//const [showMenu, setShowMenu] = useState(false)

	//listar mensajes de la db
	const mensajes = []
	firebase.db.collection('mensaje').onSnapshot(query => {
		query.docs.forEach(doc => {
			mensajes.push(doc.data().msg)
		})
		setMensaje(mensajes)
	})

	//listar rutinas
	const datas = []
	firebase.db.collection('rutinaGratis').onSnapshot(query => {
		query.docs.forEach(doc => {
			datas.push(doc.data())
		})
		setData(datas)
	})

	if (mensaje && data) {
		return (
			<Stack.Navigator>
				<Stack.Screen
					component={Gratis}
					initialParams={{ data, mensaje }}
					name='Gratis'
					options={{
						title: 'Rutinas gratuitas',
						header: HeaderStack,
					}}
				/>
				<Stack.Screen
					component={InfoRutina}
					name='InfoRutina'
					options={{
						title: 'InfoRutina',
						header: HeaderStack,
					}}
				/>
				<Stack.Screen
					component={Info}
					name='Info'
					options={{
						title: 'Info',
						header: HeaderStack,
					}}
				/>
			</Stack.Navigator>

			// <View>
			// 	<Text> soy un holita</Text>
			// </View>
		)
	} else {
		return <View></View>
	}
}
export default GratisNavigator
