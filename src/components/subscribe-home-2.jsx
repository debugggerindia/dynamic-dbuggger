import React from 'react'
import { asset } from '../assets/assets'
import AnimateTitle from './shared/gsap/split-collab'

const SubscribeHome2 = () => {
    return (
        <section
            className="subscribe-area-home-2"
            style={{
                backgroundImage: `url(${asset.subscribe_bg_home_2})`,
            }}
        >
            <img
                src={asset.subscribe_shep_1_home_2}
                alt="VRE"
                className="subscribe-shep-1-home-2 vre-slide-down-gsap"
            />
            <img
                src={asset.subscribe_shep_2_home_2}
                alt="VRE"
                className="subscribe-shep-2-home-2 vre-slide-up-gsap"
            />
            <img
                src={asset.subscribe_shep_3_home_2}
                alt="VRE"
                className="subscribe-shep-3-home-2 vre-slide-down-gsap"
            />
            <img
                src={asset.subscribe_shep_4_home_2}
                alt="VRE"
                className="subscribe-shep-4-home-2 vre-slide-up-gsap"
            />
            <img
                src={asset.subscribe_shep_5_home_2}
                alt="VRE"
                className="subscribe-shep-5-home-2 vre-slide-down-gsap"
            />
            <img
                src={asset.subscribe_shep_6_home_2}
                alt="VRE"
                className="subscribe-shep-6-home-2 vre-slide-up-gsap"
            />
            <img
                src={asset.subscribe_shep_7_home_2}
                alt="VRE"
                className="subscribe-shep-7-home-2 vre-slide-down-gsap"
            />
            <div className="container">
                <div className="title">
                    <div className="main-title">
                        <AnimateTitle className="split-collab">
                            Subscribe To Stay Connected
                        </AnimateTitle>
                    </div>
                </div>
                <div className="subscribe-wrapper">
                    <form action="#">
                        <input
                            type="text"
                            placeholder="Enter Your Email...."
                            className="vre-slide-down-gsap"
                        />
                        <input
                            type="submit"
                            value="Subscribe"
                            className="btn-primary-style btn-2 hero-info-btn btn-3 btn-4"
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SubscribeHome2
