import { asset } from '../assets/assets'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'
import RevelImageAnimation from '../components/shared/gsap/reveal-image'
import AnimateTitle from '../components/shared/gsap/split-collab'
import Navbar from '../components/shared/navbar'

const Project_Details = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb pageName="Project Details" />
            <section className="project-details-area">
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="project-details-area-shep-1 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="project-details-area-shep-2 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="project-details-area-shep-3 blur-1"
                />
                <div className="container">
                    <div className="project-details-wrapper">
                        <div className="project-details-banner">
                            <RevelImageAnimation
                                image={asset.project_details_1}
                                className="project-details-banner-inner-1 vre-reveal-one"
                            />
                            <RevelImageAnimation
                                image={asset.project_details_2}
                                className="project-details-banner-inner-2 vre-reveal-one"
                            />
                        </div>
                        <AnimateTitle className="font-size-1-45 split-collab">
                            Interesting facts in Development
                        </AnimateTitle>
                        <div className="project-details-info">
                            <div className="project-details-info-item">
                                <span className="project-details-info-name font-size-1-24">
                                    Client :
                                </span>
                                <span className="project-details-main-work font-size-1-16">
                                    Nguyen, Shane
                                </span>
                            </div>
                            <div className="project-details-info-item">
                                <span className="project-details-info-name font-size-1-24">
                                    Category :
                                </span>
                                <span className="project-details-main-work font-size-1-16">
                                    Horse
                                </span>
                            </div>
                            <div className="project-details-info-item">
                                <span className="project-details-info-name font-size-1-24">
                                    Date :
                                </span>
                                <span className="project-details-main-work font-size-1-16">
                                    05 October, 2023
                                </span>
                            </div>
                            <div className="project-details-info-item">
                                <span className="project-details-info-name font-size-1-24">
                                    Website :
                                </span>
                                <span className="project-details-main-work font-size-1-16">
                                    www.domain visi.com
                                </span>
                            </div>
                        </div>
                        <p className="font-size-1-16">
                            As the infamous truck driver shortage continues like
                            an endless long haul, companies with products to
                            move are nervously eyeing the future. The expansion
                            of e-commerce and the increasing consumer demands
                            only make the driver shortage much more imperative
                            for shippers to solve. Unfortunately, there’s
                            another shortage in the supply chain that isn’t
                            snagging as many headlines but will affect your
                            supply chain just as much. Companies that rely on
                            air freight may want to buckle up: there’s
                            structural turbulence at 20,000 feet in the form of
                            a pilot shortage.As the infamous truck driver
                            shortage continues like an endless long haul,
                            companies with products to move are nervously eyeing
                            the future. The expansion of e-commerce and the
                            increasing consumer demands only make the driver
                            shortage much more imperative for shippers to solve.
                            Unfortunately, there’s anoth
                        </p>
                        <div className="project-details-result">
                            <AnimateTitle>
                                <h4 className="font-size-1-35 split-collab">
                                    The Results of Our Project
                                </h4>
                            </AnimateTitle>
                            <p className="font-size-1-16">
                                Lorem ipsum is simply free text used by
                                copytyping refreshing. Neque porro est qui
                                dolorem ipsum quia quaed inventore veritatis et
                                quasi architecto beatae vitae dicta sunt
                                explicabo. Aelltes port lacus quis enim var sed
                                efficitur turpis gilla sed sit amet finibus
                                eros. Lorem Ipsum sed efficitur turpis gilla sed
                                sed efficitur turpis gilla sed{' '}
                            </p>
                            <div className="project-details-inner">
                                <RevelImageAnimation
                                    image={asset.project_details_3}
                                    className="project-details-inner-img vre-reveal-one"
                                />
                                <div className="project-details-inner-result">
                                    <h5 className="font-size-1-24">
                                        Digital Marketing Around the World
                                    </h5>
                                    <ul>
                                        <li>
                                            <svg
                                                width="25"
                                                height="19"
                                                viewBox="0 0 25 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.74234 18.2619C8.42826 18.2619 8.11418 18.1417 7.87491 17.9024L0.359911 10.3872C-0.11997 9.90751 -0.11997 9.13197 0.359911 8.65231C0.839568 8.17266 1.61488 8.17266 2.09476 8.65231L8.74234 15.2999L22.9054 1.13709C23.385 0.657429 24.1603 0.657429 24.6402 1.13709C25.1199 1.61697 25.1199 2.39228 24.6402 2.87216L9.60999 17.9024C9.37073 18.1417 9.05642 18.2619 8.74234 18.2619Z"
                                                    fill="#CCFF00"
                                                />
                                            </svg>
                                            <span className="font-size-1-18">
                                                Those who do not know how to
                                                pursue
                                            </span>
                                        </li>
                                        <li>
                                            <svg
                                                width="25"
                                                height="19"
                                                viewBox="0 0 25 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.74234 18.2619C8.42826 18.2619 8.11418 18.1417 7.87491 17.9024L0.359911 10.3872C-0.11997 9.90751 -0.11997 9.13197 0.359911 8.65231C0.839568 8.17266 1.61488 8.17266 2.09476 8.65231L8.74234 15.2999L22.9054 1.13709C23.385 0.657429 24.1603 0.657429 24.6402 1.13709C25.1199 1.61697 25.1199 2.39228 24.6402 2.87216L9.60999 17.9024C9.37073 18.1417 9.05642 18.2619 8.74234 18.2619Z"
                                                    fill="#CCFF00"
                                                />
                                            </svg>
                                            <span className="font-size-1-18">
                                                Pleasure rationally encounter
                                            </span>
                                        </li>
                                        <li>
                                            <svg
                                                width="25"
                                                height="19"
                                                viewBox="0 0 25 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.74234 18.2619C8.42826 18.2619 8.11418 18.1417 7.87491 17.9024L0.359911 10.3872C-0.11997 9.90751 -0.11997 9.13197 0.359911 8.65231C0.839568 8.17266 1.61488 8.17266 2.09476 8.65231L8.74234 15.2999L22.9054 1.13709C23.385 0.657429 24.1603 0.657429 24.6402 1.13709C25.1199 1.61697 25.1199 2.39228 24.6402 2.87216L9.60999 17.9024C9.37073 18.1417 9.05642 18.2619 8.74234 18.2619Z"
                                                    fill="#CCFF00"
                                                />
                                            </svg>
                                            <span className="font-size-1-18">
                                                Consequences that are extremely
                                                painful.
                                            </span>
                                        </li>
                                        <li>
                                            <svg
                                                width="25"
                                                height="19"
                                                viewBox="0 0 25 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.74234 18.2619C8.42826 18.2619 8.11418 18.1417 7.87491 17.9024L0.359911 10.3872C-0.11997 9.90751 -0.11997 9.13197 0.359911 8.65231C0.839568 8.17266 1.61488 8.17266 2.09476 8.65231L8.74234 15.2999L22.9054 1.13709C23.385 0.657429 24.1603 0.657429 24.6402 1.13709C25.1199 1.61697 25.1199 2.39228 24.6402 2.87216L9.60999 17.9024C9.37073 18.1417 9.05642 18.2619 8.74234 18.2619Z"
                                                    fill="#CCFF00"
                                                />
                                            </svg>
                                            <span className="font-size-1-18">
                                                Nor again is there anyone who
                                                loves or pursues
                                            </span>
                                        </li>
                                        <li>
                                            <svg
                                                width="25"
                                                height="19"
                                                viewBox="0 0 25 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.74234 18.2619C8.42826 18.2619 8.11418 18.1417 7.87491 17.9024L0.359911 10.3872C-0.11997 9.90751 -0.11997 9.13197 0.359911 8.65231C0.839568 8.17266 1.61488 8.17266 2.09476 8.65231L8.74234 15.2999L22.9054 1.13709C23.385 0.657429 24.1603 0.657429 24.6402 1.13709C25.1199 1.61697 25.1199 2.39228 24.6402 2.87216L9.60999 17.9024C9.37073 18.1417 9.05642 18.2619 8.74234 18.2619Z"
                                                    fill="#CCFF00"
                                                />
                                            </svg>
                                            <span className="font-size-1-18">
                                                Service Guarantee
                                            </span>
                                        </li>
                                        <li>
                                            <svg
                                                width="25"
                                                height="19"
                                                viewBox="0 0 25 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.74234 18.2619C8.42826 18.2619 8.11418 18.1417 7.87491 17.9024L0.359911 10.3872C-0.11997 9.90751 -0.11997 9.13197 0.359911 8.65231C0.839568 8.17266 1.61488 8.17266 2.09476 8.65231L8.74234 15.2999L22.9054 1.13709C23.385 0.657429 24.1603 0.657429 24.6402 1.13709C25.1199 1.61697 25.1199 2.39228 24.6402 2.87216L9.60999 17.9024C9.37073 18.1417 9.05642 18.2619 8.74234 18.2619Z"
                                                    fill="#CCFF00"
                                                />
                                            </svg>
                                            <span className="font-size-1-18">
                                                Excellence in Healthcare every
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-details-social-media">
                                <div className="project-share">
                                    <div className="project-share-tilte">
                                        <h5 className="font-size-1-24">
                                            Share Article
                                        </h5>
                                        <ul className="round-socila-icon-1">
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="project-details-btn">
                                        <a href="#">Cargo</a>
                                        <a href="#">Delivery</a>
                                        <a href="#">Logistics</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-details-pagination">
                                <div className="project-details-prev">
                                    <a href="#">
                                        <span className="font-size-1-16">
                                            <svg
                                                width="27"
                                                height="24"
                                                viewBox="0 0 27 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939341 10.9393ZM27 10.5L2 10.5L2 13.5L27 13.5L27 10.5Z"
                                                    fill="#CCDEFF"
                                                />
                                            </svg>
                                            Previous Post
                                        </span>
                                    </a>
                                    <p className="font-size-1-16">
                                        Federal Aviation Administration Raised
                                    </p>
                                </div>
                                <div className="project-details-next">
                                    <a href="#">
                                        <span className="font-size-1-16">
                                            Next Post
                                            <svg
                                                width="27"
                                                height="24"
                                                viewBox="0 0 27 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M26.0607 10.9393C26.6464 11.5251 26.6464 12.4749 26.0607 13.0607L16.5147 22.6066C15.9289 23.1924 14.9792 23.1924 14.3934 22.6066C13.8076 22.0208 13.8076 21.0711 14.3934 20.4853L22.8787 12L14.3934 3.51472C13.8076 2.92893 13.8076 1.97918 14.3934 1.3934C14.9792 0.80761 15.9289 0.80761 16.5147 1.3934L26.0607 10.9393ZM-1.31134e-07 10.5L25 10.5L25 13.5L1.31134e-07 13.5L-1.31134e-07 10.5Z"
                                                    fill="#CCDEFF"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                    <p className="font-size-1-16">
                                        Federal Aviation Administration Raised
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Project_Details
