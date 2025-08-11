import React from "react";
import "./App.css";

// Images
import heroImage from "./images/hero.jpg";
import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";
import chefSpecial from "./images/chef-special.jpg";

function App() {
  return (
    <div className="App">
      {/* Hero Banner */}
      <header className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay">
          <h1 className="hero-title animate-slideDown">Welcome to La Bella Vita</h1>
          <p className="hero-subtitle animate-fadeIn">Where Flavor Meets Elegance</p>
          <button className="hero-btn">Book a Table</button>
        </div>
      </header>

      {/* About Section */}
      <section className="about animate-fadeIn">
        <h2>About Us</h2>
        <p>
          At La Bella Vita, we serve exquisite dishes crafted with the freshest ingredients.
          Our chefs blend traditional recipes with modern culinary artistry to create
          unforgettable dining experiences.
        </p>
      </section>

      {/* Menu Section */}
      <section className="menu-section animate-slideUp">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          <div className="menu-card">
            <img src={food1} alt="Pasta" />
            <h3>Italian Pasta</h3>
            <p>Rich and creamy with a hint of basil.</p>
          </div>
          <div className="menu-card">
            <img src={food2} alt="Pizza" />
            <h3>Wood-Fired Pizza</h3>
            <p>Freshly baked with hand-picked toppings.</p>
          </div>
          <div className="menu-card">
            <img src={food3} alt="Dessert" />
            <h3>Chocolate Lava Cake</h3>
            <p>Warm, gooey, and utterly irresistible.</p>
          </div>
        </div>
      </section>

      {/* Chef's Special */}
      <section className="chef-special" style={{ backgroundImage: `url(${chefSpecial})` }}>
        <div className="chef-overlay animate-fadeIn">
          <h2>Chef’s Special</h2>
          <p>Grilled Salmon with Lemon Butter Sauce – a masterpiece of flavors.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials animate-slideUp">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>“Absolutely delightful experience! The ambiance is magical.”</p>
            <h4>- Sarah L.</h4>
          </div>
          <div className="testimonial-card">
            <p>“The food was out of this world. Will definitely come back!”</p>
            <h4>- Mark P.</h4>
          </div>
          <div className="testimonial-card">
            <p>“Best Italian cuisine I’ve ever tasted!”</p>
            <h4>- Emma W.</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact animate-fadeIn">
        <h2>Contact Us</h2>
        <p>📍 123 Culinary Street, Food City</p>
        <p>📞 +1 234 567 890</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 La Bella Vita Restaurant | Designed with ❤️ by Danish</p>
      </footer>
    </div>
  );
}

export default App;
