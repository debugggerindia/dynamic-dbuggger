import React from 'react'
import { asset } from '../assets/assets'
import AnimateTitle from './shared/gsap/split-collab'
import RevelImageAnimation from './shared/gsap/reveal-image'

const BlogHome2 = () => {
    return (
        <section className="blog-area-home-2">
            <div className="container">
                <div className="title-tab-flexing">
                    <div className="title">
                        <div className="main-title">
                            <AnimateTitle className="split-collab">
                                Read More Articles <br />
                                From Our Blog{' '}
                                <span className="absolute">
                                    <img src={asset.text_shep_3} alt="VRE" />
                                </span>
                            </AnimateTitle>
                        </div>
                    </div>
                    <nav>
                        <div
                            className="nav nav-tabs"
                            id="nav-tab1"
                            role="tablist"
                        >
                            <button
                                className="nav-link active font-size-1-24"
                                id="nav-home-tab1"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-home-2"
                                type="button"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                            >
                                Content Writing
                            </button>
                            <button
                                className="nav-link font-size-1-24"
                                id="nav-profile-tab2"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile-2"
                                type="button"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                            >
                                Content Marketing
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="blog-wrapper">
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active tab-animation"
                            id="nav-home-2"
                            role="tabpanel"
                        >
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="blog-inner-left">
                                        <RevelImageAnimation
                                            image={asset.blog_1_home_2}
                                            className="blog-left-thumb vre-reveal-one"
                                        />
                                        <div className="blog-info-left">
                                            <span className="font-size-1-16">
                                                AUGUST 17, 2024
                                            </span>
                                            <h5 className="font-size-1-24">
                                                <a href="blog-standart.html">
                                                    10 Reasons to invest in SEO
                                                    copywriting <br /> services{' '}
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="blog-right-inner">
                                        <RevelImageAnimation
                                            image={asset.blog_2_home_2}
                                            className="blog-left-thumb vre-reveal-one"
                                        />
                                        <div className="blog-right-info">
                                            <span className="font-size-1-16">
                                                AUGUST 17, 2024
                                            </span>
                                            <h5 className="font-size-1-24">
                                                <a href="blog-details.html">
                                                    How to get hired at a
                                                    <br /> top Digital Marketing{' '}
                                                </a>
                                            </h5>
                                            <p className="font-size-1-16">
                                                Agency life. We’ve all seen the
                                                photos <br /> posted on social
                                                media – the cool...
                                            </p>
                                        </div>
                                        <div className="blog-right-btn">
                                            <a href="blog-details.html">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="blog-right-inner">
                                        <RevelImageAnimation
                                            image={asset.blog_3_home_2}
                                            className="blog-right-thumb vre-reveal-one"
                                        />
                                        <div className="blog-right-info">
                                            <span className="font-size-1-16">
                                                AUGUST 17, 2024
                                            </span>
                                            <h5 className="font-size-1-24">
                                                {' '}
                                                <a href="blog-details.html">
                                                    Copywriting guidelines
                                                    <br /> during the
                                                    coronavirus
                                                </a>
                                            </h5>
                                            <p className="font-size-1-16">
                                                Since the coronavirus hit
                                                earlier this <br /> year, it’s
                                                hard to go anywhere...
                                            </p>
                                        </div>
                                        <div className="blog-right-btn">
                                            <a href="#">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-btn">
                                <a
                                    href="blog-standart.html"
                                    className="font-size-1-20 btn-primary-style btn-2 hero-info-btn btn-3 btn-4"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade tab-animation"
                            id="nav-profile-2"
                            role="tabpanel"
                        >
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="blog-inner-left">
                                        <div className="blog-left-thumb vre-reveal-one">
                                            <img
                                                src={asset.blog_1_home_2}
                                                alt="VRE"
                                                className="vre-reveal-image-one"
                                            />
                                        </div>
                                        <div className="blog-info-left">
                                            <span className="font-size-1-16">
                                                AUGUST 17, 2024
                                            </span>
                                            <h5 className="font-size-1-24">
                                                <a href="blog-standart.html">
                                                    10 Reasons to invest in SEO
                                                    copywriting <br /> services{' '}
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="blog-right-inner">
                                        <div className="blog-right-thumb vre-reveal-one">
                                            <img
                                                src={asset.blog_2_home_2}
                                                alt="VRE"
                                                className="vre-reveal-image-one"
                                            />
                                        </div>
                                        <div className="blog-right-info">
                                            <span className="font-size-1-16">
                                                AUGUST 17, 2024
                                            </span>
                                            <h5 className="font-size-1-24">
                                                <a href="blog-details.html">
                                                    How to get hired at a
                                                    <br /> top Digital Marketing{' '}
                                                </a>
                                            </h5>
                                            <p className="font-size-1-16">
                                                Agency life. We’ve all seen the
                                                photos <br /> posted on social
                                                media – the cool...
                                            </p>
                                        </div>
                                        <div className="blog-right-btn">
                                            <a href="blog-details.html">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="blog-right-inner">
                                        <div className="blog-right-thumb vre-reveal-one">
                                            <img
                                                src={asset.blog_3_home_2}
                                                alt="VRE"
                                                className="vre-reveal-image-one"
                                            />
                                        </div>
                                        <div className="blog-right-info">
                                            <span className="font-size-1-16">
                                                AUGUST 17, 2024
                                            </span>
                                            <h5 className="font-size-1-24">
                                                {' '}
                                                <a href="blog-details.html">
                                                    Copywriting guidelines
                                                    <br /> during the
                                                    coronavirus
                                                </a>
                                            </h5>
                                            <p className="font-size-1-16">
                                                Since the coronavirus hit
                                                earlier this <br /> year, it’s
                                                hard to go anywhere...
                                            </p>
                                        </div>
                                        <div className="blog-right-btn">
                                            <a href="blog-details.html">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-btn">
                                <a
                                    href="blog-standart.html"
                                    className="font-size-1-20 btn-primary-style btn-2 hero-info-btn btn-3 btn-4"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogHome2
