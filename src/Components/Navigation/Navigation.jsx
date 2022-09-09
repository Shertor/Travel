import React, { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import ScrollToTop from '../../Utils/ScrollToTop'
// import { HashLink } from 'react-router-hash-link'

import './Navigation.css'

import Home from '../Home/Home'
import Explore from '../Explore/Explore'
import ArticleTrip from '../ArticleTrip/ArticleTrip'
// import NotFound from '../NotFound/NotFound'

export default function Navigation() {
	const [toggleNav, setToggleNav] = useState(false)

	const trips = [
		{
			name: 'Fethiye',
			date: 'August 2021',
			subtitle: 'Sun and Sea',
			img: './imgs/turkey_2022.jpg',
			description:
				'Fethiye is a city and district of Muğla Province in the Aegean Region of Turkey. It is one of the prominent tourist destinations in the Turkish Riviera.',
			data: {},
		},
	]

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
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
									<path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
									<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
								</svg>
							)}
						</div>
					</div>
				</nav>
			</header>
			<ScrollToTop>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Explore" element={<Explore />} />

					{trips.map((article) => {
						console.log(`/Explore/${article.name}`)
						return <><Route
							path={`/Explore/${article.name}`}
							element={<ArticleTrip article={article} />}
						></Route></>
					})}
					{/* 404 Page */}
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</ScrollToTop>
		</>
	)
}
