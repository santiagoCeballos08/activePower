/*
---- importes utilizados ----
*/
import React from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'

const { width, height } = Dimensions.get('screen')

/*
---- renderizado de la lista de la vista Gratis
*/
const Lista = ({ navigation, premium, data }) => {
	const keyExtractor = (item, index) => index.toString()

	/*
	---- visualizacion de item
	*/
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity>
				<View
					style={styles.card}
					onTouchStart={() => {
						navigation.navigate('InfoRutina', { data: item })
					}}
				>
					<Image source={{ uri: item.img }} style={styles.img} />
					<Selector item={item} />
				</View>
			</TouchableOpacity>
		)
	}
	/*
	---- detector de en que vista se esta renderizando entre premium y gratis ----
	*/
	const Selector = ({ item }) => {
		if (premium) {
			return (
				<View>
					<Text style={styles.titlePremium}>{item.nombre}</Text>
					<Text style={styles.desPremium}>{item.des}</Text>
				</View>
			)
		} else {
			return (
				<View>
					<Text style={styles.titleGratis}>{item.nombre}</Text>
					<Text style={styles.desGratis}>{item.des}</Text>
				</View>
			)
		}
	}

	return <FlatList keyExtractor={keyExtractor} data={data} renderItem={renderItem} />
}

//estilos de la lista
const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flex: 1,
	},
	card: {
		height: height / 10,
		width: width - 20,
		marginHorizontal: 'auto',
		marginTop: 10,
		marginLeft: 10,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		marginBottom: 40,
		position: 'relative',
	},
	img: {
		borderRadius: 25,
	},
	titleGratis: {
		marginTop: 5,
		marginLeft: 150,
		fontWeight: 'bold',
		fontSize: 20,
	},
	desGratis: {
		marginTop: 10,
		width: width / 2,
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
		marginTop: 1,
		borderRadius: 15,
	},
})

export default Lista
