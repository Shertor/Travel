import React from 'react'

import './TripCard.css'

import test from '../Home/imgs/turkey_2020.jpg'

export default function TripCard({img, title, subtitle, description, link}) {
	return (
		<>
			<div className="tripcard__wrapper">
				<div className="tripcard__media">
					<img src={img} alt="" className="tripcard__img" />
				</div>
				<div className="tripcard__content">
					<div className="tripcard__title-section">
						<div className="tripcard__title">{title}</div>
						<div className="tripcard__subtitle">{subtitle}</div>
					</div>
					<div className="tripcard__text-section">
						<div className="tripcard__text">
							{description}
						</div>
					</div>
					<div className="tripcard__actions-section"><button className="btn btn_contained">READ ARTICLE</button></div>
				</div>
			</div>
		</>
	)
}
