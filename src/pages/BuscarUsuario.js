/*
---- importes utilizados ----
*/
import React, { createElement, useState } from 'react'
import { Text, View, Button } from 'react-native'
import firebase from '../../database/firebase'
import ListaUsers from '../components/ListaUsers'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RNHTMLtoPDF from 'react-native-html-to-pdf'

/*
---- vista crear rutinas ----
*/
const BuscarUsuario = ({ navigation, route }) => {
	//estado de los usuarios
	const [user, setUsers] = useState()
	//trae todos los usuarios
	const users = []
	firebase.db.collection('usuarios').onSnapshot(query => {
		query.docs.forEach(doc => {
			users.push({ id: doc.id, ...doc.data() })
		})
		setUsers(users)
	})

	//datos de prueba para realizar exportacion de datos a excel
	const data = [
		{ nombre: 'juan', edad: '20' },
		{ nombre: 'santi', edad: '20' },
		{ nombre: 'locito', edad: '20' },
		{ nombre: 'holita', edad: '20' },
	]

	if (user) {
		return (
			<View>
				<ListaUsers data={user} navigation={navigation} />
				<TouchableOpacity onPress={createPDF}>
					<Text>Create PDF</Text>
				</TouchableOpacity>
			</View>
		)
	} else {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 25, fontWeight: 'bold' }}>cargando......</Text>
				<TouchableOpacity onPress={createPDF}>
					<Text>Create PDF</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const createPDF = () => {
	console.log('hola')
	let options = {
		html: '<h1>PDF TEST</h1>',
		fileName: 'test',
		directory: 'Documents',
	}

	let file = RNHTMLtoPDF.convert(options)
	// console.log(file.filePath);
	alert(file.filePath)
}

export default BuscarUsuario
