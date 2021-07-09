/* dependecias */

import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import InicioNavegation from './src/stack/InicioNavegation'

//app

const App = () => {
	return (
		<NavigationContainer>
			<InicioNavegation />
		</NavigationContainer>
	)
}

export default App
