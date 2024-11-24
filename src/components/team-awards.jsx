import { Link } from 'react-router-dom'
import { asset } from '../assets/assets'
import AnimateTitle from './shared/gsap/split-collab'

const TeamAwrads = () => {
    const cards = [
        {
            img: asset.active_brand_logo_1,
            title: '2022',
            text: 'Site of the day',
        },
        {
            img: asset.active_brand_logo_2,
            title: '2023',
            text: 'Best Twins design',
        },
        {
            img: asset.active_brand_logo_3,
            title: '2024',
            text: 'Design Awards',
        },
        {
            img: asset.active_brand_logo_4,
            title: '2025',
            text: 'FWA of the month',
        },
    ]

    return (
        <section className="active-brand-home-1">
            <img
                src={asset.bg_blur_shep_1}
                alt="VRE"
                className="active-brand-area-1-shep-1 blur-1"
            />
            <div className="container">
                <div className="title">
                    <div className="sub-title">
                        <p>Awards of our team</p>
                    </div>
                    <div className="main-title">
                        <h3 className="split-collab">
                            <AnimateTitle>
                                We build and activate brands <br />
                                through cultural insight
                            </AnimateTitle>
                            <span>
                                <img src={asset.text_shep_1} alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="brand-active-wrapper">
                    <div className="row">
                        {cards?.map((card, i) => (
                            <div
                                key={card.text}
                                className="col-xl-3 col-lg-3 col-md-6"
                            >
                                <div
                                    className={`brand-active-inner brand-active-item-${i + 1}`}
                                >
                                    <span className="font-size-1-22">
                                        {card.title}
                                    </span>
                                    <Link to="#">
                                        <img src={card.img} alt="VRE" />
                                    </Link>
                                    <span className="font-size-1-22">
                                        {card.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamAwrads
