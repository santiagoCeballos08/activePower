import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Lista from '../components/Lista'

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
			<View style={styles.container}>
				<Text style={styles.text}>Nivel Avanzado</Text>
				<Lista premium='true' data={route.params.data} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scroll: {
		marginHorizontal: 'auto',
	},
	container: {
		marginTop: 20,
		width: 90,
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
