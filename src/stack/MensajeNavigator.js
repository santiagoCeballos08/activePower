/*
---- importes utilizados ----
*/
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Mensaje from '../pages/Mensaje'
//import Chat from '../pages/Chat'
import { StyleSheet } from 'react-native'
import HeaderStack from '../components/HeaderStack'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack mensaje ----
*/
const MensajeNavigator = ({ navigation, route }) => {
	const nav = route.params.navigation

	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Mensaje'
				component={Mensaje}
				initialParams={data}
				options={{
					title: 'Chats',
					header: HeaderStack,
				}}
			/>
		</Stack.Navigator>
	)
}

//datos de prueba

const data = [
	{
		nombre: 'Sala 1',
		online: 40,
	},
	{
		nombre: 'Sala 2',
		online: 12,
	},
]

//estilos de stack mensaje
const styles = StyleSheet.create({
	bar: {
		height: 50,
		position: 'relative',
		display: 'flex',
	},
	text: {
		marginLeft: 130,
		marginTop: 12,
		fontWeight: 'bold',
		fontSize: 18,
	},
	icon: {
		padding: 0,
		margin: 0,
		position: 'absolute',
		left: 0,
		top: 7,
	},
	inputContainer: {
		position: 'absolute',
		top: 7,
		right: 5,
	},
	textInput: {
		borderWidth: 1,
		height: 30,
		width: 80,
		borderRadius: 25,
		textAlign: 'center',
	},
	iconSearch: {
		position: 'absolute',
		right: 10,
		top: 3,
	},
})
export default MensajeNavigator
