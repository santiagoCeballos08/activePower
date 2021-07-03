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
		<View>
			<Text></Text>
			<Image
				source = {{uri:'https://www.snsmarketing.es/blog/wp-content/uploads/2015/11/experiencia-de-usuario.jpg'}}
			/>

			<View>
				<Text>
					informacion de usuario
				</Text>
				<Text> sanjose</Text>
				<Text>constraseña</Text>
			</View>
		</View>
	)
}

export default Cuenta
