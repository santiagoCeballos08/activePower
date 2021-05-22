/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
//import HeaderStack from '../components/HeaderStack'
import Cuenta from '../pages/Cuenta'
import { createStackNavigator } from '@react-navigation/stack'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack profile ----
*/
const ProfileNavigator = ({ navigation, route }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					alignItems: 'center',
					justifyContent: 'center',
				},
				headerTintColor: '#111',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen
				component={Cuenta}
				name='Cuenta'
				options={{
					title: 'Perfil',
				}}
			/>
		</Stack.Navigator>
	)
}

export default ProfileNavigator
