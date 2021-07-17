/*
---- importes utilizados ----
*/
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Lista from '../components/Lista'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')
/*
---- vista de rutinas gratis ----
*/
const Gratis = ({ navigation, route }) => {
	//genera un numero aleatorio para mostrar un mensaje random de los que hay en la db
	let min = 0
	let max = route.params.mensaje.length
	let numero = Math.floor(Math.random() * (max - min) + min)

	return (
		<View>
			<ScrollView style={{ height: height - 150, backgroundColor: '#fff' }}>
				<Text id='text' style={Styles.text}>
					{route.params.mensaje[numero]}
				</Text>
				<Lista navigation={navigation} data={route.params.data} premium={false} />
			</ScrollView>
		</View>
	)
}
//<Lista navigation={navigation} data={route.params.data} />

//estilos de Gratis
const Styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontSize: 25,
		margin: 20,
		fontWeight: '400',
	},
})

export default Gratis
