import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for carousel functionality

function ProfessionalCarousel() {
  // Define an array of slide image URLs
  const slides = [
    "https://tse4.mm.bing.net/th?id=OIP.84qlT6X-EI4ESb0v3PQmuAHaE8&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.O_OLFXzfof3c2qSlKF0BcQHaEK&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.AI_Uo4RYevXaqxwbQrPP6AHaFj&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.xrTxu6LHGUS3q9XnJSFWGwHaEw&pid=Api&P=0&h=180",
    "https://www.byrdie.com/thmb/iId5mlSb4DULMfttwcDgooW7mBk=/700x366/filters:fill(auto,1)/cdn.cliqueinc.com__cache__posts__241475__organic-beauty-products-241475-1510181428833-fb.700x0c-97f6fb8064a74b40a4a1696f7126d62b.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.y_znCLO89bvEXm0S_PXZewHaD5&pid=Api&P=0&h=180",
  ];

  return (
    <div className="carousel-container my-4">
      <div
        id="carouselExampleDark"
        className="carousel slide carousel-dark carousel-fade"
        data-bs-ride="carousel" // This ensures auto-slide functionality
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              key={index}
            ></button>
          ))}
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {slides.map((src, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={src}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Slide {index + 1}</h5>
                <p>
                  A professional caption for Slide {index + 1}, tailored for a polished design.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Previous and Next Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ProfessionalCarousel;
