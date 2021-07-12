/*
---- importes utilizados ----
*/
import React from 'react'
import { View } from 'react-native'
import ListaUsers from '../components/ListaUsers'

/*
---- vista crear rutinas ----
*/
const BuscarUsuario = ({ navigation, route }) => {
	const user = route.params.user
	return (
		<View>
			<ListaUsers data={user} navigation={navigation} />
			{/* <TouchableOpacity onPress={createPDF}>
					<Text>Create PDF</Text>
				</TouchableOpacity> */}
		</View>
	)
}

// const createPDF = () => {
// 	console.log('hola')
// 	let options = {
// 		html: '<h1>PDF TEST</h1>',
// 		fileName: 'test',
// 		directory: 'Documents',
// 	}

// 	let file = RNHTMLtoPDF.convert(options)
// 	// console.log(file.filePath);
// 	alert(file.filePath)
// }

export default BuscarUsuario
