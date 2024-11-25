import AboutHomeOne from '../components/about-home-1'
import BlogAreaHomeOne from '../components/blog-area-home-1'
import ClientSayHome3 from '../components/client-say-home-3'
import DigitalMarketingHomeOne from '../components/digital-marketing-home-1'
import MarqueeHomeOne from '../components/marquee-home-1'
import OfferHomeOne from '../components/offer-home-1'
import PPCAgencyOne from '../components/ppc-agency-one'
import Footer from '../components/shared/footer'
import Navbar from '../components/shared/navbar'
import StartHeroOne from '../components/start-hero-1'
// import TeamAwrads from '../components/team-awards'

const HomeOne = () => {
    return (
        <>
            <Navbar />
            <StartHeroOne />
            <OfferHomeOne />
            <AboutHomeOne />
            <PPCAgencyOne />
            <DigitalMarketingHomeOne />
            <MarqueeHomeOne />
            {/* <TeamAwrads /> */}
            <ClientSayHome3 />
            <BlogAreaHomeOne />
            
            <Footer />
        </>
    )
}

export default HomeOne
