import { asset } from '../assets/assets'
import RevelImageAnimation from './shared/gsap/reveal-image'
import SectionSlideUp from './shared/gsap/slide-up'
import AnimateTitle from './shared/gsap/split-collab'

const Best_Services_Area_Home_3 = () => {
    return (
        <section className="best-services-area-home-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5">
                        <RevelImageAnimation
                            image={asset.best_services_banner}
                            className="best-services-banner vre-reveal-one"
                        />
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1 offset-lg-1">
                        <div className="best-services-wrapper">
                            <div className="title">
                                <div className="sub-title sub-title-home-3">
                                    <p>Why Choose Us</p>
                                </div>
                                <div className="main-title">
                                    <AnimateTitle className="split-collab">
                                        Providing The <span>Best </span>
                                        <br />
                                        Services
                                    </AnimateTitle>
                                </div>
                            </div>
                            <div className="best-services-inner">
                                <SectionSlideUp className="best-services-item">
                                    <div className="best-services-icon">
                                        <span>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22 5L8.25 18L2 12.0909"
                                                    stroke="#CCDEFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="best-services-text">
                                        <h5 className="font-size-1-24">
                                            Real-Time Data Analysis
                                        </h5>
                                        <p className="font-size-1-15">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Sollicitudin
                                            <br />
                                            arcu purus lobortis leo amet leo
                                            faucibus. Proin.
                                        </p>
                                    </div>
                                </SectionSlideUp>
                                <SectionSlideUp className="best-services-item">
                                    <div className="best-services-icon">
                                        <span>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22 5L8.25 18L2 12.0909"
                                                    stroke="#FF4A3B"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="best-services-text">
                                        <h5 className="font-size-1-24">
                                            Modernized Prospecting
                                        </h5>
                                        <p className="font-size-1-15">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Sollicitudin
                                            <br />
                                            arcu purus lobortis leo amet leo
                                            faucibus. Proin.
                                        </p>
                                    </div>
                                </SectionSlideUp>
                                <SectionSlideUp className="best-services-item">
                                    <div className="best-services-icon">
                                        <span>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22 5L8.25 18L2 12.0909"
                                                    stroke="#FF4A3B"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="best-services-text">
                                        <h5 className="font-size-1-24">
                                            Online Marketing
                                        </h5>
                                        <p className="font-size-1-15">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Sollicitudin
                                            <br />
                                            arcu purus lobortis leo amet leo
                                            faucibus. Proin.
                                        </p>
                                    </div>
                                </SectionSlideUp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Best_Services_Area_Home_3
