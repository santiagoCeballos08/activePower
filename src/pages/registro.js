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
	Alert,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { InputRegistro } from '../components/InputRegistro'
import * as firebase from 'firebase'
import AwesomeAlert from 'react-native-awesome-alerts'

//comienzo de formulario
const { width, height } = Dimensions.get('screen')

const Registro = ({ navigation }) => {
	const [colores, setColores] = useState({
		btn1: '#e84b1960',
		btn2: '#ff050560',
		bg1: '#D9387890',
		bg2: '#FFAA0090',
	})
	const [correo, setCorreo] = useState('')
	const [contraseña, setContraseña] = useState('')
	const [repContraseña, setRepContraseña] = useState('')

	//estado para el formulario
	const [user, setUser] = useState({
		email: '',
		pass: '',
		passR: '',
	})
	//capturar la informacion
	const capInformacion = (nombre, valor) => {
		setUser({ ...user, [nombre]: valor })
	}

	const registarUsuario = () => {
		if (user.pass === user.passR) {
			if (user.nombre == '' || user.email == '' || user.pass == '') {
				Alert.alert('Error!', 'porfavor rellenar los campos correspondientes', [
					{ text: 'Okey', onPress: () => console.log('alerta cerrada') },
				])
			} else {
				firebase.default
					.auth()
					.createUserWithEmailAndPassword(user.email, user.pass)
					.then(() => {
						console.log('User account created & signed in!')
					})
					.catch(error => {
						if (error.code === 'auth/email-already-in-use') {
							Alert.alert('Error!', 'el correo ya esta en uso!', [
								{ text: 'Okey', onPress: () => console.log('alerta cerrada') },
							])
						}

						if (error.code === 'auth/invalid-email') {
							Alert.alert('Error!', 'el correo no es valido!', [
								{ text: 'Okey', onPress: () => console.log('alerta cerrada') },
							])
						}

						console.error(error)
					})
				Alert.alert('Error!', 'registrado en active power', [
					{ text: 'Okey', onPress: () => console.log('alerta cerrada') },
				])
			}
			Alert.alert('Error!', 'la contraseñas no coinciden', [
				{ text: 'Okey', onPress: () => console.log('alerta cerrada') },
			])
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
					value={user.nombre}
					onChange={setNombre}
					placeholder='nombre'
					onChangeText={valor => capInformacion('nombre', valor)}
				/>
				<InputRegistro
					icon='mail3'
					title='Correo electronico'
					value={user.email}
					onChange={setCorreo}
					placeholder='Correo'
					onChangeText={valor => capInformacion('email', valor)}
				/>
				<InputRegistro
					icon='lock'
					title='Ingresa la Contraseña'
					value={user.pass}
					onChange={setContraseña}
					placeholder='Contraseña'
					secureTextEntry={true}
					onChangeText={valor => capInformacion('pass', valor)}
				/>
				<InputRegistro
					icon='lock'
					title='Repita la contraseña'
					value={user.passR}
					onChange={setRepContraseña}
					placeholder='contraseña'
					secureTextEntry={true}
					onChangeText={valor => capInformacion('passR', valor)}
				/>
			</View>
			{/* onPress={() => navigation.navigate('menu')} */}
			<TouchableOpacity onPress={() => registarUsuario()}>
				<LinearGradient colors={[colores.btn1, colores.btn2]} style={styles.boton}>
					<Text style={styles.Text}>Registrar usuario</Text>
				</LinearGradient>
			</TouchableOpacity>

			<View>
				<Text style={styles.text1}>¿ya tienes cuenta?</Text>
				<TouchableOpacity onPress={() => navigation.navigate('InicioSesion')}>
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
