import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import autoplay styles
import "swiper/css/free-mode"; // Import free mode styles

// Import Swiper modules
import { Autoplay, FreeMode } from "swiper/modules";

const ShopifyBrandSlider = () => {
  // JSON configuration for slides
  const slides = [
    {
      image: "https://via.placeholder.com/300x200?text=Slide+1",
      title: "Slide 1",
      description: "This is the description for slide 1",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Slide+2",
      title: "Slide 2",
      description: "This is the description for slide 2",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Slide+3",
      title: "Slide 3",
      description: "This is the description for slide 3",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Slide+4",
      title: "Slide 4",
      description: "This is the description for slide 4",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Slide+5",
      title: "Slide 5",
      description: "This is the description for slide 5",
    },
  ];

  return (
    <section
      className="shopify-brand-slider"
      style={{
        backgroundColor: "#000", // Black background
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#fff", // White text
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Shopify Brand Slider
      </h1>
      <Swiper
        modules={[Autoplay, FreeMode]} // Enable autoplay and free mode
        autoplay={{
          delay: 0, // Set delay to 0 for continuous autoplay
          disableOnInteraction: false, // Ensure autoplay continues after interaction
        }}
        freeMode={true} // Enable free mode for smooth, continuous scrolling
        speed={5000} // Adjust speed for smooth sliding (higher = slower)
        loop={true} // Enable looping for infinite sliding
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "30px" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "#121212", // Dark gray card background
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)", // Subtle shadow for depth
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              {slide.title && (
                <h3
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    color: "#fff", // White text
                    fontWeight: "bold",
                  }}
                >
                  {slide.title}
                </h3>
              )}
              {slide.description && (
                <p
                  style={{
                    fontSize: "14px",
                    color: "#aaa", // Lighter gray for description
                  }}
                >
                  {slide.description}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ShopifyBrandSlider;
