import React from 'react'
import { Dimensions } from 'react-native'
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

const ListaUsers = ({ data, navigation }) => {
	return (
		<ScrollView style={{ height: height - 10, backgroundColor: '#fff' }}>
			{data.map(data => {
				return (
					<RenderItem
						email={data.email}
						nombre={data.nombre}
						key={data.id}
						pass={data.pass}
						premium={data.premium}
						img={data.img}
						navigation={navigation}
					/>
				)
			})}
		</ScrollView>
	)
}

const RenderItem = ({ navigation, img, nombre, email, pass, premium }) => {
	return (
		<TouchableOpacity>
			<View style={styles.card}>
				<Image source={{ uri: img }} style={styles.img} />
				<View>
					<Text style={styles.nombre}>{nombre}</Text>
					<Text style={styles.email}>{email}</Text>
					<Text style={styles.premium}>Posee premium: {premium} </Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		marginTop: 10,
		flex: 1,
	},
	card: {
		backgroundColor: '#fff',
		height: 110,
		width: width - 20,
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 40,
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
	nombre: {
		marginTop: 5,
		marginLeft: 150,
		fontWeight: 'bold',
		fontSize: 20,
	},
	email: {
		marginTop: 10,
		marginLeft: 150,
	},
	premium: {
		marginTop: 15,
		marginLeft: 150,
	},
	img: {
		position: 'absolute',
		marginLeft: 5,
		marginTop: 8,
		borderRadius: 15,
		width: 125,
		height: 95,
	},
})

export default ListaUsers
