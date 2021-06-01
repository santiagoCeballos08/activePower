/*
---- importes utilizados ----
*/
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HeaderStack from '../components/HeaderStack'
import Premium from '../pages/Premium'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack Premium ----
*/
const PremiumNavigator = ({ navigation, route }) => {
	return <Stack.Navigator></Stack.Navigator>
}

//datos de prueba
const data = [
	{
		img: 'https://image.freepik.com/foto-gratis/grupo-personas-haciendo-ejercicios-calentamiento-gimnasio_23-2147949530.jpg',
		nombre: 'loquito',
		des: 'Esta rutina es pensada para los principiantes, para entrenar todo el cuepesillo. ',
	},
	{
		img: 'https://image.freepik.com/vector-gratis/establecer-personas-haciendo-ejercicio_18591-36176.jpg',
		nombre: 'prueba',
		des: 'no hay nada de que hablar pa. ',
	},
]

export default PremiumNavigator
