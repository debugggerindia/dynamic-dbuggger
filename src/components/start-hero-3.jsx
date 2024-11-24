import { asset } from '../assets/assets'
import SkewUpText from './shared/gsap/skew-up'
import SectionSlideUp from './shared/gsap/slide-up'
import AnimateTitle from './shared/gsap/split-collab'

const StartHeroThree = () => {
    return (
        <section className="hero-area-2 hero-area-3">
            <img
                src={asset.bg_blur_shep_3}
                alt="VRE"
                className="hero-area-2-shep-1"
            />
            <img
                src={asset.bg_blur_shep_3}
                alt="VRE"
                className="hero-area-2-shep-2"
            />
            <div className="hero-wrapper">
                <div className="hero-inner">
                    <div className="hero-inner-left">
                        <div className="hero-title">
                            <AnimateTitle
                                tag="h2"
                                className="font-size-1-60 split-collab"
                            >
                                Digital Marketing Solution
                                <span className="vre-slide-up-gsap home-3-hero-text-shep absolute">
                                    <img src={asset.text_shep_2} alt="VRE" />
                                </span>
                                For Your Business
                            </AnimateTitle>
                            <SkewUpText className="font-size-1-18 skew-up-2">
                                At Coalition Technologies, we tightly weave our
                                website design and search <br />
                                engineoptimization work to exceed our clients
                                goals. We innovate constantly, <br /> operate
                                transparently, and build lasting
                            </SkewUpText>
                            <SectionSlideUp className="hero-info vre-slide-up-gsap">
                                <a
                                    href="#"
                                    className="btn-primary-style btn-2 hero-info-btn btn-3 hero-info-btn-home-3"
                                >
                                    Read More
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
                                <div className="some-clients-view">
                                    <img src={asset.rating} alt="VRE" />
                                </div>
                            </SectionSlideUp>
                        </div>
                    </div>
                    <div className="hero-2-banner hero-3-banner">
                        <SectionSlideUp>
                            <img
                                src={asset.home_3_hero_slider}
                                alt="VRE"
                                className="vre-slide-down-gsap"
                            />
                        </SectionSlideUp>

                        <SectionSlideUp>
                            <img
                                src={asset.home_3_hero_banner_shep_1}
                                alt="VRE"
                                className="home-3-hero-banner-shep-1 vre-slide-up-gsap"
                            />
                        </SectionSlideUp>
                        <SectionSlideUp>
                            <img
                                src={asset.home_3_hero_banner_shep_2}
                                alt="VRE"
                                className="home-3-hero-banner-shep-2 vre-slide-up-gsap"
                            />
                        </SectionSlideUp>
                        <SectionSlideUp>
                            <img
                                src={asset.home_3_hero_banner_shep_3}
                                alt="VRE"
                                className="home-3-hero-banner-shep-3 vre-slide-up-gsap"
                            />
                        </SectionSlideUp>
                        <SectionSlideUp>
                            <img
                                src={asset.home_3_hero_banner_shep_4}
                                alt="VRE"
                                className="home-3-hero-banner-shep-4 vre-slide-up-gsap"
                            />
                        </SectionSlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StartHeroThree
