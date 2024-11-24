import { asset } from '../../assets/assets'

const Weekly_Meet = () => {
    return (
        <section className="weekly-meet-home-3 about-area-weekly-meet">
            <div className="weekly-meet-wrapper">
                <div className="weekly-meet-banner">
                    <video muted loop autoPlay>
                        <source src={asset.weekly_meet_MP4} type="video/mp4" />
                    </video>
                </div>
                <div className="weekly-meet-text">
                    <h1
                        className="split-collab text"
                        data-hover="Weekly Meeting"
                    >
                        Weekly Meeting
                    </h1>
                </div>
            </div>
        </section>
    )
}
export default Weekly_Meet
