import { asset } from '../../assets/assets'
import Accordion from '../shared/accordion/accordion-item'
import AnimateTitle from '../shared/gsap/split-collab'

const items = [
    {
        question: 'Why should I choose Springboard SEO?',
        ans: (
            <p className="font-size-1-16">
                There are many variations of passages of available but the Ut
                elit tellus <br /> luctus nec ullamcorper at mattis
            </p>
        ),
    },
    {
        question: 'How long do search engine results last?',
        ans: (
            <p className="font-size-1-16">
                There are many variations of passages of available but the Ut
                elit tellus <br /> luctus nec ullamcorper at mattis
            </p>
        ),
    },
    {
        question: 'Are first place rankings for competitive keywords possible?',
        ans: (
            <p className="font-size-1-16">
                There are many variations of passages of available but the Ut
                elit tellus <br /> luctus nec ullamcorper at mattis
            </p>
        ),
    },
    {
        question: 'How much does search engine optimization cost?',
        ans: (
            <p className="font-size-1-16">
                There are many variations of passages of available but the Ut
                elit tellus <br /> luctus nec ullamcorper at mattis
            </p>
        ),
    },
    {
        question: 'How can I take your service?',
        ans: (
            <p className="font-size-1-16">
                There are many variations of passages of available but the Ut
                elit tellus <br /> luctus nec ullamcorper at mattis
            </p>
        ),
    },
]

const Faq_Area_One = () => {
    return (
        <section className="faq-area-1">
            <img
                src={asset.bg_blur_shep_1}
                alt="VRE"
                className="faq-area-1-area-shep-1 blur-1"
            />
            <div className="container">
                <div className="faq-area-wrapper-1">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-4 col-lg-5">
                            <div className="faq-area-1-left">
                                <div className="title">
                                    <div className="sub-title">
                                        <p>FAQ</p>
                                    </div>
                                    <div className="main-title">
                                        <AnimateTitle className="split-collab">
                                            Frequently Asked <br />
                                            Questions
                                            <span className="absolute">
                                                <img
                                                    src={asset.text_shep_1}
                                                    alt=""
                                                />
                                            </span>
                                        </AnimateTitle>
                                    </div>
                                </div>
                                <p className="font-size-1-16">
                                    Sed ut perspiciatis unde omniste natus
                                    voluptatem accusantiume rem aperia eaque
                                    quae abillo inventore veritatis quasi
                                    architecto beatae vitae
                                </p>
                                <div className="faq-area-1-btn">
                                    <a
                                        href="#"
                                        className="btn-primary-style btn-2 hero-info-btn btn-3"
                                    >
                                        Read More
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 offset-xl-1 col-lg-7">
                            <div className="faq-inner">
                                <div className="accordion-container">
                                    <Accordion items={items} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Faq_Area_One
