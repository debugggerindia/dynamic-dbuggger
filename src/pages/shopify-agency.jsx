import ImageWithTextComponent from '../components/shopify/image-with-text'
import ContactSection from '../components/shopify/shopify-contact-form'
import ShopifyServicesGrid from '../components/shopify/shopify-services-layout'
import ImageTextSection from '../components/shopify/shopify-image-with-text'
import RichTextSection from '../components/shopify/richtext-section'
import FAQSection from '../components/shopify/shopify-faqs-section'
import Footer from '../components/shared/footer'
import Navbar from '../components/shared/navbar'
import ShopifyBrandSlider from '../components/shopify/shopify-brand-slider'

const ShopifyAgency = () => {
    return (
        <>
            <Navbar />
            <ContactSection />
            <ShopifyBrandSlider />
            <ShopifyServicesGrid />
            <ImageTextSection />
            <RichTextSection />
            <FAQSection />
            {/* <ImageWithTextComponent /> */}
            <Footer />
        </>
    )
}
export default ShopifyAgency