import "./aboutus.css";

function AboutUs() {
  return (
    <div className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Our passion for food brings people together.</p>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900"
            alt="Delicious food"
          />
        </div>

        <div className="about-story-content">
          <h2>Our Story</h2>

          <p>
            Welcome to our food website, where great taste meets quality.
            We believe food is more than just a meal. It is an experience
            that brings happiness, memories and people together.
          </p>

          <p>
            Our goal is to serve delicious vegetarian and non-vegetarian
            dishes prepared with fresh ingredients and authentic flavours.
          </p>

          <p>
            From traditional favourites to modern dishes, we aim to make
            every meal special for our customers.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="about-mission">
        <div className="about-mission-card">
          <h2>Our Mission</h2>
          <p>
            To provide delicious food, excellent quality and a memorable
            dining experience for everyone who visits us.
          </p>
        </div>

        <div className="about-mission-card">
          <h2>Our Vision</h2>
          <p>
            To become a favourite destination for food lovers by delivering
            great taste, quality and customer satisfaction.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <h2>Our Values</h2>

        <div className="about-values-container">
          <div className="about-value-card">
            <h3>🌱 Quality</h3>
            <p>We believe quality ingredients make quality food.</p>
          </div>

          <div className="about-value-card">
            <h3>❤️ Passion</h3>
            <p>We prepare every dish with love and dedication.</p>
          </div>

          <div className="about-value-card">
            <h3>😊 Happiness</h3>
            <p>We want every customer to leave with a smile.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <h2>Thank You!</h2>
        <p>We appreciate your love and support.</p>
        <p>© 2026 All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default AboutUs;