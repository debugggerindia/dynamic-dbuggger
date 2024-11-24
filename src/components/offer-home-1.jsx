import { asset } from '../assets/assets'
import parse from 'html-react-parser'
import AnimateTitle from './shared/gsap/split-collab'
import SectionSlideUp from './shared/gsap/slide-up'

const OfferHomeOne = () => {
    const cards = [
        {
            img: asset.offer_1,
            title: 'UI/UX Design, Motion, <br /> Illustration, Branding, <br /> Photography',
            subtitle: 'design & UI/UX <br> Experience',
        },
        {
            img: asset.offer_2,
            title: 'WordPress, Shopify, <br> Webflow, React, HTML, <br> Mobile Solutions',
            subtitle: 'development & <br> coding',
        },
        {
            img: asset.offer_3,
            title: 'Social Solutions, <br> Marketing & Targeting, <br> SEO & SMM',
            subtitle: 'marketing & SEO <br> Analytic',
        },
    ]

    return (
        <>
            <section className="offer-area-home-1">
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="offer-area-1-shep-1 blur-1"
                />
                <div className="container">
                    <div className="title">
                        <div className="sub-title">
                            <p>what we offer</p>
                        </div>
                        <div className="main-title">
                            <h3 className="split-collab">
                                <AnimateTitle>
                                    We Offer A Wide Range Of <br /> Web & App Development
                                    Services
                                </AnimateTitle>
                                <span>
                                    <img src={asset.text_shep_1} alt="shape" />
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div className="offer-wrapper">
                        <div className="row justify-content-center">
                            {cards?.map((card) => (
                                <SectionSlideUp
                                    key={card.title}
                                    className="col-xl-4 col-lg-4 col-md-6 vre-slide-up-gsap"
                                >
                                    <div className="offer-inner">
                                        <p className="font-size-1-24">
                                            {parse(card.title)}
                                        </p>
                                        <img src={card.img} alt="VRE" />
                                        <div className="offer-work">
                                            <span className="font-size-1-20">
                                                {parse(card.subtitle)}
                                            </span>
                                            <a href="services-details.html">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </SectionSlideUp>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OfferHomeOne
