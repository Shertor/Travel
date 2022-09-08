import React from 'react'

import './Explore.css'

import Divider from '../Divider/Divider'
import TripCard from '../TripCard/TripCard'

import turkey_2018 from '../Home/imgs/turkey_2018-min.jpg'
import turkey_2021 from '../Home/imgs/turkey_2021-min.jpg'
import turkey_2022 from '../Home/imgs/turkey_2022-min.jpg'

export default function Explore() {
	return (
		<>
			<div className="explore bd-container">
				<h1 className="explore__title">Explore</h1>
				<h3 className="explore__subtitle">Trips</h3>
				<Divider />
				<TripCard
					img={turkey_2022}
					title="Kemer"
					subtitle="2022"
					description="Kemer is a seaside resort and district of Antalya Province 
					on the Mediterranean coast of Turkey, 43 km (27 mi) west of the city of 
					Antalya, on the Turkish Riviera."
				/>
				<Divider />
				<TripCard
					img={turkey_2021}
					title="Fethiye"
					subtitle="2021"
					description="Fethiye is a city and district of Muğla Province in the Aegean 
					Region of Turkey. It is one of the prominent tourist 
					destinations in the Turkish Riviera."
				/>
				<Divider />
				<TripCard
					img={turkey_2018}
					title="İstanbul"
					subtitle="2018"
					description="İstanbul is the largest city in Turkey, serving as the
					country's economic, cultural and historic hub. The city
					straddles the Bosporus strait, lying in both Europe and Asia,
					and has a population of over 15 million residents, comprising
					19% of the population of Turkey. Istanbul is the most populous
					European city, and the world's 15th-largest city."
				/>
				<Divider />
			</div>
		</>
	)
}
