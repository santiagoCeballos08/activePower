import React, { useState } from 'react'
//import { Button } from 'react-native-elements'
// import { Colors } from 'react-native-paper'
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
import firebase from '../../database/firebase'
import { useRef } from 'react'

//comienzo de formulario
const { width, height } = Dimensions.get('screen')

const Registro = ({ navigation }) => {
	const [colores, setColores] = useState({
		btn1: '#e84b1960',
		btn2: '#ff050560',
		bg1: '#D9387890',
		bg2: '#FFAA0090',
	})
	const [nombre, setNombre] = useState('')
	const [correo, setCorreo] = useState('')
	const [contraseña, setContraseña] = useState('')
	const [repContraseña, setRepContraseña] = useState('')

	//estado para el formulario
	const [user, setUser] = useState({
		nombre: '',
		email: '',
		pass: '',
		passR:'',
	})
	//capturar la informacion
	const capInformacion = (nombre, valor) => {
		setUser({...user, [nombre]:valor})
	}
	const registarUsuario = async() => {
		if (user.pass === user.passR){
		}
		if (user.nombre == '' || user.email == '' || user.pass == '') {
			alert('porfavor rellenar los campos correspondientes')
		} else {
			await firebase.db.collection('usuarios').add({
				nombre: user.nombre,
				email: user.email,
				pass: user.pass,
			})
			alert('registrado en active power')
		}

	}

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
					onChangeText = {(valor) => capInformacion('nombre', valor) }
				/>
				<InputRegistro
					icon='mail3'
					title='Correo electronico'
					value={correo}
					ss
					onChange={setCorreo}
					placeholder='Correo'
					onChangeText = {(valor) => capInformacion('email', valor) }
				/>
				<InputRegistro
					icon='lock'
					title='Ingresa la Contraseña'
					value={contraseña}
					onChange={setContraseña}
					placeholder='Contraseña'
					secureTextEntry={true}
					onChangeText = {(valor) => capInformacion('pass', valor) }
					secureTextEntry={true}
				/>
				<InputRegistro
					icon='lock'
					title='Repita la contraseña'
					value={repContraseña}
					onChange={setRepContraseña}
					placeholder='contraseña'
					secureTextEntry={true}
					onChangeText = {(valor) => capInformacion('passR', valor) }
					secureTextEntry ={true}
				/>
			</View>
			{/* onPress={() => navigation.navigate('menu')} */}
			<TouchableOpacity onPress = {() => registarUsuario()}>
				<LinearGradient colors={[colores.btn1, colores.btn2]} style={styles.boton}>
					<Text style={styles.Text}>Registrar usuario</Text>
				</LinearGradient>
			</TouchableOpacity>

			<View>
				<Text style={styles.text1}>¿ya tienes cuenta?</Text>
				<TouchableOpacity>
					<Text style={styles.text2}>inicia sesion</Text>
				</TouchableOpacity>
			</View>
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
	text1: {
		color: '#fff',
		marginLeft: 230,
		marginTop: 20,
	},

	text2: {
		color: '#A3E4D7',
		marginLeft: 280,
	},
})
export default Registro
