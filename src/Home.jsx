import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ProfessionalCarousel from "./Components/ProfessionalCarousel";

function Home() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src="image\LOGOO.jpeg"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
            <span className="ms-2">ORGANIC GOODNESS</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  MENU
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/offers" className="nav-link">
                  OFFERS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/brands" className="nav-link">
                  BRANDS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mall" className="nav-link">
                  MALL
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <div className="search-section py-3">
        <nav className="navbar bg-light shadow-sm">
          <div className="container">
            <form className="d-flex w-100" role="search">
              <input
                className="form-control form-control-lg me-2"
                type="search"
                placeholder="Search for products, categories, or brands"
                aria-label="Search"
              />
              <button className="btn btn-primary btn-lg" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      {/* Cards Section */}
      <div className="row row-cols-1 row-cols-md-5 g-4 cards-row">
        {[ 
          { src: "https://tse2.mm.bing.net/th?id=OIP.6b7td02QuTa3Wv80QlbcmAHaEo&pid=Api&P=0&h=180", title: "MAKEUP" },
          { src: "https://tse1.mm.bing.net/th?id=OIP.ogVnICRMKukDPfhu16KxcwHaEk&pid=Api&P=0&h=180", title: "SKIN CARE" },
          { src: "https://tse1.mm.bing.net/th?id=OIP.qh3Oz98ylhFzsMdflKJthAHaDt&pid=Api&P=0&h=180", title: "HAIR CARE" },
          { src: "https://tse2.mm.bing.net/th?id=OIP.PBV8IucLeqtFf1CVeQ_-uQHaFc&pid=Api&P=0&h=180", title: "BATH & BODY" },
          { src: "https://tse2.mm.bing.net/th?id=OIP.Vj6jWZlD6TgucXp8PfWdOwHaFy&pid=Api&P=0&h=180", title: "FRAGRANCE" }
        ].map((card, index) => (
          <div className="col" key={index}>
            <div className="card card-container">
              <img
                src={card.src}
                className="card-img-top"
                alt={card.title}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
        <ProfessionalCarousel>

        </ProfessionalCarousel>
        {/* Cards Section */}
<div className="row row-cols-1 row-cols-md-5 g-4 cards-row">
  {[ 
    { src: "https://tse1.mm.bing.net/th?id=OIP.070CZXhX0j6_3B0viXNMVwHaFj&pid=Api&P=0&h=180", title: "ORGANIC ROSEY OIL FOR HAIR GROWTH" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.wYJTxelHWYOGmgDjbhj2rwHaFh&pid=Api&P=0&h=180", title: "LILY FACE CREAM FOR FACE BRIGHTNESS AND REDUCE THE PIGMENTATION" },
    { src: "https://tse4.mm.bing.net/th?id=OIP.8pS6RRUUEfikMoHJwQ7ChAHaHa&pid=Api&P=0&h=180", title: "ALOE VERA CREAM AND GEL FOR SKIN CORRECTNESS AND DRYNESS" },
    { src: "https://tse1.mm.bing.net/th?id=OIP.WPunfPn0K5S1nroznDHXvQHaE8&pid=Api&P=0&h=180", title: "ORGANIC ORANGE JUICE FOR BODY BOOST" },
    { src: "https://tse3.mm.bing.net/th?id=OIP.NjE_HCV4rAXTw17meAooxQHaEc&pid=Api&P=0&h=180", title: "ORGANIC GOODNESS FACE CREAM, HAIR OIL, SHAMPOO, BODY WASH, ETC..." }
  ].map((card, index) => (
    <div className="col" key={index}>
      <div className="card card-container h-100">
        <img
          src={card.src}
          className="card-img-top"
          alt={card.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{card.title}</h5>
        </div>
      </div>
    </div>
  ))}
</div>
<footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2025 ORGANIC GOODNESS. All Rights Reserved.</p>
        <ul className="list-unstyled d-flex justify-content-center">
          <li><a href="/privacy" className="text-white mx-3">Privacy Policy</a></li>
          <li><a href="/terms" className="text-white mx-3">Terms of Service</a></li>
          <li><a href="/contact" className="text-white mx-3">Contact Us</a></li>
        </ul>
      </div>
    </footer>

    
    </div>
  );
}

export default Home;
