import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>
            Delicious Food,
            <span> Happy Moments!</span>
          </h1>

          <p>
            Discover mouth-watering vegetarian and non-vegetarian
            dishes prepared with fresh ingredients and authentic flavours.
          </p>

          <div className="home-buttons">
            <Link to="/veg" className="home-btn home-btn-primary">
              Explore Veg
            </Link>

            <Link to="/nonveg" className="home-btn home-btn-secondary">
              Explore Non-Veg
            </Link>
          </div>
        </div>

        <div className="home-hero-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
            alt="Delicious food"
          />
        </div>
      </section>

      {/* Special Section */}
      <section className="home-special">
        <h2>Why Choose Us?</h2>
        <p className="home-special-subtitle">
          Good food, great taste and unforgettable experiences.
        </p>

        <div className="home-features">
          <div className="home-feature-card">
            <div className="home-feature-icon">🍽️</div>
            <h3>Quality Food</h3>
            <p>
              We serve delicious food made using quality ingredients.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="home-feature-icon">🌿</div>
            <h3>Fresh Ingredients</h3>
            <p>
              Fresh ingredients bring the best taste to every dish.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="home-feature-icon">❤️</div>
            <h3>Made with Love</h3>
            <p>
              Every dish is prepared with care and passion for food.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Food Section */}
      <section className="home-popular">
        <h2>Our Popular Dishes</h2>

        <div className="home-popular-container">
          <div className="home-popular-card">
            <img
              src="https://images.unsplash.com/photo-1563379091339-03246963d51a?w=600"
              alt="Chicken Biryani"
            />
            <h3>Chicken Biryani</h3>
            <p>₹250</p>
          </div>

          <div className="home-popular-card">
            <img
              src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600"
              alt="Paneer Butter Masala"
            />
            <h3>Paneer Butter Masala</h3>
            <p>₹220</p>
          </div>

          <div className="home-popular-card">
            <img
              src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
              alt="Fried Rice"
            />
            <h3>Veg Fried Rice</h3>
            <p>₹150</p>
          </div>
        </div>

        <Link to="/veg" className="home-view-menu">
          View Full Menu
        </Link>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <h2>Good Food. Good Mood.</h2>
        <p>Thank you for visiting our food website!</p>
        <p>© 2026 All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;