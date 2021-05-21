/*
---- importes utilizados ----
*/
import React from 'react'
import { Text, View } from 'react-native'
import Nav from '../components/Drawer/Nav'

/*
---- vista de premium ----
*/
const ModoPremium = ({ navigation, route }) => {
	return (
		<View>
			<Nav navigation={navigation} title='Comprar Premium' />
		</View>
	)
}

export default ModoPremium
