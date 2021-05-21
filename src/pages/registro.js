import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import { Colors } from 'react-native-paper'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'

const Registro = ({ navigation }) => {
	const [nombre, setNombre] = useState('')
	const [correo, setCorreo] = useState('')
	/* 	const [contraseña, setContraseña] = react.useState('escribe una contraseña')
	const [contraseñaDos, setContraseñaDos] = react.useState('confirma la contraseña') */

	return (
		<SafeAreaView>
			<TextInput
				style={styles.input}
				onChangeText={setNombre}
				value={nombre}
				placeholder='ingrese su nombre'
			/>
			<TextInput
				style={styles.input}
				onChangetext={setCorreo}
				value={correo}
				placeholder='ingrese un correo'
			/>
			{/* 	<TextInput style={style.input} /> */}
			{/*boton provisional para cambiar depues de registro */}
			<Button
				title='registro'
				buttonStyle={{ backgroundColor: 'rgba(0,0,0,100)' }}
				onPress={() => navigation.navigate('menu')}
			/>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	input: {
		color: Colors.amber100,
	},
})
export default Registro
