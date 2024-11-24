import { asset } from '../../assets/assets'
import SkewUpText from '../shared/gsap/skew-up'
import SectionSlideDown from '../shared/gsap/slide-down'
import SectionSlideUp from '../shared/gsap/slide-up'
import AnimateTitle from '../shared/gsap/split-collab'

const Digital_Product = () => {
    return (
        <section
            className="digital-product-area-home-3 about-page"
            style={{ backgroundImage: `url(${asset.digital_product_bg})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="digital-product-title">
                            <AnimateTitle
                                tag="h2"
                                className="font-size-1-50 split-collab"
                            >
                                We use Digital Product to <br /> Show our
                                Appreciation
                            </AnimateTitle>
                            <SkewUpText className="font-size-1-16">
                                Dapibus interdum senectus malesuada est nec
                                morbi cursus.
                            </SkewUpText>
                            <a
                                href="services-details.html"
                                className="btn-primary-style btn-2 hero-info-btn btn-3 btn-4 btn-4-home-3"
                            >
                                Our Services
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 offset-xl-1 offset-lg-1">
                        <div className="digital-product-counter">
                            <div className="digital-product-counter-1">
                                <SectionSlideDown className="item-1 vre-slide-down-gsap">
                                    <span className="font-size-1-45">380K</span>
                                    <p className="font-size-1-20">
                                        Project Completed
                                    </p>
                                </SectionSlideDown>
                                <SectionSlideUp className="item-2 vre-slide-up-gsap">
                                    <span className="font-size-1-45">680M</span>
                                    <p className="font-size-1-20">
                                        Satisfied Clients
                                    </p>
                                </SectionSlideUp>
                            </div>
                            <div className="digital-product-counter-2">
                                <SectionSlideUp className="item-3 vre-slide-up-gsap">
                                    <span className="font-size-1-45">720+</span>
                                    <p className="font-size-1-20">
                                        Happy Customers
                                    </p>
                                </SectionSlideUp>
                                <SectionSlideDown className="item-4 vre-slide-down-gsap">
                                    <span className="font-size-1-45">1700</span>
                                    <p className="font-size-1-20">
                                        Competitors keywords
                                    </p>
                                </SectionSlideDown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Digital_Product
