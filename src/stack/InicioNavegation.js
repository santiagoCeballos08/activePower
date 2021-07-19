/*
---- importes utilizados ----
*/
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import Inicio from '../pages/Inicio'
import Registro from '../pages/registro'
import MenuHamburguesa from '../components/MenuHamburguesa'
import inicioSesion from '../pages/InicioSesion'

//instanciacion de stack}
const Stack = createStackNavigator()

/*
---- stack de pantallas para la vista inicio ----
*/
const InicioNavigator = props => {
	//creacion del header personalizado para que quede vacio
	const CustomHeader = () => {
		return <View></View>
	}

	return (
		<Stack.Navigator>
			<Stack.Screen
				component={Inicio}
				name='inicio'
				initialParams={{ data }}
				options={{
					title: 'Inicio',
					headerShown: false,
				}}
			/>
			<Stack.Screen
				component={Registro}
				name='registro'
				options={{
					title: 'Registro',
					headerShown: false,
				}}
			/>
			<Stack.Screen
				component={MenuHamburguesa}
				name='menu'
				options={{
					title: 'menu',
					headerShown: false,
				}}
			/>

			<Stack.Screen
				component={inicioSesion}
				name='InicioSesion'
				options={{
					title: 'InicioSesion',
					header: CustomHeader,
				}}
			/>
		</Stack.Navigator>
	)
}
const data = []

export default InicioNavigator
