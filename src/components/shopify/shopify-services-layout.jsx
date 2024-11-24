import React, { useState } from "react";

// Services data with description
const services = [
    {
      icon: "🔧",
      title: "Shopify Theme Tweaks & Changes",
      description:
        "We provide quick and efficient tweaks to your Shopify theme, ensuring your store runs smoothly and looks great. Whether you need minor adjustments or major improvements, we are here to help.",
      fullDescription:
        "Our Shopify theme tweaks include customizations for layout, design, functionality, and more. We focus on delivering a user-friendly experience and a visually appealing design. Get in touch with us to explore the best ways to enhance your Shopify store.",
    },
    {
      icon: "🖋️",
      title: "Complete Redesign or Store Facelift",
      description:
        "If your store is outdated or you want a new look, we offer a full redesign of your Shopify store, ensuring a fresh and modern design that aligns with your brand.",
      fullDescription:
        "From logo design to product pages, our team will help you reinvent your brand identity with a full store redesign. We combine aesthetics and usability to create a seamless shopping experience for your customers.",
    },
    {
      icon: "📈",
      title: "Shopify SEO & Content Marketing",
      description:
        "We help you optimize your Shopify store for search engines, improving visibility and driving organic traffic to your store. Our content marketing strategies engage your target audience.",
      fullDescription:
        "Our Shopify SEO services include keyword research, on-page optimization, and link building to boost your store's rankings. Additionally, we offer content marketing strategies to help you create valuable content that resonates with your audience.",
    },
    {
      icon: "🌍",
      title: "Shopify Plus Support & Services",
      description:
        "Shopify Plus offers advanced features for high-growth businesses. We provide expert support to ensure your store operates at its highest potential.",
      fullDescription:
        "Our Shopify Plus services cover everything from setup to ongoing support, helping you leverage the powerful features of Shopify Plus. We assist with migration, custom development, and scaling your business for growth.",
    },
    {
      icon: "📆",
      title: "Monthly Shopify Support Retainers",
      description:
        "Stay on top of your store's needs with our monthly support retainers. We ensure your Shopify store runs smoothly and any issues are promptly addressed.",
      fullDescription:
        "Our monthly support retainers cover a variety of services, from theme updates and troubleshooting to ongoing performance optimization. You can rely on us to manage your Shopify store's maintenance on a continuous basis.",
    },
    {
      icon: "💻",
      title: "Custom Shopify Development",
      description:
        "We provide custom development solutions for your Shopify store, helping you add unique features and enhance your store's functionality.",
      fullDescription:
        "From custom apps and integrations to advanced Shopify API development, we offer a wide range of custom solutions to meet your store's unique needs. Whether it's enhancing user experience or adding new capabilities, we can help.",
    },
    {
      icon: "🚀",
      title: "Migration to Shopify - Support & Planning",
      description:
        "Migrating to Shopify is a big decision, and we provide expert support throughout the planning and implementation phases to ensure a seamless transition.",
      fullDescription:
        "Our migration services help you smoothly transition from your current platform to Shopify, ensuring that all data, products, and settings are transferred with no disruptions to your business. We assist with pre-migration planning and post-migration support.",
    },
    {
      icon: "🔍",
      title: "Shopify Audits & Consultancy",
      description:
        "We perform detailed audits of your Shopify store to identify areas of improvement. Our consultancy services provide actionable insights to enhance performance and conversions.",
      fullDescription:
        "Our audits include a deep dive into your store’s design, user experience, performance, and SEO. Based on our findings, we offer tailored recommendations to optimize your store and help it perform better. Our consultancy service ensures that you’re on the right track.",
    },
    {
      icon: "📱",
      title: "Custom Shopify App Development",
      description:
        "Our team develops custom Shopify apps tailored to your business needs. Whether you need a small functionality tweak or a complex custom app, we can help.",
      fullDescription:
        "We build Shopify apps that enhance your store's features, automate processes, and integrate with other tools. Our custom apps are designed to improve your Shopify store’s functionality and support your business growth.",
    },
    {
      icon: "📊",
      title: "Paid Advertising & Data Feeds",
      description:
        "We assist with paid advertising campaigns and data feeds to drive traffic and sales to your Shopify store. From Google Ads to Facebook campaigns, we’ve got you covered.",
      fullDescription:
        "Our team manages paid advertising campaigns across various platforms, ensuring that your ads reach the right audience. We also handle product feeds, ensuring that your data is optimized for platforms like Google Shopping and Facebook Ads.",
    },
    {
      icon: "🎨",
      title: "Custom Shopify Theme Development",
      description:
        "We create custom Shopify themes that align with your brand and business goals. Whether you need a completely new design or customizations to an existing theme, we are experts in Shopify theme development.",
      fullDescription:
        "Our custom Shopify themes are designed to deliver an outstanding user experience while aligning with your brand identity. We ensure that the theme is responsive, fast, and optimized for SEO, providing a seamless shopping experience across devices.",
    },
    {
      icon: "🎭",
      title: "Logo & Branding",
      description:
        "We provide comprehensive branding services, including logo design, brand strategy, and identity creation to help your business stand out.",
      fullDescription:
        "Our logo and branding services are designed to help you build a memorable brand identity. From logo design to full brand strategy, we work with you to ensure that your brand communicates the right message to your target audience.",
    },
  ];
  

