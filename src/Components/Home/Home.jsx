import React, { useRef, useState } from 'react'

import gsap from "gsap";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/thumbs'

import './Home.css'

import turkey_2018 from './imgs/turkey_2018.jpg'
import turkey_2020 from './imgs/turkey_2020.jpg'

import { EffectFade, Navigation, Thumbs } from 'swiper'

export default function Home() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [isAnimated, setIsAnimated] = useState(false)

	function scrollAnimation() {
		if (!isAnimated) {
			gsap.from('.trips__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
			gsap.from('.trips__title', {opacity: 0, duration: .3, delay: .3, y: -20})
			gsap.from('.trips__description', {opacity: 0, duration: .4, delay: .4, y: -20})
			gsap.from('.trips__button', {opacity: 0, duration: .5, delay: .5, y: -20})
		}

	}

	return (
		<>
			<div className="home">
				<Swiper
					effect={'fade'}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[EffectFade, Navigation, Thumbs]}
				>
					<SwiperSlide className="trips">
						<img src={turkey_2020} alt="" className="trips__bg" />

						<div className="trips__container bd-container">
							<div className="trips__data">
								<h2 className="trips__subtitle">Trips</h2>
								<h1 className="trips__title">Fethiye 2020</h1>
								<p className="trips__description">
									Fethiye is a city and district of Muğla Province in the Aegean
									Region of Turkey. It is one of the prominent tourist
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
					</SwiperSlide>

					<SwiperSlide className="trips">
						<img src={turkey_2018} alt="" className="trips__bg" />

						<div className="trips__container bd-container">
							<div className="trips__data">
								<h2 className="trips__subtitle">Trips</h2>
								<h1 className="trips__title">Istanbul 2018</h1>
								<p className="trips__description">
									Istanbul is the largest city in Turkey, serving as the
									country's economic, cultural and historic hub. The city
									straddles the Bosporus strait, lying in both Europe and Asia,
									and has a population of over 15 million residents, comprising
									19% of the population of Turkey. Istanbul is the most populous
									European city, and the world's 15th-largest city.
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
							<img src={turkey_2020} alt="" className="controls__img" />
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
