import { asset } from '../assets/assets'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'
import RevelImageAnimation from '../components/shared/gsap/reveal-image'
import RevelImageTextAnimation from '../components/shared/gsap/reveal-image-text'
import AnimateTitle from '../components/shared/gsap/split-collab'
import Navbar from '../components/shared/navbar'

const Blog_Standart = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb pageName="Blog Standart" />
            {/* blog standart start*/}
            <section className="blog-details-area blog-standart-area">
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-standart-area-shep-1 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-standart-area-shep-2 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-standart-area-shep-3 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-standart-area-shep-4 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="blog-standart-area-shep-5 blur-1"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="blog-details-inner">
                                <div className="blog-details-quets">
                                    <span>
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.48369 2.98633C4.94392 2.98633 5.31744 3.35985 5.31744 3.82008C5.31744 4.28031 4.94392 4.65383 4.48369 4.65383H3.7825C3.32394 4.65383 2.94875 5.02902 2.94875 5.48758V17.9938C2.94875 18.4524 3.32394 18.8276 3.7825 18.8276H11.0361C11.4588 18.8276 11.8148 19.1436 11.864 19.5638C12.0391 21.052 12.3843 24.9907 10.3708 29.1928C9.06762 31.9183 7.32341 33.7617 5.92438 34.9406C7.62523 35.014 10.1315 34.7639 12.481 33.1481C12.8604 32.8871 13.3798 32.983 13.6407 33.3624C13.9017 33.7417 13.8059 34.2611 13.4265 34.5221C9.13852 37.4702 4.40533 36.4956 3.60159 36.3163C3.2756 36.2438 3.02381 35.9845 2.96295 35.656C2.90125 35.3275 3.04214 34.994 3.31978 34.8089C4.50787 34.0168 7.12419 32.1167 8.86673 28.4724C10.4192 25.2333 10.415 22.1651 10.2816 20.4951H3.7825C2.40681 20.4951 1.28125 19.3695 1.28125 17.9938V5.48758C1.28125 4.11189 2.40681 2.98633 3.7825 2.98633H4.48369ZM17.06 30.4651C16.8398 30.8694 16.3329 31.0178 15.9286 30.7977C15.525 30.5768 15.3758 30.0699 15.5967 29.6663C17.3318 26.4897 17.1225 23.1647 17.1225 22.9963V5.48758C17.1225 5.02902 16.7473 4.65383 16.2888 4.65383H7.00662C6.54639 4.65383 6.17287 4.28031 6.17287 3.82008C6.17287 3.35985 6.54639 2.98633 7.00662 2.98633H16.2888C17.6644 2.98633 18.79 4.11189 18.79 5.48758V22.9963C18.79 23.1848 19.0043 26.9058 17.06 30.4651Z"
                                                fill="#CCFF00"
                                            />
                                            <path
                                                d="M15.2551 33.0688C15.7153 33.0688 16.0884 32.6958 16.0884 32.2356C16.0884 31.7754 15.7153 31.4023 15.2551 31.4023C14.7949 31.4023 14.4219 31.7754 14.4219 32.2356C14.4219 32.6958 14.7949 33.0688 15.2551 33.0688Z"
                                                fill="#CCFF00"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M37.9658 6.34385C37.9658 6.80408 37.5923 7.1776 37.132 7.1776C36.6718 7.1776 36.2983 6.80408 36.2983 6.34385V5.48758C36.2983 5.02902 35.9231 4.65383 35.4645 4.65383H22.9583C22.4997 4.65383 22.1245 5.02902 22.1245 5.48758V17.9938C22.1245 18.4524 22.4997 18.8276 22.9583 18.8276H30.2119C30.6346 18.8276 30.9906 19.1436 31.0398 19.5638C31.2149 21.052 31.5601 24.9907 29.5466 29.1928C28.2434 31.9183 26.4992 33.7617 25.1002 34.9406C26.801 35.014 29.3065 34.7639 31.656 33.1489C36.7235 29.6397 36.2983 23.2306 36.2983 22.9963V8.86678C36.2983 8.40655 36.6718 8.03303 37.132 8.03303C37.5923 8.03303 37.9658 8.40655 37.9658 8.86678V22.9963C37.9658 23.2623 38.3743 30.5259 32.6039 34.5204L32.6023 34.5221C28.3143 37.4702 23.5811 36.4956 22.7774 36.3163C22.4514 36.2438 22.1996 35.9845 22.1387 35.656C22.077 35.3275 22.2179 34.994 22.4956 34.8089C23.6836 34.0168 26.3 32.1167 28.0425 28.4724C29.5949 25.2333 29.5907 22.1651 29.4573 20.4951H22.9583C21.5826 20.4951 20.457 19.3695 20.457 17.9938V5.48758C20.457 4.11189 21.5826 2.98633 22.9583 2.98633H35.4645C36.8402 2.98633 37.9658 4.11189 37.9658 5.48758V6.34385Z"
                                                fill="#CCFF00"
                                            />
                                        </svg>
                                    </span>
                                    <p className="font-size-1-16">
                                        Tosser argy-bargy mush loo at public
                                        school Elizabeth up the duff buggered
                                        chinwag on your bike mate don’t get
                                        shirty with me super, Jeffrey bobby
                                        Richard cheesed off spend a penny a load
                                        of old tosh blag horseTosser argy-bargy
                                        mush loo at public school Elizabeth up
                                        the duff buggered chinwag on your bike
                                        mate don’t get
                                    </p>
                                    <h5 className="font-size-1-24">
                                        Silvester Scott
                                    </h5>
                                </div>
                                <RevelImageTextAnimation
                                    image={asset.post_1}
                                    className="blog-details-banner vre-reveal-one"
                                >
                                    <div className="ppc-agencey-play blog-standart-inner">
                                        <a
                                            href="https://www.youtube.com/watch?v=XbZDL435xw0&t=97s"
                                            className="popup-video-1"
                                        >
                                            <div className="video-main">
                                                <div className="promo-video">
                                                    <div className="waves-block">
                                                        <div className="waves wave-1"></div>
                                                        <div className="waves wave-2"></div>
                                                        <div className="waves wave-3"></div>
                                                    </div>
                                                </div>
                                                <span className="popup-video-btn-home-1 video video-popup mfp-iframe">
                                                    <svg
                                                        width="22"
                                                        height="26"
                                                        viewBox="0 0 22 26"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20.3456 9.79627L5.30195 0.52306C4.21357 -0.146991 2.8977 -0.17485 1.78191 0.448538C0.666121 1.07183 0 2.20712 0 3.48519V21.9471C0 23.8796 1.5571 25.4603 3.47089 25.4707C3.47612 25.4707 3.48134 25.4708 3.48646 25.4708C4.08453 25.4707 4.70777 25.2833 5.28986 24.9281C5.75814 24.6424 5.90614 24.0312 5.62044 23.5629C5.33474 23.0946 4.72344 22.9467 4.25531 23.2324C3.98304 23.3984 3.71714 23.4843 3.48159 23.4843C2.7595 23.4804 1.98637 22.8618 1.98637 21.9472V3.48524C1.98637 2.93697 2.27212 2.45009 2.7507 2.18269C3.22932 1.9153 3.7937 1.92724 4.25999 2.21433L19.3037 11.4875C19.7559 11.7659 20.0146 12.2301 20.0135 12.7611C20.0124 13.2921 19.7518 13.7552 19.2972 14.0327L8.42048 20.6923C7.95266 20.9788 7.8056 21.5902 8.09205 22.058C8.37845 22.5258 8.98989 22.6729 9.45772 22.3864L20.3331 15.7276C21.3744 15.0924 21.9975 13.985 22 12.7651C22.0025 11.5454 21.3838 10.4354 20.3456 9.79627Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </RevelImageTextAnimation>
                                <AnimateTitle>
                                    <h4 className="font-size-1-35 split-collab">
                                        Horse Racing Skills That you Definitely
                                        Miss
                                    </h4>
                                </AnimateTitle>
                                <div className="blog-details-banner-meta">
                                    <span className="font-size-1-16">
                                        By Admin <span>/</span>
                                    </span>
                                    <span className="font-size-1-16">
                                        17 Aug 2024 <span>/</span>
                                    </span>
                                    <span className="font-size-1-16">
                                        Digital
                                    </span>
                                </div>
                                <p className="font-size-1-16">
                                    Why Roofing are factmake 17 Reason
                                    EasierForesee the pain & trouble that are
                                    bounds too ensue equalidea off denouncing
                                    pleasures and praising pain was borncomplete
                                    account and expound the actual teachings the
                                    great the master-builder of human happiness.
                                    In a free hour...
                                </p>
                                <a
                                    href="#"
                                    className="btn-primary-style btn-2 hero-info-btn btn-3"
                                >
                                    Read More
                                    <span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1_21324)">
                                                <path
                                                    d="M19.5866 11H0.41235C0.184269 11 0 10.7715 0 10.4886C0 10.2058 0.184269 9.97723 0.41235 9.97723H18.5906L16.0881 6.87375C15.927 6.67399 15.927 6.34958 16.0881 6.14982C16.2492 5.95006 16.5108 5.95006 16.6718 6.14982L19.8792 10.1274C19.9977 10.2745 20.0325 10.4934 19.9681 10.6852C19.9036 10.8753 19.7529 11 19.5866 11Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M16.3435 14.4241C16.2384 14.4241 16.1333 14.3843 16.0538 14.3035C15.8935 14.1433 15.8935 13.883 16.0538 13.7228L19.2487 10.5279C19.4089 10.3677 19.6692 10.3677 19.8294 10.5279C19.9897 10.6882 19.9897 10.9484 19.8294 11.1087L16.6346 14.3035C16.5538 14.3843 16.4487 14.4241 16.3435 14.4241Z"
                                                    fill="black"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_213244">
                                                    <rect
                                                        width="20"
                                                        height="20"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="blog-details-inner">
                                <RevelImageAnimation
                                    image={asset.post_2}
                                    className="blog-details-banner vre-reveal-one"
                                />
                                <AnimateTitle>
                                    <h4 className="font-size-1-35 split-collab">
                                        All the Greatest Moments of Thoroughbred
                                    </h4>
                                </AnimateTitle>
                                <div className="blog-details-banner-meta">
                                    <span className="font-size-1-16">
                                        By Admin <span>/</span>
                                    </span>
                                    <span className="font-size-1-16">
                                        17 Aug 2024 <span>/</span>
                                    </span>
                                    <span className="font-size-1-16">
                                        Digital
                                    </span>
                                </div>
                                <p className="font-size-1-16">
                                    Why Roofing are factmake 17 Reason
                                    EasierForesee the pain & trouble that are
                                    bounds too ensue equalidea off denouncing
                                    pleasures and praising pain was borncomplete
                                    account and expound the actual teachings the
                                    great the master-builder of human happiness.
                                    In a free hour...
                                </p>
                                <a
                                    href="#"
                                    className="btn-primary-style btn-2 hero-info-btn btn-3"
                                >
                                    Read More
                                    <span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1_21324)">
                                                <path
                                                    d="M19.5866 11H0.41235C0.184269 11 0 10.7715 0 10.4886C0 10.2058 0.184269 9.97723 0.41235 9.97723H18.5906L16.0881 6.87375C15.927 6.67399 15.927 6.34958 16.0881 6.14982C16.2492 5.95006 16.5108 5.95006 16.6718 6.14982L19.8792 10.1274C19.9977 10.2745 20.0325 10.4934 19.9681 10.6852C19.9036 10.8753 19.7529 11 19.5866 11Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M16.3435 14.4241C16.2384 14.4241 16.1333 14.3843 16.0538 14.3035C15.8935 14.1433 15.8935 13.883 16.0538 13.7228L19.2487 10.5279C19.4089 10.3677 19.6692 10.3677 19.8294 10.5279C19.9897 10.6882 19.9897 10.9484 19.8294 11.1087L16.6346 14.3035C16.5538 14.3843 16.4487 14.4241 16.3435 14.4241Z"
                                                    fill="black"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_2132444">
                                                    <rect
                                                        width="20"
                                                        height="20"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="blog-details-inner">
                                <RevelImageAnimation
                                    image={asset.post_3}
                                    className="blog-details-banner vre-reveal-one"
                                />

                                <AnimateTitle>
                                    <h4 className="font-size-1-35 split-collab">
                                        One CEO Describe That Goes Into Turning
                                    </h4>
                                </AnimateTitle>
                                <div className="blog-details-banner-meta">
                                    <span className="font-size-1-16">
                                        By Admin <span>/</span>
                                    </span>
                                    <span className="font-size-1-16">
                                        17 Aug 2024 <span>/</span>
                                    </span>
                                    <span className="font-size-1-16">
                                        Digital
                                    </span>
                                </div>
                                <p className="font-size-1-16">
                                    Why Roofing are factmake 17 Reason
                                    EasierForesee the pain & trouble that are
                                    bounds too ensue equalidea off denouncing
                                    pleasures and praising pain was borncomplete
                                    account and expound the actual teachings the
                                    great the master-builder of human happiness.
                                    In a free hour...
                                </p>
                                <a
                                    href="#"
                                    className="btn-primary-style btn-2 hero-info-btn btn-3"
                                >
                                    Read More
                                    <span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1_21324)">
                                                <path
                                                    d="M19.5866 11H0.41235C0.184269 11 0 10.7715 0 10.4886C0 10.2058 0.184269 9.97723 0.41235 9.97723H18.5906L16.0881 6.87375C15.927 6.67399 15.927 6.34958 16.0881 6.14982C16.2492 5.95006 16.5108 5.95006 16.6718 6.14982L19.8792 10.1274C19.9977 10.2745 20.0325 10.4934 19.9681 10.6852C19.9036 10.8753 19.7529 11 19.5866 11Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M16.3435 14.4241C16.2384 14.4241 16.1333 14.3843 16.0538 14.3035C15.8935 14.1433 15.8935 13.883 16.0538 13.7228L19.2487 10.5279C19.4089 10.3677 19.6692 10.3677 19.8294 10.5279C19.9897 10.6882 19.9897 10.9484 19.8294 11.1087L16.6346 14.3035C16.5538 14.3843 16.4487 14.4241 16.3435 14.4241Z"
                                                    fill="black"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_21324444">
                                                    <rect
                                                        width="20"
                                                        height="20"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="blog-standart-pagenation">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>
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
                                <div className="sitebar-comment">
                                    <h5 className="font-size-1-24 sitebar-title-1">
                                        Popular Post
                                    </h5>
                                    <div className="sitebar-comment-warpeer sitebar-comment-warpeer-1">
                                        <RevelImageAnimation
                                            image={asset.sitebar_comment_1}
                                            className="sitebar-comment-pic vre-reveal-one"
                                        />
                                        <div className="sitebar-meta">
                                            <div className="sitebar-meta-inner">
                                                <span>
                                                    <svg
                                                        width="13"
                                                        height="13"
                                                        viewBox="0 0 13 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.875 2.125H10.25V0.875C10.25 0.70924 10.1842 0.550269 10.0669 0.433058C9.94973 0.315848 9.79076 0.25 9.625 0.25C9.45924 0.25 9.30027 0.315848 9.18306 0.433058C9.06585 0.550269 9 0.70924 9 0.875V2.125H4V0.875C4 0.70924 3.93415 0.550269 3.81694 0.433058C3.69973 0.315848 3.54076 0.25 3.375 0.25C3.20924 0.25 3.05027 0.315848 2.93306 0.433058C2.81585 0.550269 2.75 0.70924 2.75 0.875V2.125H2.125C1.62772 2.125 1.15081 2.32254 0.799175 2.67418C0.447544 3.02581 0.25 3.50272 0.25 4V4.625H12.75V4C12.75 3.50272 12.5525 3.02581 12.2008 2.67418C11.8492 2.32254 11.3723 2.125 10.875 2.125Z"
                                                            fill="#CCFF00"
                                                        />
                                                        <path
                                                            d="M0.25 10.875C0.25 11.3723 0.447544 11.8492 0.799175 12.2008C1.15081 12.5525 1.62772 12.75 2.125 12.75H10.875C11.3723 12.75 11.8492 12.5525 12.2008 12.2008C12.5525 11.8492 12.75 11.3723 12.75 10.875V5.875H0.25V10.875Z"
                                                            fill="#CCFF00"
                                                        />
                                                    </svg>
                                                    June 13
                                                </span>
                                                <span>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <mask
                                                            id="mask0_1_127355"
                                                            style={{
                                                                maskType:
                                                                    'alpha',
                                                            }}
                                                            maskUnits="userSpaceOnUse"
                                                            x="0"
                                                            y="0"
                                                            width="20"
                                                            height="20"
                                                        >
                                                            <rect
                                                                width="20"
                                                                height="20"
                                                                fill="#D9D9D9"
                                                            />
                                                        </mask>
                                                        <g mask="url(#mask0_1_12735)">
                                                            <path
                                                                d="M1.66406 18.3337V3.33366C1.66406 2.87533 1.8274 2.48283 2.15406 2.15616C2.48017 1.83005 2.8724 1.66699 3.33073 1.66699H16.6641C17.1224 1.66699 17.5149 1.83005 17.8416 2.15616C18.1677 2.48283 18.3307 2.87533 18.3307 3.33366V13.3337C18.3307 13.792 18.1677 14.1845 17.8416 14.5112C17.5149 14.8373 17.1224 15.0003 16.6641 15.0003H4.9974L1.66406 18.3337ZM3.33073 14.3128L4.3099 13.3337H16.6641V3.33366H3.33073V14.3128Z"
                                                                fill="#CCFF00"
                                                            />
                                                        </g>
                                                    </svg>
                                                    (05)
                                                </span>
                                            </div>
                                            <h6 className="font-size-1-18">
                                                This Place Really Place For
                                                Awesome Moment
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="sitebar-comment-warpeer sitebar-comment-warpeer-2">
                                        <RevelImageAnimation
                                            image={asset.sitebar_comment_2}
                                            className="sitebar-comment-pic vre-reveal-one"
                                        />
                                        <div className="sitebar-meta">
                                            <div className="sitebar-meta-inner">
                                                <span>
                                                    <svg
                                                        width="13"
                                                        height="13"
                                                        viewBox="0 0 13 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.875 2.125H10.25V0.875C10.25 0.70924 10.1842 0.550269 10.0669 0.433058C9.94973 0.315848 9.79076 0.25 9.625 0.25C9.45924 0.25 9.30027 0.315848 9.18306 0.433058C9.06585 0.550269 9 0.70924 9 0.875V2.125H4V0.875C4 0.70924 3.93415 0.550269 3.81694 0.433058C3.69973 0.315848 3.54076 0.25 3.375 0.25C3.20924 0.25 3.05027 0.315848 2.93306 0.433058C2.81585 0.550269 2.75 0.70924 2.75 0.875V2.125H2.125C1.62772 2.125 1.15081 2.32254 0.799175 2.67418C0.447544 3.02581 0.25 3.50272 0.25 4V4.625H12.75V4C12.75 3.50272 12.5525 3.02581 12.2008 2.67418C11.8492 2.32254 11.3723 2.125 10.875 2.125Z"
                                                            fill="#CCFF00"
                                                        />
                                                        <path
                                                            d="M0.25 10.875C0.25 11.3723 0.447544 11.8492 0.799175 12.2008C1.15081 12.5525 1.62772 12.75 2.125 12.75H10.875C11.3723 12.75 11.8492 12.5525 12.2008 12.2008C12.5525 11.8492 12.75 11.3723 12.75 10.875V5.875H0.25V10.875Z"
                                                            fill="#CCFF00"
                                                        />
                                                    </svg>
                                                    June 13
                                                </span>
                                                <span>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <mask
                                                            id="mask0_1_1273555"
                                                            style={{
                                                                maskType:
                                                                    'alpha',
                                                            }}
                                                            maskUnits="userSpaceOnUse"
                                                            x="0"
                                                            y="0"
                                                            width="20"
                                                            height="20"
                                                        >
                                                            <rect
                                                                width="20"
                                                                height="20"
                                                                fill="#D9D9D9"
                                                            />
                                                        </mask>
                                                        <g mask="url(#mask0_1_12735)">
                                                            <path
                                                                d="M1.66406 18.3337V3.33366C1.66406 2.87533 1.8274 2.48283 2.15406 2.15616C2.48017 1.83005 2.8724 1.66699 3.33073 1.66699H16.6641C17.1224 1.66699 17.5149 1.83005 17.8416 2.15616C18.1677 2.48283 18.3307 2.87533 18.3307 3.33366V13.3337C18.3307 13.792 18.1677 14.1845 17.8416 14.5112C17.5149 14.8373 17.1224 15.0003 16.6641 15.0003H4.9974L1.66406 18.3337ZM3.33073 14.3128L4.3099 13.3337H16.6641V3.33366H3.33073V14.3128Z"
                                                                fill="#CCFF00"
                                                            />
                                                        </g>
                                                    </svg>
                                                    (05)
                                                </span>
                                            </div>
                                            <h6 className="font-size-1-18">
                                                This Place Really Place For
                                                Awesome Moment
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="sitebar-comment-warpeer sitebar-comment-warpeer-3">
                                        <RevelImageAnimation
                                            image={asset.sitebar_comment_3}
                                            className="sitebar-comment-pic vre-reveal-one"
                                        />
                                        <div className="sitebar-meta">
                                            <div className="sitebar-meta-inner">
                                                <span>
                                                    <svg
                                                        width="13"
                                                        height="13"
                                                        viewBox="0 0 13 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.875 2.125H10.25V0.875C10.25 0.70924 10.1842 0.550269 10.0669 0.433058C9.94973 0.315848 9.79076 0.25 9.625 0.25C9.45924 0.25 9.30027 0.315848 9.18306 0.433058C9.06585 0.550269 9 0.70924 9 0.875V2.125H4V0.875C4 0.70924 3.93415 0.550269 3.81694 0.433058C3.69973 0.315848 3.54076 0.25 3.375 0.25C3.20924 0.25 3.05027 0.315848 2.93306 0.433058C2.81585 0.550269 2.75 0.70924 2.75 0.875V2.125H2.125C1.62772 2.125 1.15081 2.32254 0.799175 2.67418C0.447544 3.02581 0.25 3.50272 0.25 4V4.625H12.75V4C12.75 3.50272 12.5525 3.02581 12.2008 2.67418C11.8492 2.32254 11.3723 2.125 10.875 2.125Z"
                                                            fill="#CCFF00"
                                                        />
                                                        <path
                                                            d="M0.25 10.875C0.25 11.3723 0.447544 11.8492 0.799175 12.2008C1.15081 12.5525 1.62772 12.75 2.125 12.75H10.875C11.3723 12.75 11.8492 12.5525 12.2008 12.2008C12.5525 11.8492 12.75 11.3723 12.75 10.875V5.875H0.25V10.875Z"
                                                            fill="#CCFF00"
                                                        />
                                                    </svg>
                                                    June 13
                                                </span>
                                                <span>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <mask
                                                            id="mask0_1_127355555"
                                                            style={{
                                                                maskType:
                                                                    'alpha',
                                                            }}
                                                            maskUnits="userSpaceOnUse"
                                                            x="0"
                                                            y="0"
                                                            width="20"
                                                            height="20"
                                                        >
                                                            <rect
                                                                width="20"
                                                                height="20"
                                                                fill="#D9D9D9"
                                                            />
                                                        </mask>
                                                        <g mask="url(#mask0_1_12735)">
                                                            <path
                                                                d="M1.66406 18.3337V3.33366C1.66406 2.87533 1.8274 2.48283 2.15406 2.15616C2.48017 1.83005 2.8724 1.66699 3.33073 1.66699H16.6641C17.1224 1.66699 17.5149 1.83005 17.8416 2.15616C18.1677 2.48283 18.3307 2.87533 18.3307 3.33366V13.3337C18.3307 13.792 18.1677 14.1845 17.8416 14.5112C17.5149 14.8373 17.1224 15.0003 16.6641 15.0003H4.9974L1.66406 18.3337ZM3.33073 14.3128L4.3099 13.3337H16.6641V3.33366H3.33073V14.3128Z"
                                                                fill="#CCFF00"
                                                            />
                                                        </g>
                                                    </svg>
                                                    (05)
                                                </span>
                                            </div>
                                            <h6 className="font-size-1-18">
                                                This Place Really Place For
                                                Awesome Moment
                                            </h6>
                                        </div>
                                    </div>
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
            {/* blog standart end */}
            {/* footer start */}
            <Footer />
            {/* footer end */}
        </>
    )
}
export default Blog_Standart
