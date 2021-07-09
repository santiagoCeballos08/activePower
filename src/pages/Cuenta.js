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
import { Input } from 'react-native-elements'
import firebase from '../../database/firebase'

//agregar 1 registro a la coleccion usuario
const nuevoUsuario = async () => {
	try {
		await firebase.db.collection('usuario').add({
			nombre: 'prueba',
			apellido: 'rodrigo',
			contraseña: '123',
		})
	} catch (error) {
		console.log(error)
	}
}

//delete
const borrarUsuario = () => {}

//listar
const listarUsuario = () => {
	try {
	} catch (e) {
		console.log(e)
	}
}
/*
---- vista de cuenta ----
*/
const Cuenta = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		firebase.db.collection('usuario').onSnapshot(query => {
			query.docs.forEach(doc => {
				console.log(doc.data())
			})
		})
	}, [])
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
					placeholder={'nombre'}
					placeholderTextColor='#DCB74E'
					style={styles.input}
				></TextInput>
				<TextInput
					placeholder={'contraseña'}
					placeholderTextColor='#DCB74E'
					style={styles.input}
				></TextInput>
				<TextInput
					placeholder={'email'}
					placeholderTextColor='#DCB74E'
					style={styles.input}
				></TextInput>
				<TouchableOpacity style={styles.editar}>
					<Text>editar</Text>
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
		marginBottom: 100,
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
})

export default Cuenta
