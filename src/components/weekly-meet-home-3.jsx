import { asset } from '../assets/assets'
import AnimateTitle from './shared/gsap/split-collab'

const Weekly_Meet_Home_3 = () => {
    return (
        <section className="weekly-meet-home-3">
            <div className="weekly-meet-wrapper">
                <div className="weekly-meet-banner">
                    <video muted loop autoPlay>
                        <source src={asset.weekly_meet_MP4} type="video/mp4" />
                    </video>
                </div>
                <AnimateTitle className="weekly-meet-text">
                    <h1 className="split-collab">Weekly Meeting</h1>
                </AnimateTitle>
            </div>
        </section>
    )
}
export default Weekly_Meet_Home_3
