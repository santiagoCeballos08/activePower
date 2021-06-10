/*importes de librerias*/
import React, { memo } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from './Icon'

const Left = memo(({ navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				console.log('clicki')
				console.log(navigation)
			}}
		>
			<Icon name='circle-left' size='24' color={Colors.amber500} />

			{/* onPress=
				{() => {
					console.log('click', navigation.canGoBack())
					navigation.navigator('Gratis')
				}}
				> */}
		</TouchableOpacity>
	)
})

export default Left
