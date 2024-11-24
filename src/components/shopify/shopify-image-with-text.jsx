import React from "react";

// JSON data for the sections
const sections = [
  {
    title: "Shopify Website",
    description:
      "Founded in 2004, Origin Coffee is a sustainable coffee brand. We launched their site on Shopify 2.0 and supercharged their subscription business with unique integrations, improving sales by 23% in the first month after launch.",
    buttonText: "View Case Study",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with your image URL
  },
  {
    title: "Oliver Sweeney: Shopify Migration",
    description:
      "Migrating to Shopify Plus from Magento and designing a brand-new store without disrupting our e-commerce presence was a huge undertaking. The results have been brilliant.",
    buttonText: "View Case Study",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with your image URL
  },
  {
    title: "Shopify Website",
    description:
      "Founded in 2004, Origin Coffee is a sustainable coffee brand. We launched their site on Shopify 2.0 and supercharged their subscription business with unique integrations, improving sales by 23% in the first month after launch.",
    buttonText: "View Case Study",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with your image URL
  },
  {
    title: "Oliver Sweeney: Shopify Migration",
    description:
      "Migrating to Shopify Plus from Magento and designing a brand-new store without disrupting our e-commerce presence was a huge undertaking. The results have been brilliant.",
    buttonText: "View Case Study",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with your image URL
  },
  // Add more sections as needed
];

const ImageTextSection = () => {
  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      backgroundColor: "#121212", // Dark background
      color: "#f0f0f0", // Light text color
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      width: "100%",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: "40px",
    },
    rowMobile: {
      flexDirection: "column", // Mobile: Single column layout
    },
    rowDesktop: (isEven) => ({
      flexDirection: isEven ? "row" : "row-reverse", // Desktop: Alternating layout
    }),
    textContainer: {
      flex: "1",
      padding: "10px",
      textAlign: "left",
    },
    imageContainer: {
      flex: "1",
      padding: "10px",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
      objectFit: "cover",
      filter: "brightness(0.9)", // Slightly darken images for dark theme
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#fff", // White text for titles
    },
    description: {
      fontSize: "16px",
      lineHeight: "1.5",
      marginBottom: "20px",
      color: "#dcdcdc", // Slightly lighter text for description
    },
    button: {
      display: "inline-block",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#121212", // Dark text
      backgroundColor: "#f0f0f0", // Light button
      textDecoration: "none",
      border: "2px solid #f0f0f0",
      padding: "10px 20px",
      borderRadius: "5px",
      transition: "background-color 0.3s, color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#fff", // Brighter hover effect
      color: "#121212", // Dark text
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              ...styles.row,
              ...(window.innerWidth < 768
                ? styles.rowMobile // Mobile: Single column layout
                : styles.rowDesktop(index % 2 === 0)), // Desktop: Alternating
            }}
          >
            <div style={styles.textContainer}>
              <h2 style={styles.title}>{section.title}</h2>
              <p style={styles.description}>{section.description}</p>
              <a
                href="#"
                style={styles.button}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
                  e.target.style.color = styles.buttonHover.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = styles.button.backgroundColor;
                  e.target.style.color = styles.button.color;
                }}
              >
                {section.buttonText}
              </a>
            </div>
            <div style={styles.imageContainer}>
              <img
                src={section.imageUrl}
                alt={section.title}
                style={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageTextSection;
