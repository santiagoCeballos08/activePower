/*importes de librerias*/
import React from 'react'
import { Dimensions } from 'react-native'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput, Text } from 'react-native'
import Icon from './Icon'
import { Input } from 'react-native-elements'

const { width, height } = Dimensions.get('window')

export const InputRegistro = ({ icon, title, value, onChange, placeholder }) => {
	return (
		<View style={styles.container}>
			<Input
				label={title}
				labelStyle={styles.titles}
				inputStyle={styles.inputs}
				inputContainerStyle={styles.input}
				leftIcon={() => <Icon name={icon} color='#fff' size={20} />}
				value={value}
				onChange={text => {
					onChange(text)
				}}
				placeholder={placeholder}
			/>
		</View>
	)
}

/*<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChange}
				placeholder={placeholder}
			/>*/

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		width: 320,
		height: 100,
	},
	inputs: {
		marginLeft: 45,
	},
	input: {
		paddingLeft: 10,
		color: '#000',
		width: 300,
		height: 60,
		fontSize: 20,
		borderWidth: 1,
		borderRadius: 50,
		backgroundColor: '#A766',
	},
	titles: {
		top: 20,
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 17,
		zIndex: 3,
	},
})
