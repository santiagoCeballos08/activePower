/*
---- importes utilizados ----
*/
import React, { memo, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
import firebase from '../../database/firebase'

const { width, height } = Dimensions.get('screen')

/*
---- renderizado de la lista de la vista Gratis
*/
const Lista = memo(({ navigation, premium, data }) => {
	return (
		<View style={styles.view}>
			{data.map(data => {
				const ejs = []
				firebase.db.collection('rutinaGratis').doc(data.id).collection('ejercicios').onSnapshot(query => {
					query.docs.forEach(doc => {
						ejs.push(doc.data())
					})
					
				})

				//prueba
				// firebase.db.collection('rutinasgratis').doc(data.id).collection('ejercicicos')

				return (
					<RenderItem
						img={data.img}
						des={data.des}
						name={data.nombre}
						ejs={ejs}
						key={data.id}
						navigation={navigation}
					/>
				)
			})}
		</View>
	)
})

/*
	---- visualizacion de item
*/
const RenderItem = ({ img, des, name,ejs, navigation }) => {
	console.log('---------------')
	console.log('---------------')
	console.log(ejs)
	return (
		<TouchableOpacity
			onPress={() => {
				const data = { img, des, name,ejs }
				navigation.navigate('InfoRutina', { data })
			}}
		>
			<View style={styles.card}>
				<Image source={{ uri: img }} style={styles.img} />
				<View>
					<Text style={styles.titleGratis}>{name}</Text>
					<Text style={styles.desGratis}>{des}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
// navigation.navigate('InfoRutina', { data: item })
//estilos de la lista
const styles = StyleSheet.create({
	view: {
		backgroundColor: '#fff',
	},
	container: {
		marginTop: 10,
		flex: 1,
	},
	card: {
		backgroundColor: Colors.white,
		height: 110,
		width: width - 20,
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 25,
		position: 'relative',
		elevation: 8,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
	},
	titleGratis: {
		marginTop: 5,
		marginLeft: 150,
		fontWeight: 'bold',
		fontSize: 20,
	},
	desGratis: {
		marginTop: 10,
		width: 150,
		marginLeft: 150,
	},
	titlePremium: {
		marginTop: 5,
		marginLeft: 180,
		fontWeight: 'bold',
		fontSize: 20,
	},
	desPremium: {
		marginTop: 10,
		marginLeft: 130,
	},
	img: {
		position: 'absolute',
		width: 125,
		height: 95,
		marginLeft: 5,
		marginTop: 8,
		borderRadius: 15,
	},
})

export default Lista
