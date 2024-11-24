import { asset } from '../assets/assets'
import SectionSlideUp from './shared/gsap/slide-up'
import AnimateTitle from './shared/gsap/split-collab'

const AboutHomeOne = () => {
    return (
        <>
            <section className="about-area-home-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="about-image">
                                <img src={asset.about_home_1} alt="VRE" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="about-area-home-1-inner">
                                <p className="font-size-1-24">about us</p>

                                <AnimateTitle className="font-size-1-40">
                                    Welcome to <p>dbuggger</p> <br />
                                    Crafting Digital Success with Innovation and Expertise
                                </AnimateTitle>

                                <p className="about-us-details font-size-1-18">
                                Your One-Stop Solution for Web Development and Digital Marketing Needs
                                At Dbuggger, we blend creativity with cutting-edge technology to deliver exceptional results. 
                                Whether you’re looking to build a visually stunning website, enhance your online presence,
                                or drive measurable results through digital marketing, our team of experts has got you covered. 
                                With a focus on both development and marketing, we ensure that your business not only thrives but leads in today’s 
                                competitive landscape.

                                </p>
                                <SectionSlideUp className="about-point-text vre-slide-up-gsap">
                                    <div className="about-point-icon">
                                        <span>
                                            <svg
                                                width="45"
                                                height="45"
                                                viewBox="0 0 45 45"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M37.9688 8.4375H7.03125C6.2546 8.4375 5.625 9.0671 5.625 9.84375V30.9375C5.625 31.7142 6.2546 32.3438 7.03125 32.3438H37.9688C38.7454 32.3438 39.375 31.7142 39.375 30.9375V9.84375C39.375 9.0671 38.7454 8.4375 37.9688 8.4375Z"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M28.125 32.3438L33.75 39.375"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16.875 32.3438L11.25 39.375"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16.875 21.0938V25.3125"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M22.5 18.2812V25.3125"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M28.125 15.4688V25.3125"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M22.5 8.4375V4.21875"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="about-point-info">
                                        <h5 className="font-size-1-25">
                                            Guaranteed Results
                                        </h5>
                                        <p className="font-size-1-18">
                                        Unlock your business's full potential with our expert <br /> Shopify solutions
                                        and data-driven digital marketing strategies.
                                        </p>
                                    </div>
                                </SectionSlideUp>
                                <SectionSlideUp className="about-point-text vre-slide-up-gsap">
                                    <div className="about-point-icon">
                                        <span>
                                            <svg
                                                width="45"
                                                height="45"
                                                viewBox="0 0 45 45"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.4688 28.125C20.517 28.125 24.6094 24.0326 24.6094 18.9844C24.6094 13.9361 20.517 9.84375 15.4688 9.84375C10.4205 9.84375 6.32812 13.9361 6.32812 18.9844C6.32812 24.0326 10.4205 28.125 15.4688 28.125Z"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M27.3164 10.1777C28.1244 9.95858 28.9577 9.8463 29.7949 9.84375C32.2192 9.84375 34.5441 10.8068 36.2583 12.521C37.9725 14.2352 38.9355 16.5601 38.9355 18.9844C38.9355 21.4086 37.9725 23.7336 36.2583 25.4478C34.5441 27.162 32.2192 28.125 29.7949 28.125"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M2.8125 34.6986C4.23975 32.6676 6.13483 31.0099 8.33767 29.8656C10.5405 28.7212 12.9864 28.1238 15.4688 28.1238C17.9511 28.1238 20.397 28.7212 22.5998 29.8656C24.8027 31.0099 26.6977 32.6676 28.125 34.6986"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M29.7949 28.125C32.2775 28.1235 34.7239 28.7201 36.9269 29.8645C39.13 31.0089 41.0249 32.6673 42.4512 34.6992"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="about-point-info">
                                        <h5 className="font-size-1-25">
                                            Team of Industry Experts
                                        </h5>
                                        <p className="font-size-1-18">
                                        Experienced Professionals Dedicated to Your Growth<br />
                                        Our Expert Team is Here to Elevate Your Brand
                                        </p>
                                    </div>
                                </SectionSlideUp>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutHomeOne
