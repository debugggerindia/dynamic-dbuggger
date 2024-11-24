import React from 'react'
import { asset } from '../../assets/assets'
import SkillBar from './skill-bar'
import RevelImageAnimation from '../shared/gsap/reveal-image'

const TeamDetailsCp = () => {
    return (
        <section className="team-details-area">
            <img
                src={asset.bg_blur_shep_1}
                alt="VRE"
                className="team-details-area-1-shep-1 blur-1"
            />
            <img
                src={asset.bg_blur_shep_1}
                alt="VRE"
                className="team-details-area-1-shep-2 blur-1"
            />
            <img
                src={asset.bg_blur_shep_1}
                alt="VRE"
                className="team-details-area-1-shep-3 blur-1"
            />
            <div className="container">
                <div className="team-details-wrapper">
                    <div className="team-details-author">
                        <RevelImageAnimation
                            className="team-details-autor-pic vre-reveal-one"
                            image={asset.team_details_1}
                        />
                        <div className="team-details-author-info">
                            <ul className="team-details-author-info-inner">
                                <li>
                                    <span>Position</span> <span>:</span>{' '}
                                    <span>Co Founder</span>
                                </li>
                                <li>
                                    <span>Practice Area </span> <span>:</span>{' '}
                                    <span>Realestate Agent</span>
                                </li>
                                <li>
                                    <span>Experience </span> <span>:</span>{' '}
                                    <span>12 Years</span>
                                </li>
                                <li>
                                    <span>Phone </span> <span>:</span>{' '}
                                    <span>(880)9958 4512 15</span>
                                </li>
                                <li>
                                    <span>Website </span> <span>:</span>{' '}
                                    <span>themeshala.com</span>
                                </li>
                                <li>
                                    <span>Email </span> <span>:</span>{' '}
                                    <span>info@themeshala.com</span>
                                </li>
                            </ul>
                            <div className="author-social-media">
                                <ul className="round-socila-icon-1 round-socila-icon-2">
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
                        </div>
                    </div>
                    <div className="author-about">
                        <h5 className="font-size-1-30">Summary​</h5>
                        <p className="font-size-1-16">
                            The Consulting is an individual certified to have a
                            varying degree of knowledge of general involved in
                            exercise prescription and instruction. They motivate
                            clients by setting goals and providing feedback and
                            accountability to clients. Consulting also measure
                            their client’s strengths.The Consulting is an
                            individual certified to have a varying degree of
                            knowledge of general involved in exercise
                            prescription and instruction. They motivate clients
                            by setting goals and providing feedback and
                            accountability to clients. Consulti
                        </p>
                    </div>
                    <div className="skill-experiance">
                        <div className="skill">
                            <h5 className="font-size-1-24">Skill</h5>
                            <div className="skill-main">
                                <div className="skill-wrrap">
                                    <div className="skill-name">
                                        Development
                                    </div>
                                    <div className="skill-bar">
                                        <SkillBar percentage={85} />
                                    </div>
                                </div>

                                <div className="skill-wrrap">
                                    <div className="skill-name">Marketing</div>
                                    <div className="skill-bar">
                                        <SkillBar percentage={93} />
                                    </div>
                                </div>

                                <div className="skill-wrrap">
                                    <div className="skill-name">
                                        IT Management
                                    </div>
                                    <div className="skill-bar">
                                        <SkillBar percentage={72} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="experiance-wrapper">
                            <h5 className="font-size-1-24">Experience</h5>
                            <div className="experiance">
                                <div className="company">
                                    <h6 className="font-size-1-18">
                                        UI/UX Lead Designer
                                    </h6>
                                    <span className="font-size-1-16">
                                        Google
                                    </span>
                                </div>
                                <div className="job-time">
                                    <span>2022 - PRESENT</span>
                                </div>
                            </div>
                            <div className="experiance">
                                <div className="company">
                                    <h6 className="font-size-1-18">
                                        Senior Engineer (CSE)
                                    </h6>
                                    <span className="font-size-1-16">
                                        Awards.com
                                    </span>
                                </div>
                                <div className="job-time">
                                    <span>2020 - 2022</span>
                                </div>
                            </div>
                            <div className="experiance">
                                <div className="company">
                                    <h6 className="font-size-1-18">
                                        IT Manager & Consultant
                                    </h6>
                                    <span className="font-size-1-16">
                                        Microsoft
                                    </span>
                                </div>
                                <div className="job-time">
                                    <span>2018 - 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edu-aws">
                        <div className="edu-aws-wrapper">
                            <div className="education">
                                <h5 className="font-size-1-24">Education</h5>
                                <div className="experiance">
                                    <div className="company">
                                        <h6 className="font-size-1-18">
                                            Global University{' '}
                                            <span className="font-size-1-14">
                                                of California
                                            </span>
                                        </h6>
                                        <span className="font-size-1-16">
                                            BSC in CSE
                                        </span>
                                    </div>
                                    <div className="job-time">
                                        <span>2018</span>
                                    </div>
                                </div>
                                <div className="experiance">
                                    <div className="company">
                                        <h6 className="font-size-1-18">
                                            Stanford University{' '}
                                            <span className="font-size-1-14">
                                                of USA
                                            </span>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Diploma in CSE
                                        </span>
                                    </div>
                                    <div className="job-time">
                                        <span>2015</span>
                                    </div>
                                </div>
                                <div className="experiance">
                                    <div className="company">
                                        <h6 className="font-size-1-18">
                                            Kolom University{' '}
                                            <span className="font-size-1-14">
                                                of UK
                                            </span>
                                        </h6>
                                        <span className="font-size-1-16">
                                            Business Study
                                        </span>
                                    </div>
                                    <div className="job-time">
                                        <span>2019</span>
                                    </div>
                                </div>
                            </div>
                            <div className="awr">
                                <h5 className="font-size-1-24">Awards</h5>
                                <div className="awr-wrapper">
                                    <div className="awr-item">
                                        <img
                                            src={asset.team_details_2}
                                            alt="VRE"
                                        />
                                        <div className="awr-item-left">
                                            <h6 className="font-size-1-18">
                                                UX Designer
                                            </h6>
                                            <span className="font-size-1-14">
                                                Best designer awards
                                            </span>
                                        </div>
                                        <div className="awr-date">
                                            <span className="font-size-1-14">
                                                2022
                                            </span>
                                        </div>
                                    </div>
                                    <div className="awr-item">
                                        <img
                                            src={asset.team_details_2}
                                            alt="VRE"
                                        />
                                        <div className="awr-item-left">
                                            <h6 className="font-size-1-18">
                                                UX Designer
                                            </h6>
                                            <span className="font-size-1-14">
                                                Best designer awards
                                            </span>
                                        </div>
                                        <div className="awr-date">
                                            <span className="font-size-1-14">
                                                2022
                                            </span>
                                        </div>
                                    </div>
                                    <div className="awr-item">
                                        <img
                                            src={asset.team_details_2}
                                            alt="VRE"
                                        />
                                        <div className="awr-item-left">
                                            <h6 className="font-size-1-18">
                                                UX Designer
                                            </h6>
                                            <span className="font-size-1-14">
                                                Best designer awards
                                            </span>
                                        </div>
                                        <div className="awr-date">
                                            <span className="font-size-1-14">
                                                2022
                                            </span>
                                        </div>
                                    </div>
                                    <div className="awr-item">
                                        <img
                                            src={asset.team_details_2}
                                            alt="VRE"
                                        />
                                        <div className="awr-item-left">
                                            <h6 className="font-size-1-18">
                                                UX Designer
                                            </h6>
                                            <span className="font-size-1-14">
                                                Best designer awards
                                            </span>
                                        </div>
                                        <div className="awr-date">
                                            <span className="font-size-1-14">
                                                2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamDetailsCp
