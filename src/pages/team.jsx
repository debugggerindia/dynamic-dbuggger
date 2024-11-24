import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'
import Navbar from '../components/shared/navbar'
import Team_Member_Area from '../components/team/team-member-area'

const Team = () => {
    return (
        <div>
            <Navbar />
            <Breadcrumb pageName="Team" />
            <Team_Member_Area />
            <Footer />
        </div>
    )
}
export default Team
