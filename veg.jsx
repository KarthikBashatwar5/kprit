import "./veg.css";

function Veg() {
  const vegItems = [
    {
      name: "Paneer Butter Masala",
      price: 220,
      description: "Soft paneer cubes cooked in rich creamy tomato gravy.",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
    },
    {
      name: "Veg Biryani",
      price: 180,
      description: "Aromatic basmati rice with fresh vegetables and spices.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    },
    {
      name: "Masala Dosa",
      price: 100,
      description: "Crispy dosa served with potato masala and chutneys.",
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba4a7a2a3?w=600",
    },
    {
      name: "Veg Manchurian",
      price: 160,
      description: "Crispy vegetable balls tossed in spicy sauce.",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
    },
    {
      name: "Veg Fried Rice",
      price: 150,
      description: "Fried rice with fresh vegetables and aromatic spices.",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
    },
    {
      name: "Palak Paneer",
      price: 200,
      description: "Paneer cooked in a delicious spinach gravy.",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
    },
  ];

  return (
    <div className="veg-page">
      <div className="veg-header">
        <h1>Vegetarian Menu</h1>
        <p>Fresh ingredients. Delicious flavours. Made with love.</p>
      </div>

      <div className="veg-container">
        {vegItems.map((item, index) => (
          <div className="veg-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="veg-card-content">
              <h2>{item.name}</h2>
              <p>{item.description}</p>

              <div className="veg-card-bottom">
                <span className="veg-price">₹{item.price}</span>
                <button className="veg-button">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Veg;