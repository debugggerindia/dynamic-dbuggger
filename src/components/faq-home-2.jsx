import React, { useEffect, useState } from 'react'
import { asset } from '../assets/assets'
import AnimateTitle from './shared/gsap/split-collab'
import RevelImageAnimation from './shared/gsap/reveal-image'
import SectionSlideUp from './shared/gsap/slide-up'

const FaqHome2 = () => {
    const [activeIndex, setActiveIndex] = useState(1)

    const handleToggle = (index) => {
        console.log(index)
        setActiveIndex(index)
    }

    // useEffect(() => {
    //     document.querySelectorAll('.accordion-header').forEach((button) => {
    //         button.addEventListener('click', () => {
    //             const accordionContent = button.nextElementSibling

    //             button.classList.toggle('active')

    //             if (button.classList.contains('active')) {
    //                 accordionContent.style.maxHeight =
    //                     accordionContent.scrollHeight + 'px'
    //             } else {
    //                 accordionContent.style.maxHeight = 0
    //             }
    //             document
    //                 .querySelectorAll('.accordion-header')
    //                 .forEach((otherButton) => {
    //                     if (otherButton !== button) {
    //                         otherButton.classList.remove('active')
    //                         otherButton.nextElementSibling.style.maxHeight = 0
    //                     }
    //                 })
    //         })
    //         console.log('mounting')
    //     })
    // }, [document, activeIndex])

    return (
        <div>
            <div
                className="faq-area-home-2"
                style={{
                    backgroundImage: `url(
                        'assets/images/home-2/faq-home-2-bg.png'
                    )`,
                }}
            >
                <div className="container">
                    <div className="title">
                        <div className="sub-title sub-title-home-2">
                            <p>People Also Ask</p>
                        </div>
                        <div className="main-title">
                            <AnimateTitle className="split-collab">
                                Frequently Asked Questions About <br />
                                The Patient For The Public{' '}
                                <span className="absolute">
                                    <img src={asset.text_shep_3} alt="" />
                                </span>
                            </AnimateTitle>
                        </div>
                    </div>
                    <div className="faq-wrapper">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <RevelImageAnimation
                                    image={asset.faq_banner_home_2}
                                    className="faq-banner vre-reveal-one"
                                />
                            </div>
                            <SectionSlideUp className="col-xl-6 col-lg-6">
                                <div className="faq-inner">
                                    <div className="accordion-container">
                                        <div
                                            className={`accordion-item vre-slide-up-gsap `}
                                        >
                                            <button
                                                onClick={() => handleToggle(1)}
                                                className="accordion-header font-size-1-20 active"
                                            >
                                                Why should I choose Springboard
                                                SEO?{' '}
                                                <span className="icon">+</span>
                                            </button>
                                            <div
                                                className={`accordion-content `}
                                            >
                                                <p className="font-size-1-16">
                                                    There are many variations of
                                                    passages of available but
                                                    the Ut elit tellus <br />{' '}
                                                    luctus nec ullamcorper at
                                                    mattis
                                                </p>
                                            </div>
                                        </div>
                                        <div className="accordion-item vre-slide-up-gsap">
                                            <button className="accordion-header font-size-1-20">
                                                How long do search engine
                                                results last?{' '}
                                                <span className="icon">+</span>
                                            </button>
                                            <div className="accordion-content">
                                                <p className="font-size-1-16">
                                                    There are many variations of
                                                    passages of available but
                                                    the Ut elit tellus <br />{' '}
                                                    luctus nec ullamcorper at
                                                    mattis
                                                </p>
                                            </div>
                                        </div>
                                        <div className="accordion-item vre-slide-up-gsap">
                                            <button className="accordion-header font-size-1-20">
                                                Are first place rankings for
                                                competitive
                                                <span className="icon">+</span>
                                            </button>
                                            <div className="accordion-content">
                                                <p className="font-size-1-16">
                                                    There are many variations of
                                                    passages of available but
                                                    the Ut elit tellus <br />{' '}
                                                    luctus nec ullamcorper at
                                                    mattis
                                                </p>
                                            </div>
                                        </div>
                                        <div className="accordion-item vre-slide-up-gsap">
                                            <button className="accordion-header font-size-1-20">
                                                How much does search engine
                                                <span className="icon">+</span>
                                            </button>
                                            <div className="accordion-content">
                                                <p className="font-size-1-16">
                                                    There are many variations of
                                                    passages of available but
                                                    the Ut elit tellus <br />{' '}
                                                    luctus nec ullamcorper at
                                                    mattis
                                                </p>
                                            </div>
                                        </div>
                                        <div className="accordion-item vre-slide-up-gsap">
                                            <button className="accordion-header font-size-1-20">
                                                How Can I Take Your Service ?
                                                <span className="icon">+</span>
                                            </button>
                                            <div className="accordion-content">
                                                <p className="font-size-1-16">
                                                    There are many variations of
                                                    passages of available but
                                                    the Ut elit tellus <br />{' '}
                                                    luctus nec ullamcorper at
                                                    mattis
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SectionSlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqHome2
