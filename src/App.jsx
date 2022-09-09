import React, { useEffect, useState } from 'react'
import './App.css'

import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/Loader'

function App() {
	const [loaded, setLoaded] = useState(false)

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
		<div className="App">
			<>
				<Navigation />
				<Footer />
			</>
		</div>
	) : (
		<Loader></Loader>
	)
}

export default App
