/*
---- importes utilizados ----
*/
import React,{useState} from 'react'
import { Text, View } from 'react-native'
import firebase from '../../database/firebase'
import ListaUsers from '../components/ListaUsers'

/*
---- vista crear rutinas ----
*/
const BuscarUsuario = ({ navigation, route }) => {
	//estado de los usuarios
	const [user,setUsers]=useState()
	//trae todos los usuarios
	const users=[]
	firebase.db.collection('usuarios').onSnapshot(query => {
		query.docs.forEach(doc => {
			users.push({id:doc.id, ...doc.data()})
		})
	})

	if(user){
		return(
			<>
				<ListaUsers data={data} navigation={navigation}/>
			</>
		)
	}else{
		return (
			<View>
				<Text>cargando......</Text>
			</View>
		)
	}
}

export default BuscarUsuario
