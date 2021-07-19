import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { View, StyleSheet, Text, Button } from 'react-native'

const { width, height } = Dimensions.get('screen')

const Alerta = ({ text }) => {
	const [alert, setAlert] = useState(true)
	return <Selector alert={alert} setAlert={setAlert} />
}

const Selector = ({ alert, setAlert }) => {
	if (alert) {
		return (
			<View style={styles.view}>
				<Text>{text}</Text>
				<Button
					title='Okey'
					onPress={() => {
						setAlert(false)
					}}
				/>
			</View>
		)
	} else {
		return <View></View>
	}
}

const styles = StyleSheet.create({
	view: {
		zIndex: 100,
		backgroundColor: '#67855a',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: width,
		left: 10,
		width: width - 20,
		height: 150,
	},
})

export default Alerta
