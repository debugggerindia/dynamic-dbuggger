import About_Area from '../components/about/about-area'
import OfferHomeOne from '../components/offer-home-1'
import Marque_Area_Home_Two from '../components/about/marque-area-home-2'
import DigitalMarketingHomeOne from '../components/digital-marketing-home-1'
import Digital_Product from '../components/about/digital-product'
import Team_Area_About_Inner from '../components/about/team-area-about-inner'
import Weekly_Meet from '../components/about/weekly-meet'
import Footer from '../components/shared/footer'
import Breadcrumb from '../components/shared/breadcrumb'
import Navbar from '../components/shared/navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb pageName="About Company" />
            <About_Area />
            <OfferHomeOne />
            <Marque_Area_Home_Two />
            <DigitalMarketingHomeOne />
            <Digital_Product />
            <Team_Area_About_Inner />
            <Weekly_Meet />
            <Footer />
        </>
    )
}
export default About
