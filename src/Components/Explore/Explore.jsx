import React from 'react'

import './Explore.css'

import Divider from '../Divider/Divider'
import TripCard from '../TripCard/TripCard'

export default function Explore() {
	return (
		<>
			<div className="explore bd-container">
				<h1 className="explore__title">Explore</h1>
				<h3 className="explore__subtitle">Trips</h3>
				<Divider />
				<TripCard/>
				<Divider />
				<TripCard/>
				<Divider />
				<TripCard/>
				<Divider />
				<TripCard/>
				<Divider />
			</div>
		</>
	)
}
