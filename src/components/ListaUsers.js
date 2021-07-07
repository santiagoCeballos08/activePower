import React from 'react'
import { Dimensions } from 'react-native'
import { View, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const ListaUsers = ({ data, navigation }) => {
	return (
		<View>
			{data.map(data => {
				return (
					<RenderItem
						email={data.email}
						nombre={data.nombre}
						key={data.id}
						pass={data.pass}
						img={data.img}
						navigation={navigation}
					/>
				)
			})}
		</View>
	)
}
//enlace de la img generica

const RenderItem = ({ navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				const data = { img, nombre, email, pass }
				// navigation.navigate('Info', { data })
			}}
		>
			<View style={styles.card}>
				<Image source={{ uri: img }} style={styles.img} />
				<View>
					<Text style={styles.nombre}>{nombre}</Text>
					<Text style={styles.email}>{email}</Text>
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
