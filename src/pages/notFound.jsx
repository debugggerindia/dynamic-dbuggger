import { asset } from '../assets/assets'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'
import RevelImageAnimation from '../components/shared/gsap/reveal-image'
import Navbar from '../components/shared/navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb pageName="404" />
            <section className="error-area">
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="error-area-shep-1 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="error-area-shep-2 blur-1"
                />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <RevelImageAnimation
                                image={asset.notFound_png}
                                className="error-pic vre-reveal-one"
                            />
                        </div>
                    </div>
                    <div className="error-wrapper">
                        <h4 className="font-size-1-48 split-collab">
                            Oops! Nothing Was Found
                        </h4>

                        <p className="font-size-1-16">
                            Sed ut perspiciatis unde omnis iste natus voluptatem
                            accusantium doloremque
                            <br />
                            laudantium totam aperiame eaque abillo inventore
                            veritatis
                        </p>

                        <div className="error-input">
                            <form action="#">
                                <input type="text" placeholder="Keywords" />
                                <input type="submit" value="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </>
    )
}
export default NotFound
