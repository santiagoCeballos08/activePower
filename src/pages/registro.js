import React, { useState } from 'react'
//import { Button } from 'react-native-elements'
import { Colors } from 'react-native-paper'
import {
	Dimensions,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { InputRegistro } from '../components/InputRegistro'
import Icon from '../components/Icon'

const { width, height } = Dimensions.get('screen')

const Registro = ({ navigation }) => {
	//vamos a meter fontawesome

	const [colores, setColores] = useState({
		btn1: '#e84b1960',
		btn2: '#ff050560',
		bg1: '#D9387890',
		bg2: '#FFAA0090',
	})
	const [nombre, setNombre] = useState('')
	const [correo, setCorreo] = useState('')
	const [repContraseña, setRepContraseña] = useState('')
	const [contraseña, setContraseña] = useState('')

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				colors={[colores.bg1, colores.bg2]}
				style={styles.fondo}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
			></LinearGradient>
			<Text style={styles.title}> Registrate con </Text>
			<Text style={styles.title2}>Active Power</Text>
			<View style={styles.containerInput}>
				<InputRegistro
					icon='user'
					title='Nombre de usuario'
					value={nombre}
					onChange={setNombre}
					placeholder='nombre'
				/>
				<InputRegistro
					icon='mail3'
					title='Correo electronico'
					value={correo}
					onChange={setCorreo}
					placeholder='Correo'
				/>
				<InputRegistro
					icon='lock'
					title='Ingresa una Contraseña'
					value={contraseña}
					onChange={setContraseña}
					placeholder='Contraseña'
				/>
				<InputRegistro
					icon='lock'
					title='Repita la contraseña'
					value={repContraseña}
					onChange={setRepContraseña}
					placeholder='contraseña'
				/>
			</View>
			<TouchableOpacity onPress={() => navigation.navigate('menu')}>
				<LinearGradient colors={[colores.btn1, colores.btn2]} style={styles.boton}>
					<Text style={styles.Text}>Registrar usuario</Text>
				</LinearGradient>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title2: {
		position: 'absolute',
		fontWeight: 'bold',
		fontSize: 30,
		top: 100,
		color: '#ffff',
	},

	title: {
		fontWeight: 'bold',
		position: 'absolute',
		fontSize: 30,
		top: 70,
		color: '#ffff',
	},

	Text: {
		fontSize: 22,
		color: '#fff',
	},

	boton: {
		marginTop: 10,
		width: 250,
		height: 60,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},

	fondo: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: height,
	},

	container: {
		flex: 1,
		alignItems: 'center',
	},
	containerInput: {
		marginTop: width / 2,
	},
})
export default Registro
