/*
---- importes utilizados ----
*/
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Inicio from '../pages/Inicio'
//import Registro from '../pages/registro'
import { IconButton, Colors } from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens'
//import MenuHamburguesa from '../components/MenuHamburguesa'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack Inicio ----
*/
const InicioNavigator = props => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={Inicio}
				name='inicio'
				initialParams={{ data }}
				options={{
					title: 'Inicio',
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
