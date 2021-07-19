/*
---- importes utilizados ----
*/
import React, { useEffect, useState } from 'react'
import {
	Dimensions,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput,
	Image,
} from 'react-native'
import {Colors} from 'react-native-paper'
import { Input } from 'react-native-elements'
import * as firebase from 'firebase'

/*
---- vista de cuenta ----
*/
//estados para los datos de usuarios
const Cuenta = () => {
	//toma de informacion
	const [usuario, setUsuario] = useState({
		contraseña: '',
		email: '',
		nombre: '',
	})

	const capturaInfo = (nombre, valor) => {
		setUsuario({ ...usuario, [nombre]: valor })
	}

	const updateUser = () => {
		if (usuario.contraseña !== '' && usuario.email !== '' && usuario.nombre !== '') {
			user.updateProfile({
					displayName: usuario.nombre,
				})
				.then(() => {
					user.updateEmail(usuario.email)
						.then(() => {
							user.updatePassword(usuario.contraseña)
								.then(() => alert('datos modificados correctamente'))
								.catch(e => alert(e))
						})
						.catch(e => alert(e))
				})
				.catch(e => alert(e))
		} else {
			aler('ingrese todos los datos')
		}
	}

	const deleteUser = () => {
		user.delete()
			.then(() => alert('usuario eliminado'))
			.catch(e => alert(e))
	}

	//mandar informacion
	// const [datosUsuario, setDatosUsuario] = useState([])

	//traer todos los datos de los usuarios
	const user = firebase.default.auth().currentUser

	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://media.istockphoto.com/vectors/person-icon-flat-red-round-button-vector-illustration-vector-id1162434010?k=6&m=1162434010&s=170667a&w=0&h=5MLepQ4-jBaKJfKD-t5lB-5Bj-5yKGVjqCt5ld4Jc-Q=',
				}}
				style={styles.img}
			/>
			<View style={styles.info}>
				<Text style={styles.texto}>informacion de usuarios</Text>
				<Text style={styles.texto}>editar</Text>

				<TextInput
					placeholder={user.displayName ? user.displayName : 'nombre'}
					placeholderTextColor='#DCB74E'
					style={styles.input}
					onChangeText={valor => capturaInfo('nombre', valor)}
				></TextInput>
				<TextInput
					placeholder={'contraseña'}
					placeholderTextColor='#DCB74E'
					style={styles.input}
					onChangeText={valor => capturaInfo('contraseña', valor)}
				></TextInput>
				<TextInput
					placeholder={user.email}
					placeholderTextColor='#DCB74E'
					style={styles.input}
					onChangeText={valor => capturaInfo('email', valor)}
				></TextInput>
				<TouchableOpacity style={styles.editar} onPress={() => updateUser()}>
					<Text>editar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.eliminar} onPress={() => deleteUser()}>
					<Text>eliminar</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		height: 200,
		width: 200,
		marginBottom: 50,
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		height: 270,
		width: 300,
		backgroundColor: '#fff',
		alignItems: 'center',
		elevation: 10,
	},
	input: {
		backgroundColor: '#fff',
		color: '#DCB74E',
		fontSize: 15,
		fontWeight: 'bold',
		height: 25,
		width: 250,
		marginLeft: 4,
		borderRadius: 15,
		marginBottom: 20,
		borderColor: 'black',
		borderWidth: 1,
		elevation: 3,
	},
	texto: {
		fontSize: 15,
		fontWeight: 'bold',
	},

	editar: {
		backgroundColor: '#FFE1C8',
		height: 30,
		width: 80,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 10,
		alignSelf: 'flex-end',
		marginRight: 10,
	},
	eliminar:{
		backgroundColor: Colors.red400,
		height: 30,
		width: 80,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 10,
		alignSelf: 'flex-end',
		marginRight: 10,
	}
})

export default Cuenta
