/*
---- importe necesarios ---- 
*/
import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

/*
---- renderizado de item de la navegacion inferior ----
*/
const Tab = ({ tab, icon, onPress, color }) => {
	return (
		<TouchableOpacity style={style.container} onPress={onPress}>
			<AntDesign name={icon} size={18} style={{ color }} />
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
