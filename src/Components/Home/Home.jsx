import React from 'react'

import './Home.css'

import turkey2018 from './imgs/turkey2018.jpg'

export default function Home() {
	return (
		<>
			<div className="home">
				<div>
					<div>
						<section className="trips">
							<img src={turkey2018} alt="" className="trips__bg" />

							<div className="trips__container bd-container">
								<div className="trips__data">
									<h2 className="trips__subtitle">Trips</h2>
									<h1 className="trips__title">Fethiye</h1>
									<p className="trips__description">
										Fethiye is a city and district of Muğla Province in the
										Aegean Region of Turkey. It is one of the prominent tourist
										destinations in the Turkish Riviera.
									</p>
									<a href="#" className="trips__button">
										Explore{' '}
										<i className="bx bx-right-arrow-alt trips__button-icon"></i>
									</a>
								</div>

								<div className="trips__trip">
									<div className="trip__wrapper">
										<div className="trip__content"></div>
									</div>
								</div>
							</div>
						</section>

						<section className="trips"></section>

						<section className="trips"></section>
					</div>
				</div>
			</div>
		</>
	)
}
