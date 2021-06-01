/*
---- importe necesarios ---- 
*/
import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from './Icon'
//import { AntDesign } from '@expo/vector-icons'

//AntDesign.loadFont()
//<AntDesign name={icon} size={18} style={{ color }} />
/*
---- renderizado de item de la navegacion inferior ----
*/
const Tab = ({ tab, icon, onPress, color }) => {
	return (
		<TouchableOpacity style={style.container} onPress={onPress}>
			<Icon name={icon} size={18} color={color} />
			<Text style={{ color }}>{tab.name}</Text>
		</TouchableOpacity>
	)
}

//estilos de la navegacion inferior
const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
	},
})

export default Tab
