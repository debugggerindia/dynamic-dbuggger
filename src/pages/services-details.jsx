import { asset } from '../assets/assets'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'
import RevelImageAnimation from '../components/shared/gsap/reveal-image'
import AnimateTitle from '../components/shared/gsap/split-collab'
import Navbar from '../components/shared/navbar'

const Services_Details = () => {
    return (
        <div>
            <Navbar />
            <Breadcrumb pageName="Services Details" />
            {/* blog details start here */}
            <section className="blog-details-area">
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-details-area-shep-1 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-details-area-shep-2 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-details-area-shep-3 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-details-area-shep-4 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-details-area-shep-5 blur-1"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="blog-details-inner">
                                <RevelImageAnimation
                                    image={asset.blog_details_banner_1}
                                    className="blog-details-banner vre-reveal-one"
                                />

                                <AnimateTitle>
                                    <h4 className="font-size-1-35 split-collab">
                                        How Data Backup & Recovery Can Saves
                                    </h4>
                                </AnimateTitle>
                                <p className="font-size-1-16">
                                    Lorem ipsum is simply free text used by
                                    copytyping refreshing. Neque porro est qui
                                    dolorem ipsum quia quaed inventore veritatis
                                    et quasi architecto beatae vitae dicta sunt
                                    explicabo. Aelltes port lacus quis enim var
                                    sed efficitur turpis gilla sed sit amet
                                    finibus eros. Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the ndustry
                                    standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley
                                </p>
                                <div className="blog-details-post-wrapper">
                                    <div className="blog-details-post-1">
                                        <RevelImageAnimation
                                            image={asset.blog_details_post_1}
                                            className="blog-details-post-1-banner vre-reveal-one"
                                        />
                                        <ul>
                                            <li>
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1_12477)">
                                                        <path
                                                            d="M24.2867 3.41785C23.919 3.04945 23.3222 3.04881 22.9545 3.41629L11.6511 14.6898L7.57286 10.2605C7.22047 9.87796 6.62467 9.85316 6.24152 10.2055C5.85865 10.5579 5.83414 11.154 6.18654 11.5368L10.929 16.6873C11.1027 16.8761 11.3458 16.9857 11.6021 16.991C11.6089 16.9913 11.6156 16.9913 11.6222 16.9913C11.8713 16.9913 12.1109 16.8924 12.2874 16.7165L24.2849 4.75042C24.6536 4.38299 24.6542 3.78626 24.2867 3.41785Z"
                                                            fill="#CCDEFF"
                                                        />
                                                        <path
                                                            d="M24.0578 11.5578C23.5374 11.5578 23.1156 11.9795 23.1156 12.5C23.1156 18.3537 18.3537 23.1156 12.5 23.1156C6.64668 23.1156 1.88442 18.3537 1.88442 12.5C1.88442 6.64668 6.64668 1.88442 12.5 1.88442C13.0204 1.88442 13.4422 1.46265 13.4422 0.942236C13.4422 0.421777 13.0204 0 12.5 0C5.60742 0 0 5.60742 0 12.5C0 19.3923 5.60742 25 12.5 25C19.3923 25 25 19.3923 25 12.5C25 11.9796 24.5782 11.5578 24.0578 11.5578Z"
                                                            fill="#CCDEFF"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_124771">
                                                            <rect
                                                                width="25"
                                                                height="25"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="font-size-1-18">
                                                    Find information and begin
                                                    your application
                                                </span>
                                            </li>
                                            <li>
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1_12477)">
                                                        <path
                                                            d="M24.2867 3.41785C23.919 3.04945 23.3222 3.04881 22.9545 3.41629L11.6511 14.6898L7.57286 10.2605C7.22047 9.87796 6.62467 9.85316 6.24152 10.2055C5.85865 10.5579 5.83414 11.154 6.18654 11.5368L10.929 16.6873C11.1027 16.8761 11.3458 16.9857 11.6021 16.991C11.6089 16.9913 11.6156 16.9913 11.6222 16.9913C11.8713 16.9913 12.1109 16.8924 12.2874 16.7165L24.2849 4.75042C24.6536 4.38299 24.6542 3.78626 24.2867 3.41785Z"
                                                            fill="#CCDEFF"
                                                        />
                                                        <path
                                                            d="M24.0578 11.5578C23.5374 11.5578 23.1156 11.9795 23.1156 12.5C23.1156 18.3537 18.3537 23.1156 12.5 23.1156C6.64668 23.1156 1.88442 18.3537 1.88442 12.5C1.88442 6.64668 6.64668 1.88442 12.5 1.88442C13.0204 1.88442 13.4422 1.46265 13.4422 0.942236C13.4422 0.421777 13.0204 0 12.5 0C5.60742 0 0 5.60742 0 12.5C0 19.3923 5.60742 25 12.5 25C19.3923 25 25 19.3923 25 12.5C25 11.9796 24.5782 11.5578 24.0578 11.5578Z"
                                                            fill="#CCDEFF"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_124772">
                                                            <rect
                                                                width="25"
                                                                height="25"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="font-size-1-18">
                                                    We provide obtaining entry
                                                    permits
                                                </span>
                                            </li>
                                            <li>
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1_12477)">
                                                        <path
                                                            d="M24.2867 3.41785C23.919 3.04945 23.3222 3.04881 22.9545 3.41629L11.6511 14.6898L7.57286 10.2605C7.22047 9.87796 6.62467 9.85316 6.24152 10.2055C5.85865 10.5579 5.83414 11.154 6.18654 11.5368L10.929 16.6873C11.1027 16.8761 11.3458 16.9857 11.6021 16.991C11.6089 16.9913 11.6156 16.9913 11.6222 16.9913C11.8713 16.9913 12.1109 16.8924 12.2874 16.7165L24.2849 4.75042C24.6536 4.38299 24.6542 3.78626 24.2867 3.41785Z"
                                                            fill="#CCDEFF"
                                                        />
                                                        <path
                                                            d="M24.0578 11.5578C23.5374 11.5578 23.1156 11.9795 23.1156 12.5C23.1156 18.3537 18.3537 23.1156 12.5 23.1156C6.64668 23.1156 1.88442 18.3537 1.88442 12.5C1.88442 6.64668 6.64668 1.88442 12.5 1.88442C13.0204 1.88442 13.4422 1.46265 13.4422 0.942236C13.4422 0.421777 13.0204 0 12.5 0C5.60742 0 0 5.60742 0 12.5C0 19.3923 5.60742 25 12.5 25C19.3923 25 25 19.3923 25 12.5C25 11.9796 24.5782 11.5578 24.0578 11.5578Z"
                                                            fill="#CCDEFF"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_124773">
                                                            <rect
                                                                width="25"
                                                                height="25"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="font-size-1-18">
                                                    Ut enim veniam, quis nostrud
                                                    minim exerc
                                                </span>
                                            </li>
                                            <li>
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1_12477)">
                                                        <path
                                                            d="M24.2867 3.41785C23.919 3.04945 23.3222 3.04881 22.9545 3.41629L11.6511 14.6898L7.57286 10.2605C7.22047 9.87796 6.62467 9.85316 6.24152 10.2055C5.85865 10.5579 5.83414 11.154 6.18654 11.5368L10.929 16.6873C11.1027 16.8761 11.3458 16.9857 11.6021 16.991C11.6089 16.9913 11.6156 16.9913 11.6222 16.9913C11.8713 16.9913 12.1109 16.8924 12.2874 16.7165L24.2849 4.75042C24.6536 4.38299 24.6542 3.78626 24.2867 3.41785Z"
                                                            fill="#CCDEFF"
                                                        />
                                                        <path
                                                            d="M24.0578 11.5578C23.5374 11.5578 23.1156 11.9795 23.1156 12.5C23.1156 18.3537 18.3537 23.1156 12.5 23.1156C6.64668 23.1156 1.88442 18.3537 1.88442 12.5C1.88442 6.64668 6.64668 1.88442 12.5 1.88442C13.0204 1.88442 13.4422 1.46265 13.4422 0.942236C13.4422 0.421777 13.0204 0 12.5 0C5.60742 0 0 5.60742 0 12.5C0 19.3923 5.60742 25 12.5 25C19.3923 25 25 19.3923 25 12.5C25 11.9796 24.5782 11.5578 24.0578 11.5578Z"
                                                            fill="#CCDEFF"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_124774">
                                                            <rect
                                                                width="25"
                                                                height="25"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="font-size-1-18">
                                                    Apply to travel, study, work
                                                    or immigrate
                                                </span>
                                            </li>
                                            <li>
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1_12477)">
                                                        <path
                                                            d="M24.2867 3.41785C23.919 3.04945 23.3222 3.04881 22.9545 3.41629L11.6511 14.6898L7.57286 10.2605C7.22047 9.87796 6.62467 9.85316 6.24152 10.2055C5.85865 10.5579 5.83414 11.154 6.18654 11.5368L10.929 16.6873C11.1027 16.8761 11.3458 16.9857 11.6021 16.991C11.6089 16.9913 11.6156 16.9913 11.6222 16.9913C11.8713 16.9913 12.1109 16.8924 12.2874 16.7165L24.2849 4.75042C24.6536 4.38299 24.6542 3.78626 24.2867 3.41785Z"
                                                            fill="#CCDEFF"
                                                        />
                                                        <path
                                                            d="M24.0578 11.5578C23.5374 11.5578 23.1156 11.9795 23.1156 12.5C23.1156 18.3537 18.3537 23.1156 12.5 23.1156C6.64668 23.1156 1.88442 18.3537 1.88442 12.5C1.88442 6.64668 6.64668 1.88442 12.5 1.88442C13.0204 1.88442 13.4422 1.46265 13.4422 0.942236C13.4422 0.421777 13.0204 0 12.5 0C5.60742 0 0 5.60742 0 12.5C0 19.3923 5.60742 25 12.5 25C19.3923 25 25 19.3923 25 12.5C25 11.9796 24.5782 11.5578 24.0578 11.5578Z"
                                                            fill="#CCDEFF"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_124775">
                                                            <rect
                                                                width="25"
                                                                height="25"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="font-size-1-18">
                                                    Dolor in reprehenderit
                                                    voluptate velit esse
                                                </span>
                                            </li>
                                            <li>
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1_12477)">
                                                        <path
                                                            d="M24.2867 3.41785C23.919 3.04945 23.3222 3.04881 22.9545 3.41629L11.6511 14.6898L7.57286 10.2605C7.22047 9.87796 6.62467 9.85316 6.24152 10.2055C5.85865 10.5579 5.83414 11.154 6.18654 11.5368L10.929 16.6873C11.1027 16.8761 11.3458 16.9857 11.6021 16.991C11.6089 16.9913 11.6156 16.9913 11.6222 16.9913C11.8713 16.9913 12.1109 16.8924 12.2874 16.7165L24.2849 4.75042C24.6536 4.38299 24.6542 3.78626 24.2867 3.41785Z"
                                                            fill="#CCDEFF"
                                                        />
                                                        <path
                                                            d="M24.0578 11.5578C23.5374 11.5578 23.1156 11.9795 23.1156 12.5C23.1156 18.3537 18.3537 23.1156 12.5 23.1156C6.64668 23.1156 1.88442 18.3537 1.88442 12.5C1.88442 6.64668 6.64668 1.88442 12.5 1.88442C13.0204 1.88442 13.4422 1.46265 13.4422 0.942236C13.4422 0.421777 13.0204 0 12.5 0C5.60742 0 0 5.60742 0 12.5C0 19.3923 5.60742 25 12.5 25C19.3923 25 25 19.3923 25 12.5C25 11.9796 24.5782 11.5578 24.0578 11.5578Z"
                                                            fill="#CCDEFF"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_124776">
                                                            <rect
                                                                width="25"
                                                                height="25"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="font-size-1-18">
                                                    Bunt in culpa qui officia
                                                    deserunt mollit anim
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="font-size-1-30 split-collab">
                                        Is The Only Theme you Will Ever Need
                                    </h5>
                                    <p className="font-size-1-16">
                                        England dotted with a lush, green
                                        landscape, rustic villages and throbbing
                                        with humanity. South Asian country that
                                        has plenty to offer to visitors with its
                                        diverse wildlife .We have helped
                                        students, business persons, tourists,
                                        clients with medical needs. There are
                                        many variations of passages of Lorem
                                        Ipsum available.
                                    </p>
                                </div>
                                <div className="blog-details-post-2">
                                    <div className="blog-details-post-2-inner">
                                        <RevelImageAnimation
                                            image={asset.blog_details_post_2}
                                            className="blog-details-post-left vre-reveal-one"
                                        />

                                        <RevelImageAnimation
                                            image={asset.blog_details_post_3}
                                            className="blog-details-post-right vre-reveal-one"
                                        />
                                    </div>
                                    <AnimateTitle>
                                        <h5 className="font-size-1-24 split-collab">
                                            We have been offering human
                                            translation services
                                        </h5>
                                    </AnimateTitle>
                                    <p className="font-size-1-16">
                                        Lorem ipsum is simply free text used by
                                        copytyping refreshing. Neque porro est
                                        qui dolorem ipsum quia quaed inventore
                                        veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Aelltes port
                                        lacus quis enim var sed efficitur turpis
                                        gilla sed sit amet finibus eros. Lorem
                                        Ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="sitebar-wrapper">
                                <div className="sitebar-search-bar">
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                        />
                                        <button type="submit">
                                            <svg
                                                width="25"
                                                height="25"
                                                viewBox="0 0 25 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M10.4193 3.646C6.68281 3.646 3.64844 6.68037 3.64844 10.4168C3.64844 14.1533 6.68281 17.1877 10.4193 17.1877C14.1557 17.1877 17.1901 14.1533 17.1901 10.4168C17.1901 6.68037 14.1557 3.646 10.4193 3.646ZM10.4193 4.68766C13.5818 4.68766 16.1484 7.25433 16.1484 10.4168C16.1484 13.5793 13.5818 16.146 10.4193 16.146C7.25677 16.146 4.6901 13.5793 4.6901 10.4168C4.6901 7.25433 7.25677 4.68766 10.4193 4.68766Z"
                                                    fill="black"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M21.2042 20.4647L15.2052 14.4668C15.0021 14.2637 14.6719 14.2637 14.4687 14.4668C14.2656 14.6699 14.2656 15.0001 14.4687 15.2033L20.4667 21.2022C20.6708 21.4053 21 21.4053 21.2042 21.2022C21.4073 20.998 21.4073 20.6689 21.2042 20.4647Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                                <div className="sitebar-menu">
                                    <h5 className="font-size-1-24 sitebar-title-1">
                                        Main Services
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                App Development{' '}
                                                <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                SEO Marketing{' '}
                                                <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                SEO Analysis{' '}
                                                <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                SEO Optimization{' '}
                                                <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Social Media
                                                <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Marketing Strategy{' '}
                                                <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sitebar-banner vre-reveal-one">
                                    <a href="#">
                                        <RevelImageAnimation
                                            className="vre-reveal-image-one"
                                            image={asset.sitebar_banner}
                                        />
                                    </a>
                                </div>
                                <div className="sitebar-tag">
                                    <h5 className="font-size-1-24 sitebar-title-1">
                                        Popular Tags
                                    </h5>
                                    <div className="sitebar-tag-title">
                                        <a href="#">Social Media</a>
                                        <a href="#">Digital</a>
                                        <a href="#">Marketing</a>
                                        <a href="#">Social</a>
                                        <a href="#">SEO Services</a>
                                        <a href="#">Web SEO</a>
                                        <a href="#">Education</a>
                                        <a href="#">America</a>
                                        <a href="#">Analysis</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog details end here */}
            {/* footer   start*/}
            <Footer />
            {/* footer end */}
        </div>
    )
}
export default Services_Details
