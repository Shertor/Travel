import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './TripCard.css'

import stock from './stock.jpg'

function TripCard({ img, title, subtitle, description, link }) {
	return (
		<>
			<NavLink to={link?link:"#"} className="tripcard__wrapper">
				<div className="tripcard__media">
					<img src={img ? img : stock} alt="trip" className="tripcard__img" />
				</div>
				<div className="tripcard__content">
					<div className="tripcard__title-section">
						<div className="tripcard__title">{title}</div>
						<div className="tripcard__subtitle">{subtitle}</div>
					</div>
					<div className="tripcard__text-section">
						<div className="tripcard__text">{description}</div>
					</div>
					{/* <div className="tripcard__actions-section"><button className="btn btn_contained">READ ARTICLE</button></div> */}
				</div>
			</NavLink>
		</>
	)
}

TripCard.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.object,
}

export default TripCard
