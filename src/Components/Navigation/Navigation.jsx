import React, { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import './Navigation.css'

import Home from '../Home/Home'
import Explore from '../Explore/Explore'
// import NotFound from '../NotFound/NotFound'

export default function Navigation() {
	const [toggleNav, setToggleNav] = useState(false)

	function openNav() {
		// const body = document.getElementById('body')
		// body.classList.add('body-hidden')
		setToggleNav(true)
	}

	function closeNav() {
		// const body = document.getElementById('body')
		// body.classList.remove('body-hidden')
		setToggleNav(false)
	}

	function wrapperClick(event) {
		// console.log(event.target, event.currentTarget)
		if (event.target === event.currentTarget) {
			closeNav()
		}
	}

	return (
		<>
			<header className="header">
				{toggleNav ? (
					<div className="nav__menu-closer" onClick={wrapperClick}></div>
				) : null}

				<div className="header__blur"></div>

				<nav className="nav bd-container">
					<a href="#" className="nav__logo">
						Travel
					</a>

					<div
						className={toggleNav ? 'nav__menu show-menu' : 'nav__menu'}
						id="nav-menu"
					>
						<ul className="nav__list">
							<li className="nav__item">
								<NavLink to="/" className="nav__link" onClick={closeNav}>
									Home
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink to="/Explore" className="nav__link" onClick={closeNav}>
									Explore
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink
									to="/Destinations"
									className="nav__link"
									onClick={closeNav}
								>
									Destinations
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink to="/Hotels" className="nav__link" onClick={closeNav}>
									Hotels
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="nav__toggle" id="nav-toggle" onClick={openNav}>
						<i className="bx bx-menu"></i>
					</div>
				</nav>
			</header>

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/Explore" element={<Explore />} />
				<Route path="/Destinations" element={<Home />} />
				<Route path="/Hotels" element={<Home />} />

				{/* 404 Page */}
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</>
	)
}
