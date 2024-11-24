import React from 'react';
import '../../assets/custom.css'; // Ensure the path for the CSS file is correct
import imgImage1 from '../../assets/images/shopify/shopify-imgwtext1.jpg'; // Path to the first image
import imgImage2 from '../../assets/images/shopify/shopify-imgwtext1.jpg'; // Path to the second image
import imgImage3 from '../../assets/images/shopify/shopify-imgwtext1.jpg'; // Path to the third image

const sections = [
  {
    heading: "First Heading",
    text: "This is the first section's paragraph text. It provides some description for the first image.",
    imgSrc: imgImage1,
  },
  {
    heading: "Second Heading",
    text: "This is the second section's paragraph text. It provides some description for the second image.",
    imgSrc: imgImage2,
  },
  {
    heading: "Third Heading",
    text: "This is the third section's paragraph text. It provides some description for the third image.",
    imgSrc: imgImage3,
  }
];

const ImageWithTextComponent = () => {
  return (
    <div className="bugs-image-with-text-container">
      {sections.map((section, index) => (
        <div
          className={`bugs-image-with-text ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
          key={index}
        >
          {index % 2 === 0 ? (
            <>
              <div className="bugs-image-with-text__image-column">
                <img src={section.imgSrc} alt={`Section ${index + 1}`} style={{ maxWidth: '600px' }} />
              </div>
              <div className="bugs-image-with-text__text-column">
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </div>
            </>
          ) : (
            <>
              <div className="bugs-image-with-text__text-column">
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </div>
              <div className="bugs-image-with-text__image-column">
                <img src={section.imgSrc} alt={`Section ${index + 1}`} style={{ maxWidth: '600px' }} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageWithTextComponent;
