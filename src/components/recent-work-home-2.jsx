import React from 'react'
import { asset } from '../assets/assets'
import AnimateTitle from './shared/gsap/split-collab'
import RevelImageAnimation from './shared/gsap/reveal-image'

const RecentWorkHomeTwo = () => {
    return (
        <section className="recent-work-home-2">
            <img
                src={asset.bg_blur_shep_2}
                alt="VRE"
                className="recent-work-bg-shep-home-2 blur-1"
            />
            <div className="container">
                <div className="title">
                    <div className="sub-title sub-title-home-2">
                        <p>LATEST PROJECTS</p>
                    </div>
                    <div className="main-title">
                        <AnimateTitle className="split-collab">
                            Let's Checkout Our Recently <br /> Completed Work{' '}
                            <span className="absolute">
                                <img src={asset.text_shep_3} alt="VRE" />
                            </span>
                        </AnimateTitle>
                    </div>
                </div>
                <div className="recent-work-wrapper">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6">
                            <div className="recent-work-inner">
                                <RevelImageAnimation
                                    image={asset.recent_work_1_home_2}
                                    className="recent-work-img vre-reveal-one"
                                />
                                <div className="recent-work-thumb vre-slide-down-gsap">
                                    <div className="recent-work-text">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Innovative Digital Solutions
                                            </a>
                                        </h5>
                                        <p className="font-size-1-18">
                                            Marketing Digital{' '}
                                        </p>
                                    </div>
                                    <a
                                        href="project-details.html"
                                        className="project-view-btn"
                                    >
                                        <svg
                                            width="21"
                                            height="14"
                                            viewBox="0 0 21 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.5279 7.90809H1.6789C1.13674 7.90809 0.697266 7.46861 0.697266 6.92646C0.697266 6.3843 1.13674 5.94482 1.6789 5.94482H19.5279C20.0701 5.94482 20.5096 6.3843 20.5096 6.92646C20.5096 7.46861 20.0701 7.90809 19.5279 7.90809Z"
                                                fill="#CCDEFF"
                                            />
                                            <path
                                                d="M14.2783 13.1578C13.7362 13.1588 13.2959 12.7201 13.2949 12.1779C13.2944 11.917 13.3979 11.6667 13.5823 11.4822L18.1391 6.92639L13.5823 2.37063C13.2057 1.98073 13.2165 1.35925 13.6064 0.9826C13.9868 0.615175 14.5899 0.615175 14.9704 0.9826L20.2202 6.23238C20.6034 6.6157 20.6034 7.23708 20.2202 7.62041L14.9704 12.8702C14.7868 13.0538 14.538 13.1573 14.2783 13.1578Z"
                                                fill="#CCDEFF"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mt-55">
                            <div className="recent-work-inner">
                                <RevelImageAnimation
                                    image={asset.recent_work_2_home_2}
                                    className="recent-work-img vre-reveal-one"
                                />

                                <div className="recent-work-thumb vre-slide-down-gsap">
                                    <div className="recent-work-text">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Digital Excellence
                                            </a>
                                        </h5>
                                        <p className="font-size-1-18">
                                            Efficiency Management{' '}
                                        </p>
                                    </div>
                                    <a
                                        href="project-details.html"
                                        className="project-view-btn"
                                    >
                                        <svg
                                            width="21"
                                            height="14"
                                            viewBox="0 0 21 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.5279 7.90809H1.6789C1.13674 7.90809 0.697266 7.46861 0.697266 6.92646C0.697266 6.3843 1.13674 5.94482 1.6789 5.94482H19.5279C20.0701 5.94482 20.5096 6.3843 20.5096 6.92646C20.5096 7.46861 20.0701 7.90809 19.5279 7.90809Z"
                                                fill="#CCDEFF"
                                            />
                                            <path
                                                d="M14.2783 13.1578C13.7362 13.1588 13.2959 12.7201 13.2949 12.1779C13.2944 11.917 13.3979 11.6667 13.5823 11.4822L18.1391 6.92639L13.5823 2.37063C13.2057 1.98073 13.2165 1.35925 13.6064 0.9826C13.9868 0.615175 14.5899 0.615175 14.9704 0.9826L20.2202 6.23238C20.6034 6.6157 20.6034 7.23708 20.2202 7.62041L14.9704 12.8702C14.7868 13.0538 14.538 13.1573 14.2783 13.1578Z"
                                                fill="#CCDEFF"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mt-55">
                            <div className="recent-work-inner recent-work-item-3">
                                <RevelImageAnimation
                                    image={asset.recent_work_3_home_2}
                                    className="recent-work-img vre-reveal-one"
                                />

                                <div className="recent-work-thumb vre-slide-down-gsap">
                                    <div className="recent-work-text">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Creative Digital Campaign
                                            </a>
                                        </h5>
                                        <p className="font-size-1-18">
                                            Market Research{' '}
                                        </p>
                                    </div>
                                    <a
                                        href="project-details.html"
                                        className="project-view-btn"
                                    >
                                        <svg
                                            width="21"
                                            height="14"
                                            viewBox="0 0 21 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.5279 7.90809H1.6789C1.13674 7.90809 0.697266 7.46861 0.697266 6.92646C0.697266 6.3843 1.13674 5.94482 1.6789 5.94482H19.5279C20.0701 5.94482 20.5096 6.3843 20.5096 6.92646C20.5096 7.46861 20.0701 7.90809 19.5279 7.90809Z"
                                                fill="#CCDEFF"
                                            />
                                            <path
                                                d="M14.2783 13.1578C13.7362 13.1588 13.2959 12.7201 13.2949 12.1779C13.2944 11.917 13.3979 11.6667 13.5823 11.4822L18.1391 6.92639L13.5823 2.37063C13.2057 1.98073 13.2165 1.35925 13.6064 0.9826C13.9868 0.615175 14.5899 0.615175 14.9704 0.9826L20.2202 6.23238C20.6034 6.6157 20.6034 7.23708 20.2202 7.62041L14.9704 12.8702C14.7868 13.0538 14.538 13.1573 14.2783 13.1578Z"
                                                fill="#CCDEFF"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mt-110">
                            <div className="recent-work-inner">
                                <RevelImageAnimation
                                    image={asset.recent_work_4_home_2}
                                    className="recent-work-img vre-reveal-one"
                                />

                                <div className="recent-work-thumb vre-slide-down-gsap">
                                    <div className="recent-work-text">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Structural Welding
                                            </a>
                                        </h5>
                                        <p className="font-size-1-18">
                                            Building Renovation{' '}
                                        </p>
                                    </div>
                                    <a
                                        href="project-details.html"
                                        className="project-view-btn"
                                    >
                                        <svg
                                            width="21"
                                            height="14"
                                            viewBox="0 0 21 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.5279 7.90809H1.6789C1.13674 7.90809 0.697266 7.46861 0.697266 6.92646C0.697266 6.3843 1.13674 5.94482 1.6789 5.94482H19.5279C20.0701 5.94482 20.5096 6.3843 20.5096 6.92646C20.5096 7.46861 20.0701 7.90809 19.5279 7.90809Z"
                                                fill="#CCDEFF"
                                            />
                                            <path
                                                d="M14.2783 13.1578C13.7362 13.1588 13.2959 12.7201 13.2949 12.1779C13.2944 11.917 13.3979 11.6667 13.5823 11.4822L18.1391 6.92639L13.5823 2.37063C13.2057 1.98073 13.2165 1.35925 13.6064 0.9826C13.9868 0.615175 14.5899 0.615175 14.9704 0.9826L20.2202 6.23238C20.6034 6.6157 20.6034 7.23708 20.2202 7.62041L14.9704 12.8702C14.7868 13.0538 14.538 13.1573 14.2783 13.1578Z"
                                                fill="#CCDEFF"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentWorkHomeTwo
