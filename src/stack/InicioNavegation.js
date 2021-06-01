/*
---- importes utilizados ----
*/
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Inicio from '../pages/Inicio'
import Registro from '../pages/registro'
// import MenuHamburguesa from '../components/MenuHamburguesa'
// import Gratis from '../pages/Gratis'
// import GratisNavigator from './GratisNavegatior'
// import MenuHamburguesa from '../components/MenuHamburguesa'
import TabNavigator from '../TabNavigator'

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
				component={TabNavigator}
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
		height: 0,
		position: 'relative',
		display: 'flex',
	},
})

export default InicioNavigator
