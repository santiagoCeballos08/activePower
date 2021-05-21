/*
---- importes utilizados ----
*/
import React from 'react'
import { Text, View } from 'react-native'
import Nav from '../components/Drawer/Nav'

/*
---- vista crear rutinas ----
*/
const CrearRutina = ({ navigation, route }) => {
	return (
		<View>
			<Nav navigation={navigation} title='Crear rutina' />
		</View>
	)
}

export default CrearRutina
