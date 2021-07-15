import React, { useState } from 'react'
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
import * as firebase from 'firebase'


const { width, height } = Dimensions.get('screen')

const inicioSesion = ({navigation}) => {
	const [correo, setCorreo] = useState('')
	const [contraseña, setContraseña] = useState('')

	const [user, setUser] = useState({
		email: '',
		pass: '',
	})
	//CAPTURA DE INFORMACION
	const capInformacion = (nombre, valor) => {
		setUser({...user, [nombre]:valor})
	}
	//FUNCION PARA VALIDACIO
	const iniciarSesion = () => {
		if (user.email == '' || user.pass == ''){
			alert('por favor introduzca las credenciales')
		}else {
			firebase.default.auth().signInWithEmailAndPassword(user.email, user.pass)  .then((userCredential) => {
				var user = userCredential.user;
				console.log('entro')

				})
				.catch((error) => {
					var errorCode = error.code;
					var errorMessage = error.message;
					alert('contraseña o correo no valido')
				});
		}
	}

	const [colores, setColores] = useState({
		btn1: '#e84b1960',
		btn2: '#ff050560',
		bg1: '#D9387890',
		bg2: '#FFAA0090',
	})

	return (
		<SafeAreaView style={styles.container}>
			{/* fondo del inicio */}
			<LinearGradient
				colors={[colores.bg1, colores.bg2]}
				style={styles.fondo}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
			></LinearGradient>
			<Text style={styles.title}> inicia tu sesión </Text>
			<Text style={styles.title2}>Active Power</Text>

			<View style={styles.containerInput}>
			<InputRegistro
					icon='mail3'
					title='Correo electronico'
					value={user.email}
					onChange={setCorreo}
					placeholder='Correo'
					onChangeText = {(valor) => capInformacion('email', valor) }
				/>
			<InputRegistro
					icon='lock'
					title='insgrese una contraseña'
					value={user.pass}
					onChange={setContraseña}
					placeholder='contraseña'
					onChangeText = {(valor) => capInformacion('pass', valor) }
					secureTextEntry={true}
			/>
			</View>
			<TouchableOpacity onPress={() => iniciarSesion()}>
				<LinearGradient colors={[colores.btn1, colores.btn2]} style={styles.boton}>
					<Text style={styles.Text}>iniciar sesion</Text>
				</LinearGradient>
			</TouchableOpacity>

			<Text style={styles.text1}>¿no tienes cuenta?</Text>
			<TouchableOpacity>
				<Text style={styles.text2}>registrate</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
		}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	containerInput: {
		marginTop: width / 5,
	},
	fondo: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: height,
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

export default inicioSesion
