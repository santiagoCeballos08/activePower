/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BuscarUsuario from '../pages/BuscarUsuario'
import firebase from '../../database/firebase'
import { View, Text, StyleSheet } from 'react-native'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack gratis ----
*/
const BuscarUsuarioNavigation = ({ navigation, route }) => {
	//estado de los usuarios
	const [user, setUsers] = useState()
	//trae todos los usuarios
	const users = []
	firebase.db.collection('usuarios').onSnapshot(query => {
		query.docs.forEach(doc => {
			users.push({ id: doc.id, ...doc.data() })
		})
		setUsers(users)
	})

	if (user) {
		return (
			<Stack.Navigator>
				<Stack.Screen
					component={BuscarUsuario}
					initialParams={{ user }}
					name='BuscarUsuario'
					options={{
						headerTitle: () => <Text style={styles.text}>Buscar usuario</Text>,
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

export default BuscarUsuarioNavigation
