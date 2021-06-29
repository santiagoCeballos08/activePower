/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Gratis from '../pages/Gratis'
import InfoRutina from '../components/InfoRutina'
import Info from '../pages/Info'
import firebase from '../../database/firebase'
import { View, Text, StyleSheet } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import Icon from '../components/Icon'

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
			datas.push({id: doc.id, ...doc.data()})
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
						headerTitle: () => <Text style={styles.text}>Rutinas Gratis</Text>,
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
				<Stack.Screen
					component={InfoRutina}
					name='InfoRutina'
					options={{
						headerTitle: () => <Text style={styles.text}>InfoRutina</Text>,
					}}
				/>
				<Stack.Screen
					component={Info}
					name='Info'
					options={{
						headerTitle: () => <Text style={styles.text}>Info del ejercicio</Text>,
					}}
				/>
			</Stack.Navigator>
		)
	} else {
		return <View></View>
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

export default GratisNavigator
