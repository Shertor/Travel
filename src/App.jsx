import { useEffect } from 'react'
import './App.css'
import './boxicons.min.css'

import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'

function App() {
	const appHeight = () => {
		const doc = document.documentElement
		doc.style.setProperty('--app-height', `${window.innerHeight}px`)
	}

	useEffect(() => {
		window.addEventListener('resize', appHeight)
		appHeight()
	}, [])

	return (
		<div className="App">
			<Navigation />
			<Footer />
		</div>
	)
}

export default App