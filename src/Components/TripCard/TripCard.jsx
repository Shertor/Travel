import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './TripCard.css'

import template from './template.svg'

import { loadImage } from '../../Utils/functions'

function TripCard({ img, title, subtitle, description, link }) {
	const [imageLoaded, setImageLoaded] = useState(false)

	useEffect(() => {
		loadImage(img)
			.then(() => setImageLoaded(true))
			.catch((err) => console.log('Failed to load images', err))
	}, [img])

	return (
		<>
			<NavLink to={link ? link : '#'} className="tripcard__wrapper">
				<div className="tripcard__media">
					{img ? (
						<>
							{imageLoaded ? null : (
								<div className="tripcard__img_svg__wrapper">
									<img
										src={template}
										alt="trip"
										className="tripcard__img tripcard__img_svg"
									/>
								</div>
							)}
							<img src={img} alt="trip" className="tripcard__img" />
						</>
					) : (
						<>
							<img
								src={template}
								alt="trip"
								className="tripcard__img tripcard__img_svg"
							/>
						</>
					)}
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
