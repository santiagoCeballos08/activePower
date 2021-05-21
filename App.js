/* dependecias */

import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import InicioNavegation from './src/stack/InicioNavegation'

//app

const App = () => {
	const [splash, setSplash] = useState(true)

	//el tiempo del splash

	return (
		<NavigationContainer>
			<InicioNavegation />
		</NavigationContainer>
	)
}

export default App
