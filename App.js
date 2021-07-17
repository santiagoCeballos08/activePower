/* dependecias */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import InicioNavegation from './src/stack/InicioNavegation'

/*componente principal */

const App = () => {
	return (
		<NavigationContainer>
			<InicioNavegation />
		</NavigationContainer>
	)
}

export default App
