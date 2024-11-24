import { Link } from 'react-router-dom'
import { asset } from '../assets/assets'
import parse from 'html-react-parser'
import AnimateTitle from './shared/gsap/split-collab'

const DigitalMarketingHomeOne = () => {
    const cards = [
        {
            img: asset.digital_marketing_1,
            title: 'Search Engine Optimization',
            text: 'Share processes and data secure lona need <br> to know basis Our team assured your web <br> site is always safe and',
            url: 'services-details',
        },
        {
            img: asset.digital_marketing_2,
            title: 'Website Development',
            text: 'Share processes and data secure lona need <br> to know basis Our team assured your web <br> site is always safe and',
            url: 'services-details',
        },
        {
            img: asset.digital_marketing_3,
            title: 'Pay-Per-Click Advertising',
            text: 'Share processes and data secure lona need <br> to know basis Our team assured your web <br> site is always safe and',
            url: 'services-details',
        },
        {
            img: asset.digital_marketing_4,
            title: 'Social Media Marketing',
            text: 'Share processes and data secure lona need <br> to know basis Our team assured your web <br> site is always safe and',
            url: 'services-details',
        },
        {
            img: asset.digital_marketing_5,
            title: 'Email Marketing',
            text: 'Share processes and data secure lona need <br> to know basis Our team assured your web <br> site is always safe and',
            url: 'services-details',
        },
        {
            img: asset.digital_marketing_6,
            title: 'Content Marketing',
            text: 'Share processes and data secure lona need <br> to know basis Our team assured your web <br> site is always safe and',
            url: 'services-details',
        },
    ]

    return (
        <section className="digital-marketing-home-1">
            <div className="container">
                <div className="title">
                    <div className="sub-title">
                        <p>Trusted Digital Agency</p>
                    </div>
                    <div className="main-title">
                        <h3 className="split-collab">
                            <AnimateTitle>
                                We offer a wide range of <br />
                                digital marketing
                            </AnimateTitle>
                            <span>
                                <img src={asset.text_shep_1} alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="digital-marketing-wrapper">
                    <div className="row">
                        {cards?.map((card) => (
                            <div
                                key={card.title}
                                className="col-xl-4 col-lg-4 col-md-6 px-0"
                            >
                                <div className="digital-marketing-inner">
                                    <img src={card.img} alt="VRE" />
                                    <h5 className="font-size-1-24">
                                        {card.title}
                                    </h5>
                                    <p className="font-size-1-16">
                                        {parse(card.text)}
                                    </p>
                                    {/* <div className="digital-marketing-btn">
                                        <Link to={`/${card.url}`}>
                                            <span className="font-size-1-18">
                                                Read More
                                            </span>
                                            <span>
                                                <svg
                                                    width="131"
                                                    height="16"
                                                    viewBox="0 0 131 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M130.707 8.70711C131.098 8.31658 131.098 7.68342 130.707 7.29289L124.343 0.928932C123.953 0.538408 123.319 0.538408 122.929 0.928932C122.538 1.31946 122.538 1.95262 122.929 2.34315L128.586 8L122.929 13.6569C122.538 14.0474 122.538 14.6805 122.929 15.0711C123.319 15.4616 123.953 15.4616 124.343 15.0711L130.707 8.70711ZM0 9H130V7H0V9Z"
                                                        fill="#CCFF00"
                                                    />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DigitalMarketingHomeOne
