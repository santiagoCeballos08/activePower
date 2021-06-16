import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
import Lista from '../components/Lista'

const { width, height } = Dimensions.get('screen')

const Premium = ({ navigation, route }) => {
	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.container}>
				<Text style={styles.text}>Nivel Principiante</Text>
				<Lista premium='true' data={route.params.data} navigation={navigation} />
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Nivel Medio</Text>
				<Lista premium='true' data={route.params.data} />
			</View>
			<View style={styles.containerEnd}>
				<Text style={styles.text}>Nivel Avanzado</Text>
				<Lista premium='true' data={route.params.data} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scroll: {
		backgroundColor: '#fff',
	},
	container: {
		marginLeft: 15,
		backgroundColor: Colors.white,
		marginTop: 20,
		width: width - 30,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	containerEnd: {
		marginLeft: 15,
		marginBottom: 70,
		backgroundColor: Colors.white,
		marginTop: 20,
		width: width - 30,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 5,
		marginLeft: 10,
		marginBottom: 5,
	},
})

export default Premium
