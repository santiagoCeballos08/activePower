/*importes */
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

/*funcion vista de info rutina*/
const ListaInfo = ({ navigation, premium, data }) => {
	const keyExtractor = (item, index) => index.toString()

	//render item
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity>
				<View>
					<Image source={{ uri: item.img }} style={StyleSheet.img} />
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<ScrollView style={styles.scroll}>
			<View>
				<FlatList keyExtractor={keyExtractor} data={data} renderItem={renderItem} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flex: 1,
		justifyContent: 'center',
	},
	scroll: {
		marginHorizontal: 'auto',
	},
	card: {
		height: 120,
		width: 90,
		marginHorizontal: 'auto',
		marginTop: 0,
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
		marginLeft: 200,
		fontWeight: 'bold',
		fontSize: 20,
	},
	desGratis: {
		marginTop: 10,
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

export default ListaInfo
