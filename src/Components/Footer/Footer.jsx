import React from 'react'

import { NavLink } from 'react-router-dom'

import './Footer.css'

export default function Footer() {
	return (
		<>
			<div className="footer__wrapper ">
				<footer className="footer bd-container">
					<div className="footer__site-info">
						<div className="site-info__title">ABOUT</div>
						<div className="site-info__subtile">Travel Vebsite Project</div>
						<div className="site-info__copy">by Shertor</div>
						<div className="site-info__contacts">
							<a
								href="https://github.com/Shertor"
								target="_blank"
								rel="noreferrer"
								className="site-info__contacts-item"
							>
								<i className="bx bxl-github"></i>
							</a>
						</div>
					</div>
					<div className="footer__site-nav">
						<div className="site-info__title">TRAVEL WITH US</div>
						<NavLink to="/" className="site-nav__item">
							Home
						</NavLink>
						<NavLink to="/Explore/" className="site-nav__item">
							Explore
						</NavLink>
						<div to="/Destinations/" className="site-nav__item">
							Destinations <span className="coming-soon__info">soon!</span>
						</div>
						<div to="/Hotels/" className="site-nav__item">
							Hotels <span className="coming-soon__info">soon!</span>
						</div>
					</div>
					<div className="footer__projects">
						<div className="site-info__title">MORE PROJECTS</div>
						<a
							href="https://shertor.github.io/FluttMeInfo/"
							target="_blank"
							rel="noreferrer"
							className="projects__item"
						>
							FluttMeInfo
						</a>
					</div>
				</footer>
			</div>
		</>
	)
}
