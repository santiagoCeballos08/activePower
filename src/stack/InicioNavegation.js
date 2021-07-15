/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Inicio from '../pages/Inicio'
import Registro from '../pages/registro'
import MenuHamburguesa from '../components/MenuHamburguesa'
import inicioSesion from '../pages/InicioSesion'


//instanciacion de stack}
const Stack = createStackNavigator()

/*
---- stack Inicio ----
*/
const InicioNavigator = props => {
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
				/* initialParams={estado,funcDelestado} */
				options={{
					title: 'InicioSesion',
					header: CustomHeader,
				}}
			/>
		
		</Stack.Navigator>
	)
}

const data = []

//estilos de stack gratis
const styles = StyleSheet.create({
	bar: {
		height: 0,
		position: 'relative',
		display: 'flex',
	},
})

export default InicioNavigator
