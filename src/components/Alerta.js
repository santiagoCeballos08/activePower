import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { View, StyleSheet, Text, Button, TouchableOpacity, } from 'react-native'

const { width, height } = Dimensions.get('screen')

const Alerta = ({ msg,setMsg }) => {
	return <Selector msg={msg} setMsg={setMsg}/>
}

const Selector = ({ msg, setMsg}) => {

		return (
			<View style={styles.container}>
				<View style={styles.view}>
					<Text style={styles.text}>Error!</Text>
					<Text style={styles.text2}>{msg}</Text>
					<TouchableOpacity
						style={styles.boton}
						onPress={() => {
							setMsg('')
						}}>
						<Text>Entendido</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	
}

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#00000090',
		zIndex: 99,
		position: 'absolute',
		width,
		height
	},
	view: {
		zIndex: 100,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: width -80,
		left: 10,
		width: width - 20,
		height: 200,
		borderRadius: 10,
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	text2: {
		fontSize: 17,
		marginBottom: 30
	},
	boton: {
		backgroundColor: '#ff050560',
		padding: 10,
		borderRadius: 5
	}
})

export default Alerta
