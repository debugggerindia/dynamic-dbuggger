import React, { useState } from "react";

// FAQ data
const faqs = [
  {
    question: "How do I set up my Shopify store?",
    answer:
      "To set up your Shopify store, you need to sign up on the Shopify platform, choose a plan, and then customize your store's theme and settings. Shopify provides an easy-to-follow wizard to guide you through the initial setup process.",
  },
  {
    question: "What is Shopify Plus?",
    answer:
      "Shopify Plus is an enterprise-level version of Shopify, offering more customization options, advanced reporting, and enhanced support. It is ideal for large businesses with high-volume sales and complex needs.",
  },
  {
    question: "Can I migrate my store to Shopify?",
    answer:
      "Yes, you can migrate your store from other platforms like Magento, WooCommerce, or BigCommerce to Shopify. We provide full migration services to ensure a smooth transition without losing any data.",
  },
  {
    question: "How can I optimize my Shopify store for SEO?",
    answer:
      "To optimize your Shopify store for SEO, you should start by optimizing your product pages with relevant keywords, improving page speed, using structured data, and getting backlinks from high-authority websites.",
  },
  {
    question: "What are the benefits of using Shopify for e-commerce?",
    answer:
      "Shopify offers an easy-to-use platform with built-in tools for selling online, including payment gateways, secure hosting, inventory management, and marketing tools. It’s scalable and perfect for businesses of any size.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the section if it's already open
    } else {
      setOpenIndex(index); // Open the clicked section
    }
  };

  const styles = {
    section: {
      backgroundColor: "#000", // Dark background
      padding: "40px 20px",
      color: "#fff",
    },
    title: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    faqItem: {
      marginBottom: "15px",
      padding: "10px",
      border: "1px solid #333", // Dark border
      borderRadius: "5px",
    },
    faqQuestion: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "20px",
      cursor: "pointer",
    },
    faqAnswer: {
      marginTop: "10px",
      fontSize: "16px",
      padding: "0 20px",
      display: "block", // Keep it visible for transitions
      overflow: "hidden", // Hide content during transition
      maxHeight: openIndex !== null ? "500px" : "0", // Control max height for smooth transition
      transition: "max-height 0.5s ease-out, padding 0.5s ease-out", // Smooth transition effect
    },
    icon: {
      fontSize: "20px",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <div
            style={styles.faqQuestion}
            onClick={() => handleToggle(index)}
          >
            <span>{faq.question}</span>
            <span style={styles.icon}>
              {openIndex === index ? "-" : "+"}
            </span>
          </div>
          <div style={styles.faqAnswer}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQSection;
