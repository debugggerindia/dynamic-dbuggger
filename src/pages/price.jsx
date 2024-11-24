import PPCAgencyOne from '../components/ppc-agency-one'
import Plan_Area_Price from '../components/prices/plan-area-price'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'
import Navbar from '../components/shared/navbar'
const Price = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb pageName="Pricing Plan" />
            <Plan_Area_Price />
            <PPCAgencyOne />
            <Footer />
        </>
    )
}
export default Price
