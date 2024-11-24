import { asset } from '../assets/assets'
import RevelImageTextAnimation from './shared/gsap/reveal-image-text'
import AnimateTitle from './shared/gsap/split-collab'

const Offer_Area_Home_3 = () => {
    return (
        <section className="offer-area-home-3">
            <img
                src={asset.bg_blur_shep_3}
                alt="VRE"
                className="offer-area-1-shep-1 blur-1"
            />
            <div className="container">
                <div className="title">
                    <div className="sub-title sub-title-home-3">
                        <p>what we offer</p>
                    </div>
                    <div className="main-title">
                        <AnimateTitle className="split-collab">
                            We Offer A Wide Range Of <br /> Digital Marketing{' '}
                            <span className="absolute">
                                <img src={asset.text_shep_2} alt="" />
                            </span>
                        </AnimateTitle>
                    </div>
                </div>
                <div className="offer-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <RevelImageTextAnimation
                                image={asset.offer_1_home_3}
                                className="offer-inner vre-reveal-one"
                            >
                                <div className="offer-name">
                                    <h5 className="font-size-1-24">
                                        <a href="services-details.html">
                                            Creative Agency
                                        </a>
                                    </h5>
                                    <span>
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <rect
                                                width="32"
                                                height="32"
                                                fill="url(#pattern0_1_19027)"
                                            />
                                            <defs>
                                                <pattern
                                                    id="pattern0_1_19027"
                                                    patternContentUnits="objectBoundingBox"
                                                    width="1"
                                                    height="1"
                                                >
                                                    <use
                                                        xlinkHref="#image0_1_19027"
                                                        transform="scale(0.0104167)"
                                                    />
                                                </pattern>
                                                <image
                                                    id="image0_1_19027"
                                                    width="96"
                                                    height="96"
                                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAETUlEQVR4nO2dy48VRRSHDzg+gosxUUFZgrDQnRLHsEHQHUHwH4Cwc0EQdUskYNz5GBFJCMQYExdG9ixAAuqOsOIVMA6yI446ChsE9DMVa4IZ5s7tut3Vfc7p+laTyb1dVb9f1+PW45SIMRhC1/lzD8WAYkCvodSAYkCvodSAYkCvodSAYkCvodSAYoAqgK3ARN+mIoCJUPa20huUie3A38AfwEvSE4AXgN+Bf4A3uhZ/ll6YwD3xZ2nfhHnE74UJ3C9++yYsIL5rExgsfnsmANuGiP9/E1rrmFvqcEOZhhG02ZYzI88Dv1XIiJuawPA3v90Xr08moE38EarkbMZWijGAlYllbLfJTTDhILCoRjoPxLTeAQ4D3wFT8c28DfwV/w7/Ox0/8zbwYvhujXQXxbzrEz/BhJHEBx4CtgBHgT8rvoWDxPkG2ByemcGE7gcbC5iQLD7wOLAPmKZ5wjP3hjQaMqF78RcwIUl84FHgfeAm+QlpvAcsqWGCHvHnMSFV/NeAn2mfq8DGEUzQJ/4swIqq4gOPAJ/RPfuBhxNMWCHWAZYDZ9HDGeAp6QOxlvyIPq4Cq8UzwCrgOnq5DjwjHonNTvixpJ0p4GnxROxwNbX5VfqESh2zCZSMdlL5RDwQx/lW2SiWCb82jbT7g7gWfqWLVeL0gnX2ikXixFobczu5CWV4QqwRJ7y8sEcsEefzc0wpd8UvwINiBeB1/LFJrBBXsrzxtVggruHO4I+ZOmvMbS/MeGWNaCfuSPDKLtEOcAS/HMohWBIVnvc9fjnVuJ7JXxiegbCy5JUpCwZU3TdqkWkLBoStgl65ZcGAO/jltgUDbuCXGQsGdLHLrS1MdMI/4JfTjRvQNMAX+OVz0Q7wFn7ZKdoB1uKXCdEOMFbzVItWwrb0MbEA8BX++FKsALyKP9aLFeJBBssbsuYSJhgXiyXCVg78sFusATzmZGvKNDAuFgHexD47xCphMxNwBbv8NMoBb1UAr1QMcaONu8AG8UA8oW6Nd8ULYQgHHMcOJ01swkoBWApcQj8XgCfFI8CyWECtXA6nOcUz0YSL6OOKe/HnnJ45hh6+DS+GWCcxWMfiMNKIw72uCGnvrjrPozpYR41wNS8D5zsQ/xywzkW4mnmiCx5OmT3kv9qwtaU4Er/GKZKxRPEPqIwG2XDIsvEWDBh3E7KsQlzNpJoQIDOSwDxv/ly6qwkJQU1Tm6OsNCh+dybkDNxKZswHbs0dzpfMmA7T3EYsZTIzQn70mNBG+HoyYzp8fcIFDiO3h2SmRr6G1QQVt2jU7ozITM28DTJBxT0yjYwEUGzAABNU3KTU2DAM5QbMMaE78XNd5EbeI043XF3klgPyrpid67p86gE+zmjAB12XTz3Ac5kWacIzn+26fCYAPs1gwGTX5bIWc+5Eg+IfNxXzTZEJ+2s2R+HU/mQRv36f8FFcw60Sh/Rm/OyHpc0vFAqFgijmXxoHDiJJFbe8AAAAAElFTkSuQmCC"
                                                />
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                            </RevelImageTextAnimation>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6  vre-slide-up-gsap">
                            <RevelImageTextAnimation
                                image={asset.offer_2_home_3}
                                className="offer-inner vre-reveal-one"
                            >
                                <div className="offer-name">
                                    <h5 className="font-size-1-24">
                                        <a href="services-details.html">
                                            Quality Work
                                        </a>
                                    </h5>
                                    <span>
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <rect
                                                width="32"
                                                height="32"
                                                fill="url(#pattern0_1_19037)"
                                            />
                                            <defs>
                                                <pattern
                                                    id="pattern0_1_19037"
                                                    patternContentUnits="objectBoundingBox"
                                                    width="1"
                                                    height="1"
                                                >
                                                    <use
                                                        xlinkHref="#image0_1_19037"
                                                        transform="scale(0.0104167)"
                                                    />
                                                </pattern>
                                                <image
                                                    id="image0_1_19037"
                                                    width="96"
                                                    height="96"
                                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFQElEQVR4nO3daahVVRTA8dVkgxMZNtogJk0UzZlU0CvIotJGivpgFJEVFJVaVhRR0PClLJMKgigwIfuQNGqS2URIoQ3kKz/kM9MypcFSe/aPzd3Q4/W8Z53hnrPXPucH78t7l33OOvvds+4ezroijUaj0Wg0Go1Go1EhYHfgdmAp8BewEVgEXAnskKKdHYHJwAfAWuAPYAlwE7BLZ6MwCjgY+Irtm6e5eMCuwPw27SwH9i4nKiNoXbQvSfZqu05wf/OvSbLMHbPcKAMGTEFvIXDoAG2MBd5N0c4N1UQbIOAd0tkGvA/M8j9L/O/SeKvquIMBrKB8K6qOOxjAzxV0wLqq4w4CMDzD7aMIve7YUnfANVRnstQZrf/+VRV2wKravguAkX6kWjV3DiMlRsAo4CzgNOBAYBhwFHCXS4KEw53Lnf7chvlzdefcBRwg1riBkh8wxWIBMEYsAMb5ya/Y/A6cIgaSag/x6nG3KAkVcDPxmyKhcvMrxO91CRXwGfFbKqECFhO/RRIqYAbxmy6hAvb0a7Cx+jH4qQs/8q1idrPTXExdYoFfpYrNTLECOIz4jBVLgA3EY71YA6whHj1iCTAU2Eo8tgCDxQrgauJzhVjgFzRWEp9uYIiEDBjhN9PGaoEbbEqIgInAD8RvNXC+hASYSr38A9wqIQDGRzr1kMTFfFIIHfAi9fV81dc/tgFXWt+H0AG/Ul+/hNAB31Ff3SF0wOPU12MhdMDomt6GNgIHSQiASyKbfNNMzk2SkAAnAm/7Bx9i1Qu8CRwngU9FTwCei+RdsRV4xsc0VCwBjjc+P7QaOFYs852wGXs2B32rSQOYjT0zJRbAGdgzXmLhimNgzwiJ7Fkxa/aVWPiBmjUTJRb+c7Q1T0sslLWAQrNMYmF0m0q3xAJ4A3vmSyyM7pS7SmLhqxVac6HEwO+WW68IeLnbawOcA5zr9xp9UcCFdB8A7gDO823fllCdse9WxEFiHfCUIthXBqoL6ut/3pNxjcHt27nXtbGddj9RtDFVLAOOBP5OCPJP4JCEdu7P0AH3JbR5gmJD2W/AfmKVsmLKA8raQmkWd1yxkD0U7b5gYvNVFsDFyuIXgzv00N80Rbv7KDYUuHfJyWKwEu63RTz0QGtBJ0sO2OTKISvad8WjknyUpnZ15YC7FUF9mBSU+7sPPquXFec6yH/iiWNc4Ep8+eJGuXcWA9eS3wTFcSYp14fDfkLGAV5SBPOssuzBTwV0QLemULey1M6DEjLgVP/wAop3wBpfkv7MHInXFev+OktC9mOBi/yF11budd9pMFpC5AP6lOzPXu2VMvG63WmH+9oUSdwtcVS/7ZSfZzzXeRJpBdyVwP6+Iz9WvP6RPseeq3j9XP/aY5RTI+10hbgbrogHNd4DrleOH4b0W3NOSvz4sYnmlpXEzSXtLKEAHqU4vYrXXD7AOUwrqG2tGyUErqBpyTvfFrb5PF/Ef7fWhr55qzIJX5hTtC3AEW3ORZOQi/RkuVf7/wGfXXLADyvOSZOQi+JuaUeLNW4OKEOwPZqRaIqE3N84qQtgpwwP912Won1NQu5rsdQNcEvexNum7bQJ+QKpG7cOgG5A1DbxFpCQvxlo2bIWgIeKSLw5E/J1Ule0tq27Ca5ciTdHQnbfnLGb1Bmth/nUI94M7U9v0/4MqTtaNUa35U28GRLypiBGsiEAXisi8aZMyE8U1b55wOlFJV5lQu4186U8ZeG/NYBciVeZkOcU3b55wKVFJV5FQra1z6fE6YnZHT6GS8izOnkM0yhh85OpDVaNhsTuX8fPaUQK+i5BAAAAAElFTkSuQmCC"
                                                />
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                            </RevelImageTextAnimation>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 vre-slide-up-gsap">
                            <RevelImageTextAnimation
                                image={asset.offer_3_home_3}
                                className="offer-inner vre-reveal-one"
                            >
                                <div className="offer-name">
                                    <h5 className="font-size-1-24">
                                        <a href="services-details.html">
                                            Professional Team
                                        </a>
                                    </h5>
                                    <span>
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <rect
                                                width="32"
                                                height="32"
                                                fill="url(#pattern0_1_19047)"
                                            />
                                            <defs>
                                                <pattern
                                                    id="pattern0_1_19047"
                                                    patternContentUnits="objectBoundingBox"
                                                    width="1"
                                                    height="1"
                                                >
                                                    <use
                                                        xlinkHref="#image0_1_19047"
                                                        transform="scale(0.0104167)"
                                                    />
                                                </pattern>
                                                <image
                                                    id="image0_1_19047"
                                                    width="96"
                                                    height="96"
                                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGUlEQVR4nO2cx4vWQBjGo6IXxYYNT/aLF11FwYLlIp7sCgqCiP4DKljAimADEc96sIGe9GxDsGC7ibtrvejBguKu2EB/MuwI67ImM/mSTBKfH3yX7E7yPu+TKd87yRdFQgghhBBCCCGEEEIIIYQQJQHoAUwB9gLXgRbgs/0022N7gKbQsdYx8SuBVtwx5iw3bUPHX2mAscBd0nMHGB1aRyUBZgFvaJz3wPzQeioFMA/4QXZ8B+aE1lUJgNHAW7LH9IRxofVVYcK9S37c1sQcb8Aq8mdZcbdU9e7+1gIMaA6ttZQAUymOyaH1lg5gX4EG7A6tt3TQUUooiqtRlQH62AnzXJeaTIs9ZkoHfTzP2VqgAS2h9abGrCKA5w4inwFLPc7bRnG0hdbrDdALOJJC7GGgZ9UMIGe93qQM5g8HSzYENYfW64Xtho2yOOEa1yjJJFyEXt8JyIxvjfIibqKiYzOlKHaG1huqPLAi5jpNFMek0Hp9DDDLrKw4k1CKaCF/HpdBr48BT4paf9OxjZg3S8qi19WAtqKWf3T0ArONmBc3k8rRRep1NaA9w4A+OVxvVI4bMmPLpjcqeH3u1CWBOXYbMSvMuWaXVW9U4KR02uO6MzPclJ9Xdr1xAZlCU1YsT7E/fLvBMX9UVfTm/cXkKdA7xfV72G+m5uk3Vx6nLYyF1vuvoJZmENCiDOKYbDZTTCnBGtJuP8322K64L1lV09s1KFPlS8uBqGJQNr2mxAocShHMwVzKszlTWr2mymfHtySeZt4NA1BKvWZyMYUmU+voZiw+Y0sK2UxAJeB/0yuEEEJEwBBgLrDBrssvAQ/sYyLvgG/2884eM3+7aP93gy3qDVEqHQFG2tXGMZvMX2SDMecUsBGYqEfU/076RFte8Kn1NMpLa/Ks/7J3AMOBHcAjwvPIxjIsqgLACGANcBSY5tl2DHDSjttlw8R0wvetSmC6zcVqc2N5J9TxIsOAzbY2/9MGfNGj/QDgeMa7XHnx3Q5P/T30mYkfm5tbwCZgaOqEdzrxFLtD1DVxba5dFlgIvKZ6vAIWeNyg7d30qLOp3twHJgAXYlYhTs8+Ats79Zgq8hPY6qj1X5VTk8PzwHjXEuzmhDH6m8tYB+ynPuxzXFjEDbFf7dDUfakaGOj4gOxlh2DWUT/WOui+4nAe8z8DujYcDNx3DGSTw53wkfrxIWneA7Y4nuseMKjziwg3PAKZkRCEWVPXlW0Ov2/hinknrpdptN4ziDEJQTykvtx3+HUXH9ZFKX4aoG9CEHUcfv7wMUF7P/y4Yxp98WkRF4ANotZE2er/4p0wGRCPdz5lgB8J+ZcBeSMDAiMDAiMDAiMDAiMDAiMDAiMDAiMDAiMDAiMD6maAEEIIIYQQQgghhBBCCCGiuvMbLVSgxlnV6xMAAAAASUVORK5CYII="
                                                />
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                            </RevelImageTextAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Offer_Area_Home_3
