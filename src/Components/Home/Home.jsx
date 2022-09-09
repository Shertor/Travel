import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import gsap from 'gsap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/thumbs'

import './Home.css'

import { EffectFade, Navigation, Thumbs } from 'swiper'

import IsMobile from '../../Utils/IsMobile'

import turkey_2018 from './imgs/turkey_2018.jpg'
import turkey_2021 from './imgs/turkey_2021.jpg'
import turkey_2022 from './imgs/turkey_2022.jpg'

import Loader from '../Loader/Loader'

import { loadImage } from '../../Utils/functions'

function animate() {
	gsap.from('.trips__subtitle', {
		opacity: 0,
		duration: 0.2,
		delay: 0.2,
		y: -20,
	})
	gsap.from('.trips__title', {
		opacity: 0,
		duration: 0.3,
		delay: 0.3,
		y: -20,
	})
	gsap.from('.trips__description', {
		opacity: 0,
		duration: 0.4,
		delay: 0.4,
		y: -20,
	})
	gsap.from('.trips__button', {
		opacity: 0,
		duration: 0.5,
		delay: 0.5,
		y: -20,
	})
}

export default function Home() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [isAnimated, setIsAnimated] = useState(false)
	const [homeLoaded, setHomeLoaded] = useState(false)

	const appHeight = () => {
		const doc = document.documentElement
		doc.style.setProperty('--app-height', `${window.innerHeight}px`)
	}

	useEffect(() => {
		Promise.all([
			loadImage(turkey_2018),
			loadImage(turkey_2021),
			loadImage(turkey_2022),
		])
			.then(() => {
				setHomeLoaded(true)
			})
			.catch((err) => console.log('Failed to load images', err))
	}, [])

	useEffect(() => {
		if (homeLoaded) {
			animate()

			if (!IsMobile()) {
				window.addEventListener('resize', appHeight)
			}
			appHeight()
		}
	}, [homeLoaded])

	function scrollAnimation() {
		if (!isAnimated) {
			setIsAnimated(true)
			setTimeout(() => {
				setIsAnimated(false)
			}, 1000)

			animate()
		}
	}

	return (
		<>
			{homeLoaded ? null : <Loader />}
			<div className="home">
				<Swiper
					effect={'fade'}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[EffectFade, Navigation, Thumbs]}
				>
					<SwiperSlide className="trips">
						<img src={turkey_2022} alt="" className="trips__bg" />

						<div className="trips__container bd-container">
							<div className="trips__data">
								<h2 className="trips__subtitle">2022</h2>
								<h1 className="trips__title">Kemer</h1>
								<p className="trips__description">Rest full day</p>
								<NavLink to="/Explore" className="trips__button">
									Explore{' '}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										className="trips__button-icon"
									>
										<path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
									</svg>
								</NavLink>
							</div>

							<div className="trips__trip">
								<div className="trip__wrapper">
									<div className="trip__content"></div>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide className="trips">
						<img src={turkey_2021} alt="" className="trips__bg" />

						<div className="trips__container bd-container">
							<div className="trips__data">
								<h2 className="trips__subtitle">2021</h2>
								<h1 className="trips__title">Fethiye</h1>
								<p className="trips__description">Sun and Sea</p>
								<NavLink to="/Explore" className="trips__button">
									Explore{' '}
									<i className="bx bx-right-arrow-alt trips__button-icon"></i>
								</NavLink>
							</div>

							<div className="trips__trip">
								<div className="trip__wrapper">
									<div className="trip__content"></div>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide className="trips">
						<img src={turkey_2018} alt="" className="trips__bg" />

						<div className="trips__container bd-container">
							<div className="trips__data">
								<h2 className="trips__subtitle">2018</h2>
								<h1 className="trips__title">İstanbul</h1>
								<p className="trips__description">Center of the World</p>
								<NavLink to="/Explore" className="trips__button">
									Explore{' '}
									<i className="bx bx-right-arrow-alt trips__button-icon"></i>
								</NavLink>
							</div>

							<div className="trips__trip">
								<div className="trip__wrapper">
									<div className="trip__content"></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>

				<div className="controls">
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={0}
						slidesPerView={0}
						className="controls__container"
						modules={[Navigation, Thumbs]}
					>
						<SwiperSlide onClick={scrollAnimation}>
							<img src={turkey_2022} alt="" className="controls__img" />
						</SwiperSlide>
						<SwiperSlide onClick={scrollAnimation}>
							<img src={turkey_2021} alt="" className="controls__img" />
						</SwiperSlide>
						<SwiperSlide onClick={scrollAnimation}>
							<img src={turkey_2018} alt="" className="controls__img" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	)
}
