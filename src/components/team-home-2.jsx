import React from 'react'
import { asset } from '../assets/assets'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import AnimateTitle from './shared/gsap/split-collab'

const TeamHome2 = () => {
    return (
        <section className="team-area-home-2">
            <img
                src={asset.bg_blur_shep_2}
                alt="VRE"
                className="team-area-bg-shep-1-home-2 blur-1"
            />
            <img
                src={asset.bg_blur_shep_2}
                alt="VRE"
                className="team-area-bg-shep-2-home-2 blur-1"
            />
            <div className="container">
                <div className="team-title-arrow-flexing">
                    <div className="title">
                        <div className="sub-title sub-title-home-2">
                            <p>OUR TEAM MEMBER</p>
                        </div>
                        <div className="main-title">
                            <AnimateTitle className="split-collab">
                                Meet Our Best Seo Teams{' '}
                                <span className="absolute">
                                    <img src={asset.text_shep_3} alt="" />
                                </span>
                            </AnimateTitle>
                        </div>
                    </div>
                    <SwiperNav />
                </div>

                <div className="team-wrapper">
                    <Swiper
                        // install Swiper modules
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        breakpoints={{
                            991: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            767: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        className="team-area-slider-home-2"
                    >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img src={asset.team_1_home_2} alt="VRE" />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                Michale Hardson
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Network Security{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            {' '}
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img src={asset.team_2_home_2} alt="VRE" />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                Nadim Kamal
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            IT Support Specialist{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {' '}
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img src={asset.team_3_home_2} alt="VRE" />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                James Verdy
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Cloud Solutions Expert{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {' '}
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img src={asset.team_2_home_2} alt="VRE" />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                Michale Hardson
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Network Security{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {' '}
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img src={asset.team_3_home_2} alt="VRE" />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                Nadim Kamal
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            IT Support Specialist{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {' '}
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img src={asset.team_3_home_2} alt="VRE" />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                James Verdy
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Cloud Solutions Expert{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* <div className="swiper team-area-slider-home-2">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img src={asset.team_1_home_2} alt="VRE" />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                Michale Hardson
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Network Security{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img
                                        src="assets/images/home-2/team-2-home-2.png"
                                        alt="VRE"
                                    />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                Nadim Kamal
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            IT Support Specialist{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img
                                        src="assets/images/home-2/team-3-home-2.png"
                                        alt="VRE"
                                    />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                James Verdy
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Cloud Solutions Expert{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img src={asset.team_2_home_2} alt="VRE" />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                Michale Hardson
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Network Security{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img src={asset.team_3_home_2} alt="VRE" />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                Nadim Kamal
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            IT Support Specialist{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="team-inner">
                                    <img
                                        src="assets/images/home-2/team-3-home-2.png"
                                        alt="VRE"
                                    />
                                    <div className="team-social-media">
                                        <a
                                            href="#"
                                            className="team-social-media-plus"
                                        >
                                            <span>+</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="team-name-position">
                                        <h6 className="font-size-1-22">
                                            <a href="team-details.html">
                                                James Verdy
                                            </a>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Cloud Solutions Expert{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default TeamHome2

const SwiperNav = () => {
    const swiper = useSwiper()

    return (
        <div className="slider-btn-1 slider-team-home-2-btn">
            <div
                onClick={() => swiper.slideNext()}
                className="swiper-button-next"
            >
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.12109 0.384765L6.71109 1.79477L12.2911 7.38477L0.121093 7.38476L0.121093 9.38476L12.2911 9.38477L6.70109 14.9648L8.12109 16.3848L16.1211 8.38477L8.12109 0.384765Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div
                onClick={() => swiper.slidePrev()}
                className="swiper-button-prev"
            >
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.12109 16.3848L9.53109 14.9748L3.95109 9.38477L16.1211 9.38476L16.1211 7.38476L3.95109 7.38477L9.54109 1.80477L8.12109 0.384765L0.121093 8.38477L8.12109 16.3848Z"
                        fill="#CCDEFF"
                    />
                </svg>
            </div>
        </div>
    )
}
