/*
------ importes utilizados ------
*/
import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Drawer } from 'react-native-paper'
import { FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

/*
----- contenido de el munu de hamburgesa
*/
const DrawerContent = props => {
	//fuente customizada
	try {
		const [loaded, err] = useFonts({
			Oswald: require('../../fonts/Oswald-Medium.ttf'),
		})
	} catch (error) {
		console.log(error)
	}
	return (
		<View>
			<Text style={styles.title}>Active Power</Text>
		</View>
	)
}
// estilos utilizados para la hamburguesa
const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontFamily: 'Oswald',
		fontWeight: '500',
		margin: 'auto',
		marginTop: '45',
		marginBottom: '45',
		color: '#FF8F09',
	},
	item: {
		color: 'red',
		fontSize: 40,
		fontWeight: '500',
		margin: 'auto',
	},
})

export default DrawerContent

/**/
