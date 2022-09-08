import React, { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import ScrollToTop from '../../Utils/ScrollToTop'
// import { HashLink } from 'react-router-hash-link'

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
			<header className="header ">
				{toggleNav ? (
					<div className="nav__menu-closer" onClick={wrapperClick}></div>
				) : null}

				<nav className="nav bd-container">
					<div className="header__blur"></div>
					<div className="nav__content" onClick={wrapperClick}>
						<NavLink to="/" className="nav__logo">
							Travel
						</NavLink>

						<div
							className={toggleNav ? 'nav__menu show-menu' : 'nav__menu'}
							id="nav-menu"
						>
							<ul className="nav__list">
								<li className="nav__item">
									<NavLink
										to="/"
										className={({ isActive }) =>
											isActive ? 'nav__link is-active' : 'nav__link'
										}
										onClick={closeNav}
									>
										<div>Home</div>
									</NavLink>
								</li>
								<li className="nav__item">
									<NavLink
										to="/Explore"
										className={({ isActive }) =>
											isActive ? 'nav__link is-active' : 'nav__link'
										}
										onClick={closeNav}
									>
										<div>Explore</div>
									</NavLink>
								</li>
								<li className="nav__item">
									<div
										to="/Destinations"
										className="nav__link"
										onClick={closeNav}
									>
										<div>
											Destinations
											<span className="coming-soon__info">soon!</span>
										</div>
									</div>
								</li>
								<li className="nav__item">
									<div to="/Hotels" className="nav__link" onClick={closeNav}>
										<div>
											Hotels
											<span className="coming-soon__info">soon!</span>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div
							className="nav__toggle"
							id="nav-toggle"
							onClick={() => {
								toggleNav ? closeNav() : openNav()
							}}
						>
							{toggleNav ? (
								<i className="bx bx-x"></i>
							) : (
								<i className="bx bx-menu"></i>
							)}
						</div>
					</div>
				</nav>
			</header>
			<ScrollToTop>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Explore" element={<Explore />} />
					<Route path="/Destinations" element={<Home />} />
					<Route path="/Hotels" element={<Home />} />

					{/* 404 Page */}
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</ScrollToTop>
		</>
	)
}
