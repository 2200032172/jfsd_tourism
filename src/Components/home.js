import React, { useState, useEffect } from 'react';
import './home.css'; // Include the CSS file

const HomePage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        { url: 'url("https://i0.wp.com/mindfulwonderer.com/wp-content/uploads/2021/01/best-travel-blogs-header.jpg?fit=1000%2C590&ssl=1")', text: '"Unwind and explore – travel the world your way!"' },
        { url: 'url("https://static.toiimg.com/photo/msid-90153850,width-96,height-65.cms")', text: '"Find your perfect getaway – feel at home anywhere!"' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Changes image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            {/* Transparent Navbar */}
            <nav className="navbar">
                <h1 className="navbar-title">Travel</h1>
                <ul>
                    <li><a href="#">Homestay</a></li>
                    <li><a href="#">Tourism</a></li>
                    <li><a href="#">Local Guide</a></li>
                </ul>
            </nav>

            {/* Image Slider Section */}
            <div className="image-slider" style={{ backgroundImage: images[currentImage].url }}>
                <div className="image-text">
                    <h2>{images[currentImage].text}</h2>
                </div>
            </div>

            {/* Search Container */}
            <div className="search-container">
                <input type="text" placeholder="Destination" />
                <input type="date" placeholder="Date" />
                <input type="text" placeholder="Homestays" />
                <button>Find Now</button>
            </div>

            {/* Holiday and Homestay Sections */}
            <section id="holiday" className="holiday-section">
                <h2>Choose Your Holiday</h2>
                <div className="places-container">
                    <div className="place-card circle-card">
                        <img src="https://example.com/place1.jpg" alt="Place 1" />
                        <div className="place-card-text">Mountain Escape</div>
                    </div>
                    <div className="place-card square-card">
                        <img src="https://example.com/place2.jpg" alt="Place 2" />
                        <div className="place-card-text">Beach Vibes</div>
                    </div>
                    <div className="place-card square-card">
                        <img src="https://example.com/place3.jpg" alt="Place 3" />
                        <div className="place-card-text">City Lights</div>
                    </div>
                </div>
            </section>

            <section id="homestays" className="homestay-section">
                <h2>Homestays</h2>
                <div className="places-container">
                    <div className="place-card square-card">
                        <img src="https://example.com/homestay1.jpg" alt="Homestay 1" />
                        <div className="place-card-text">Homestay 1</div>
                    </div>
                    <div className="place-card square-card">
                        <img src="https://example.com/homestay2.jpg" alt="Homestay 2" />
                        <div className="place-card-text">Homestay 2</div>
                    </div>
                    <div className="place-card circle-card">
                        <img src="https://example.com/homestay3.jpg" alt="Homestay 3" />
                        <div className="place-card-text">Homestay 3</div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="footer" className="footer">
                <p>&copy; 2024 Explore. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
