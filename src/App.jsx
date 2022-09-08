import React, { useEffect, useState } from 'react'
import './App.css'
import './boxicons.min.css'

import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/Loader'

import Context from './context'

function App() {
	const [loaded, setLoaded] = useState(false)
	const [homeLoaded, setHomeLoaded] = useState(false)

	useEffect(() => {
		const onPageLoad = () => {
			setLoaded(true)
		}

		if (document.readyState === 'complete') {
			onPageLoad()
		} else {
			window.addEventListener('load', onPageLoad)

			return () => window.removeEventListener('load', onPageLoad)
		}
	}, [])

	return loaded ? (
		<Context.Provider value={{ homeLoaded, setHomeLoaded }}>
			<div className="App">
				<>
					{homeLoaded?null:<Loader></Loader>}
					<Navigation />
					<Footer />
				</>
			</div>
		</Context.Provider>
	) : <Loader></Loader>
}

export default App
