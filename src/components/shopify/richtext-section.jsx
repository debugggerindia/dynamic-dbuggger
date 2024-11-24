import React from "react";

// JSON data for the rich text sections
const richTextSections = [
  {
    heading: "Why Choose Us?",
    content:
      "We provide world-class Shopify solutions that help businesses scale seamlessly. Our team of experts ensures your e-commerce store is equipped with the best features for optimal performance.",
  },
  {
    heading: "Our Expertise",
    content:
      "With years of experience in Shopify development, SEO optimization, and custom app creation, we are your one-stop shop for all Shopify needs. Let's build something extraordinary together.",
  },
  {
    heading: "Our Mission",
    content:
      "To empower brands to reach their potential through innovative Shopify solutions. We focus on providing sustainable and scalable e-commerce strategies.",
  },
];

const RichTextSection = () => {
  const styles = {
    section: {
      backgroundColor: "#121212", // Dark background
      color: "#f0f0f0", // Light text color
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    container: {
    //   maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#ffffff", // Bright white for headings
      textAlign: "center",
    },
    content: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#dcdcdc", // Softer white for body text
      textAlign: "center",
    },
    item: {
      backgroundColor: "#1e1e1e", // Slightly lighter background for each block
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow
    },
    divider: {
      width: "60px",
      height: "4px",
      backgroundColor: "#f0f0f0", // Accent color
      margin: "15px auto",
      borderRadius: "2px",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {richTextSections.map((section, index) => (
          <div key={index} style={styles.item}>
            <h2 style={styles.heading}>{section.heading}</h2>
            <div style={styles.divider}></div>
            <p style={styles.content}>{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RichTextSection;
