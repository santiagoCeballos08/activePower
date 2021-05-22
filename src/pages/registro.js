import React, { useState } from 'react'
//import { Button } from 'react-native-elements'
import { Colors } from 'react-native-paper'
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'

const Registro = ({ navigation }) => {
	const [nombre, setNombre] = useState('escriba el nombre')
	const [correo, setCorreo] = useState('escriba el correo')
	/*const [contraseña, setContraseña] = react.useState('escribe una contraseña')
	const [contraseñaDos, setContraseñaDos] = react.useState('confirma la contraseña')*/

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
			<TouchableOpacity onPress={() => navigation.navigate('menu')}>
				<Text> registro </Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	input: {
		color: Colors.black,
	},
})
export default Registro
