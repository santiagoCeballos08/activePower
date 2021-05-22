/*
---- importes utilizados ----
*/
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Inicio from '../pages/Inicio'
import Registro from '../pages/registro'
import { IconButton, Colors } from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens'
import MenuHamburguesa from '../components/MenuHamburguesa'

//instanciacion de stack
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
					header: CustomHeader,
				}}
			/>
			<Stack.Screen
				component={Registro}
				name='registro'
				options={{
					title: 'Registro',
					header: CustomHeader,
				}}
			/>
			<Stack.Screen
				component={MenuHamburguesa}
				name='menu'
				options={{
					title: 'menu',
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
		height: '0px',
		position: 'relative',
		display: 'flex',
	},
})

export default InicioNavigator