// Customizable grid settings
const GRID_COLUMNS = {
  desktop: 3, // 3 columns on large screens
  tablet: 2, // 2 columns on medium screens
  mobile: 1, // 1 column on mobile screens
};

const CARD_DIMENSIONS = {
  width: "100%", // Full width for responsiveness
  height: "300px", // Card height
};

const ShopifyServicesGrid = () => {
  const [activeService, setActiveService] = useState(null); // Track the active service for the modal

  const styles = {
    section: {
      backgroundColor: "#000", // Dark background
      padding: "40px 20px",
    },
    title: {
      textAlign: "center",
      color: "#fff", // White text
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    grid: {
      display: "grid",
      gap: "20px",
      gridTemplateColumns: `repeat(${GRID_COLUMNS.mobile}, 1fr)`, // Default to mobile grid
    },
    gridTablet: {
      gridTemplateColumns: `repeat(${GRID_COLUMNS.tablet}, 1fr)`, // Tablet grid
    },
    gridDesktop: {
      gridTemplateColumns: `repeat(${GRID_COLUMNS.desktop}, 1fr)`, // Desktop grid
    },
    card: {
      backgroundColor: "#121212", // Dark gray card background
      width: CARD_DIMENSIONS.width,
      height: CARD_DIMENSIONS.height,
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)", // Subtle shadow
      transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s, color 0.3s",
    },
    cardHover: {
      transform: "translateY(-5px)", // Hover effect
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.6)",
      backgroundColor: "red", // Change background on hover
      color: "white", // Change text color on hover
    },
    icon: {
      fontSize: "40px", // Icon size
      marginBottom: "15px",
    },
    cardTitle: {
      fontSize: "18px",
      color: "#fff", // White text
      fontWeight: "bold",
      marginBottom: "10px",
    },
    description: {
      color: "#fff",
      fontSize: "14px",
      marginBottom: "10px",
    },
    button: {
      color: "#fff",
      backgroundColor: "#000",
      border: "1px solid #fff",
      padding: "5px 10px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    modal: {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: activeService ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      zIndex: "1000",
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "500px",
      width: "100%",
    },
    closeButton: {
      color: "#fff",
      backgroundColor: "red",
      border: "none",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "5px",
      marginTop: "10px",
    },
  };

  // Determine grid styles based on screen width
  const getGridStyle = () => {
    if (window.innerWidth >= 1024) {
      return styles.gridDesktop;
    } else if (window.innerWidth >= 768) {
      return styles.gridTablet;
    }
    return styles.grid;
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Shopify Services</h1>
      <div style={{ ...styles.grid, ...getGridStyle() }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              e.currentTarget.style.backgroundColor = styles.cardHover.backgroundColor;
              e.currentTarget.style.color = styles.cardHover.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.color = "";
            }}
          >
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.description}>{service.description}</p>
            <button
              style={styles.button}
              onClick={() => setActiveService(service)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {activeService && (
        <div style={styles.modal} onClick={() => setActiveService(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>{activeService.title}</h3>
            <p>{activeService.fullDescription}</p>
            <button style={styles.closeButton} onClick={() => setActiveService(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShopifyServicesGrid;
