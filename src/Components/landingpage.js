import React, { useState, useEffect } from 'react';
import './landingpage.css'; // Include the CSS file

const LandingPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        { url: 'url("https://i0.wp.com/mindfulwonderer.com/wp-content/uploads/2021/01/best-travel-blogs-header.jpg?fit=1000%2C590&ssl=1")', text: '"Wander far, explore near – every journey tells a story!"' },
        { url: 'url("https://cdn.shopify.com/s/files/1/0611/0003/2208/files/wisteria_2048x2048.jpg?v=1688652348")', text: '"Feel at home, wherever you roam – your perfect stay awaits!"' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Changes image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing-page">
            {/* Transparent Navbar */}
            <nav className="navbar">
                <h1 className="navbar-title">Travel</h1>
                <ul>
                    <li><a href="login">Login</a></li>
                    
                </ul>
            </nav>

            {/* Image Slider Section */}
            <div className="image-slider" style={{ backgroundImage: images[currentImage].url }}>
                {/* Text Overlay */}
                <div className="image-text">
                    <h2>{images[currentImage].text}</h2>
                </div>
            </div>

            {/* The rectangular search container below the images */}
            <div className="search-container">
                <input type="text" placeholder="Destination" />
                <input type="date" placeholder="Date" />
                <input type="text" placeholder="Homestays" />
                <button><a href="login">Find Now</a></button>
            </div>

            {/* Choose Your Holiday and Homestay Section */}
            <section id="holiday" className="holiday-section">
  <h2>Choose Your Holiday</h2>
  <div className="places-container">
    {/* First Row: Circle and Two Squares */}
    <div className="place-card circle-card">
      <img src="https://s3.india.com/wp-content/uploads/2024/04/Feature-Image-_-pondicherry.jpg" alt="Place 1" />
      <div className="place-card-text">PONDICHERRY</div>
    </div>
    <div className="place-card square-card">
      <img src="https://dynamic.tourtravelworld.com/package-images/photo-big/dir_17/493059/331169.jpg" alt="Place 2" />
      <div className="place-card-text">Beach</div>
    </div>
    <div className="place-card square-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYJnPBg4Oy08d5yVos6dc28Hw0SaAKN5ZDw&s" alt="Place 3" />
      <div className="place-card-text">french colony</div>
    </div>
  </div>

  <div className="places-container">
    {/* Second Row: Two Squares and One Circle */}
    <div className="place-card square-card">
      <img src="https://static.toiimg.com/photo/56293281.cms" alt="Place 4" />
      <div className="place-card-text">Eiffel Tower</div>
    </div>
    <div className="place-card square-card">
      <img src="https://landenkerr.com/wp-content/uploads/2020/04/walk-through-tuileries-garden-spring-featured.jpeg" alt="Place 5" />
      <div className="place-card-text">Tuileries Garden</div>
    </div>
    <div className="place-card circle-card">
      <img src="https://paristickets.tours/wp-content/uploads/2022/09/paris-at-spring.webp" alt="Place 6" />
      <div className="place-card-text">PARIS</div>
    </div>
  </div>
</section>



            <section id="homestays" className="homestay-section">
                <h2>Homestays</h2>
                <div className="places-container">
                    <div className="place-card">
                    <img src="https://static.toiimg.com/photo/msid-100297327,width-96,height-65.cms" alt="Place 6" />
                    <div className="place-card-text">Mountain Paradise</div>
                    </div>
                    <div className="place-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmoTQO2S2O7tErZLm24jQFIaroBwZAZSdqw&s" alt="Place 6" />
                    <div className="place-card-text">Oak Cottage</div>
                    </div>
                    <div className="place-card">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/480390646.jpg?k=918dd289c71b691f1ecf047ecac5ed167700d52cb09960aa7be77851a37a45bf&o=&hp=1" alt="Place 6" />
                    <div className="place-card-text">Driftwood Villa</div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="footer" className="footer">
                <p>&copy; 2024 Travel. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
