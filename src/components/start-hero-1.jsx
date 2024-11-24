import { asset } from '../assets/assets'
import RevelImageAnimation from './shared/gsap/reveal-image'
import SkewUpText from './shared/gsap/skew-up'
import AnimateTitle from './shared/gsap/split-collab'

const StartHeroOne = () => {
    return (
        <>
            <section className="hero-area">
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="hero-area-1-shep-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="hero-area-1-shep-2"
                />
                <div className="hero-wrapper">
                    <div className="container ">
                        <div className="hero-inner">
                            <div className="row align-items-center">
                                <div className="col-xl-8 col-lg-8">
                                    <div className="hero-title">
                                        <AnimateTitle className="font-size-1-60">
                                            A Fully Integrated Commerce
                                            <br />
                                            Agency
                                        </AnimateTitle>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    <div className="hero-sub-title vre-slide-up-gsap">
                                        <SkewUpText className="font-size-1-18">
                                            Maximize your online visibility and
                                            increase organic traffic for your
                                            business.
                                        </SkewUpText>
                                        <div className="hero-1-btn">
                                            <a
                                                href="#"
                                                className="btn-2 font-size-1-18 btn-primary-style"
                                            >
                                                Get Started
                                                <span>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1_21324)">
                                                            <path
                                                                d="M19.5866 11H0.41235C0.184269 11 0 10.7715 0 10.4886C0 10.2058 0.184269 9.97723 0.41235 9.97723H18.5906L16.0881 6.87375C15.927 6.67399 15.927 6.34958 16.0881 6.14982C16.2492 5.95006 16.5108 5.95006 16.6718 6.14982L19.8792 10.1274C19.9977 10.2745 20.0325 10.4934 19.9681 10.6852C19.9036 10.8753 19.7529 11 19.5866 11Z"
                                                                fill="black"
                                                            />
                                                            <path
                                                                d="M16.3435 14.4241C16.2384 14.4241 16.1333 14.3843 16.0538 14.3035C15.8935 14.1433 15.8935 13.883 16.0538 13.7228L19.2487 10.5279C19.4089 10.3677 19.6692 10.3677 19.8294 10.5279C19.9897 10.6882 19.9897 10.9484 19.8294 11.1087L16.6346 14.3035C16.5538 14.3843 16.4487 14.4241 16.3435 14.4241Z"
                                                                fill="black"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_21324">
                                                                <rect
                                                                    width="20"
                                                                    height="20"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="hero-img-banner">
                            <div className="row">
                                <div className="col-xl-12">
                                    <RevelImageAnimation
                                        image={asset.home_1_hero_slider}
                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default StartHeroOne
