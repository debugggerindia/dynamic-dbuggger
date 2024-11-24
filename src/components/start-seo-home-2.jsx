import React from 'react'
import { asset } from '../assets/assets'
import AnimateTitle from './shared/gsap/split-collab'
import SkewUpText from './shared/gsap/skew-up'
import SectionSlideUp from './shared/gsap/slide-up'
import SectionSlideDown from './shared/gsap/slide-down'

const StartSeoHomeTwo = () => {
    return (
        <section className="seo-house-home-2">
            <img
                src={asset.bg_blur_shep_2}
                alt="VRE"
                className="seo-house-bg-shep-home-2 blur-1"
            />
            <div className="container">
                <div className="seo-house-wrapper">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="seo-house-banner-img">
                                <img src={asset.seo_house_1_home_2} alt="VRE" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="seo-house-inner">
                                <AnimateTitle className="font-size-1-45 split-collab">
                                    The Best SEO House in <br /> America!{' '}
                                    <span>Since 2010</span>{' '}
                                </AnimateTitle>
                                <SkewUpText className="font-size-1-16 skew-up-2">
                                    Quisque dignissim enim diam, eget pulvinar
                                    ex viverra id. Nulla a lobortis lectus, id
                                    volutpat magna. Morbi consequat porttitor
                                    fermentum. Nulla vestibulum tincidunt
                                    viverra. Vestibulum accumsanQuisque
                                    dignissim enim diam, eget pulvinar ex
                                    viverra id. Nulla a lobortis lectus
                                </SkewUpText>
                                <SectionSlideUp className="seo-house-icon-wrapper">
                                    <div className="seo-house-icon-left vre-slide-up-gsap">
                                        <img
                                            src={asset.seo_house_icon_1_home_2}
                                            alt="VRE"
                                        />
                                        <span className="font-size-1-24">
                                            Social Media <br /> Marketing
                                        </span>
                                    </div>
                                    <div className="seo-house-icon-right vre-slide-up-gsap">
                                        <img
                                            src={asset.seo_house_icon_2_home_2}
                                            alt="VRE"
                                        />
                                        <span className="font-size-1-24">
                                            Highest Success <br /> Rating
                                        </span>
                                    </div>
                                </SectionSlideUp>
                                <div className="seo-house-quets">
                                    <SkewUpText className="font-size-1-20 skew-up-2">
                                        ‘’ Everything we do at Home Instead
                                        CareGiver is driven by our universal
                                        mission: To enhance the lives of aging
                                        adults and their families.’’
                                    </SkewUpText>
                                </div>
                                <div className="seo-house-director">
                                    <SectionSlideUp className="seo-house-director-img vre-slide-up-gsap">
                                        <div className="seo-house-director-main-img">
                                            <img
                                                src={
                                                    asset.seo_house_director_img
                                                }
                                                alt="VRE"
                                            />
                                        </div>
                                        <div className="seo-house-director-name">
                                            <h5 className="font-size-1-18">
                                                Max Benjamin
                                            </h5>
                                            <span className="font-size-1-16">
                                                Director
                                            </span>
                                        </div>
                                    </SectionSlideUp>
                                    <SectionSlideDown className="seo-house-director-sing vre-slide-down-gsap">
                                        <img
                                            src={asset.seo_house_director_sing}
                                            alt="VRE"
                                        />
                                    </SectionSlideDown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartSeoHomeTwo
