/*
---- importes utilizados ----
*/
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
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
			<Text>Cuenta</Text>
			<Button title='agg usuario' onPress={() => nuevoUsuario()} />
		</View>
	)
}

export default Cuenta
