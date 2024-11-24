import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeOne from '../pages/home-1'

import HomeThree from '../pages/home-3'
import About from '../pages/about'
import Team from '../pages/team'
import Faq from '../pages/faq'
import Price from '../pages/price'
import NotFound from '../pages/notFound'
import Services from '../pages/services'

import HomeTwo from '../pages/home-2'
import Services_Details from '../pages/services-details'
import Blog_Grid from '../pages/blog-grid'
import Blog_Standart from '../pages/blog-standart'
import Blog_Details from '../pages/blog-details'
import Project_Grid from '../pages/project-grid'
import Project_Details from '../pages/project-details'
import Contact from '../pages/contact'
import TeamDetails from '../pages/team-details'
import ShopifyAgency from '../pages/shopify-agency'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeOne />,
        },
        {
            path: '/ppc-bugs',
            element: <HomeThree />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
            path: '/team',
            element: <Team />,
        },
        {
            path: '/team-details',
            element: <TeamDetails />,
        },
        {
            path: '/faq',
            element: <Faq />,
        },
        {
            path: '/price',
            element: <Price />,
        },

        {
            path: '/services',
            element: <Services />,
        },
        {
            path: '/seo-bugs',
            element: <HomeTwo />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
        {
            path: '/services-details',
            element: <Services_Details />,
        },
        {
            path: '/blog-grid',
            element: <Blog_Grid />,
        },
        {
            path: '/blog-standart',
            element: <Blog_Standart />,
        },
        {
            path: '/blog-details',
            element: <Blog_Details />,
        },
        {
            path: '/project-grid',
            element: <Project_Grid />,
        },
        {
            path: '/project-details',
            element: <Project_Details />,
        },
        {
            path: '/contact',
            element: <Contact />,
        },
        {
            path: '/shopify-agency',
            element: <ShopifyAgency />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Routes
