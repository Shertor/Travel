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
		const loadImage = (url) => {
			return new Promise((resolve, reject) => {
				const loadImg = new Image()
				loadImg.src = url
				loadImg.onload = () => resolve(url)

				loadImg.onerror = (err) => reject(err)
			})
		}
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
			{homeLoaded?null:<Loader/>}
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
								<h2 className="trips__subtitle">Trips</h2>
								<h1 className="trips__title">Kemer 2022</h1>
								<p className="trips__description">
									Kemer is a seaside resort and district of Antalya Province on
									the Mediterranean coast of Turkey, 43 km (27 mi) west of the
									city of Antalya, on the Turkish Riviera.
								</p>
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
						<img src={turkey_2021} alt="" className="trips__bg" />

						<div className="trips__container bd-container">
							<div className="trips__data">
								<h2 className="trips__subtitle">Trips</h2>
								<h1 className="trips__title">Fethiye 2021</h1>
								<p className="trips__description">
									Fethiye is a city and district of Muğla Province in the Aegean
									Region of Turkey. It is one of the prominent tourist
									destinations in the Turkish Riviera.
								</p>
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
								<h2 className="trips__subtitle">Trips</h2>
								<h1 className="trips__title">İstanbul 2018</h1>
								<p className="trips__description">
									İstanbul is the largest city in Turkey, serving as the
									country's economic, cultural and historic hub. The city
									straddles the Bosporus strait, lying in both Europe and Asia,
									and has a population of over 15 million residents, comprising
									19% of the population of Turkey. Istanbul is the most populous
									European city, and the world's 15th-largest city.
								</p>
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
