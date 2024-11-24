import React from 'react'
import Navbar from '../components/shared/navbar'
import Footer from '../components/shared/footer'
import Breadcrumb from '../components/shared/breadcrumb'
import TeamDetailsCp from '../components/team/team-details-cp'

const TeamDetails = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb pageName="Team Details" />
            <TeamDetailsCp />
            <Footer />
        </>
    )
}

export default TeamDetails
