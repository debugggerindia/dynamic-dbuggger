import { asset } from '../assets/assets'
import RevelImageAnimation from './shared/gsap/reveal-image'
import AnimateTitle from './shared/gsap/split-collab'

const Services_Area_Home_2 = () => {
    return (
        <section className="services-area-home-3">
            <img
                src={asset.bg_blur_shep_3}
                alt="VRE"
                className="service-area-bg-shep-home-3 blur-1"
            />
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-5 col-lg-5">
                        <div className="services-name wow bounceInUp">
                            <h4 className="font-size-1-40">UI/UX Design</h4>
                            <div className="services-info">
                                <p className="font-size-1-16">
                                    Saving World with Good Designs. Because your{' '}
                                    <br /> satisfaction is everything.
                                </p>
                                <a href="services-details.html">
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
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="services-name wow bounceInUp">
                            <h4 className="font-size-1-40">Development</h4>
                            <div className="services-info">
                                <p className="font-size-1-16">
                                    Saving World with Good Designs. Because your{' '}
                                    <br /> satisfaction is everything.
                                </p>
                                <a href="services-details.html">
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
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="services-name wow bounceInUp">
                            <h4 className="font-size-1-40">
                                Digital Marketing
                            </h4>
                            <div className="services-info">
                                <p className="font-size-1-16">
                                    Saving World with Good Designs. Because your{' '}
                                    <br /> satisfaction is everything.
                                </p>
                                <a href="services-details.html">
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
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="services-name wow bounceInUp">
                            <h4 className="font-size-1-40">Product Branding</h4>
                            <div className="services-info border-bottom-0">
                                <p className="font-size-1-16">
                                    Saving World with Good Designs. Because your{' '}
                                    <br /> satisfaction is everything.
                                </p>
                                <a href="services-details.html">
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
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="services-banner">
                            <div className="title">
                                <div className="sub-title sub-title-home-3">
                                    <p>OUR SERVICES</p>
                                </div>
                                <div className="main-title">
                                    <AnimateTitle className="split-collab">
                                        come on, we will <br /> help you buIld
                                        your <br /> dream project.
                                        <span className="absolute">
                                            <img
                                                src={asset.text_shep_2}
                                                alt=""
                                            />
                                        </span>
                                    </AnimateTitle>
                                </div>
                            </div>
                            <div className="services-banner-inner">
                                <RevelImageAnimation
                                    image={asset.services_1_home_3}
                                    className="services-img vre-reveal-one"
                                />
                                <RevelImageAnimation
                                    image={asset.services_2_home_3}
                                    className="services-img vre-reveal-one"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services_Area_Home_2
