/*
---- importes utilizados ----
*/
import { Video } from 'expo-av'
import React, { memo, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import { View, Text, Image, StyleSheet, Linking, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

const { width, height } = Dimensions.get('window')

/*
---- vista de info ----
*/

const Info = memo(({ navigation, route }) => {
	const color1 = '#e84b1960',
		color2 = '#ff050560'
	const data = route.params.data

	return (
		<ScrollView style={{ backgroundColor: Colors.red500, height: height - 500, width }}>
			<View style={styles.contenedor}>
				<View style={styles.containerImg}>
					<Image
						source={{
							uri: data.img,
						}}
						style={styles.img}
					/>
				</View>
				<View styles={styles.containerVideo}>
					<Text style={styles.exp}>Explicación por Video</Text>
					<TouchableOpacity onPress={() => Linking.openURL(data.video)}>
						<LinearGradient colors={[color1, color2]} style={styles.btn}>
							<Text style={styles.txt}>Precioname para ver el video</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
				<View style={styles.expContainer}>
					<Text style={styles.exp}>Instrucciones</Text>
					<Text>{data.res}</Text>
				</View>
			</View>
		</ScrollView>
	)
})

//estilos de info
const styles = StyleSheet.create({
	contenedor: {
		backgroundColor: '#fff',
		width,
		height,
	},
	containerImg: {
		marginLeft: width / 10 - 25,
		marginTop: 30,
		backgroundColor: '#fff',
		width: width - 30,
		height: 170,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	img: {
		marginLeft: width / 3 - 20,
		width: 150,
		height: 150,
	},
	containerVideo: {
		flex: 1,
		alignContent: 'center',
		backgroundColor: '#fff',
		marginTop: 50,
		width: width - 50,
		shadowColor: '#111',
		shadowOffset: {
			width: 200,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	expContainer: {
		backgroundColor: '#fff',
		width: 350,
		marginTop: 30,
		marginLeft: 30,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		justifyContent: 'center',
		textAlign: 'center',
	},
	exp: {
		marginTop: 8,
		marginBottom: 10,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
	},
	txt: {
		marginTop: 7,
		fontSize: 15,
		color: '#ffff',
		textAlign: 'center',
	},
	btn: {
		margin: 10,
		display: 'flex',
		marginLeft: width / 4 - 10,
		width: 220,
		height: 50,
		padding: 5,
		borderRadius: 20,
	},
})

export default Info
