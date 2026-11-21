import "./nonveg.css";

function NonVeg() {
  const nonVegItems = [
    {
      name: "Chicken Biryani",
      price: 250,
      description: "Classic dum biryani with tender chicken and basmati rice.",
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=600",
    },
    {
      name: "Chicken 65",
      price: 220,
      description: "Spicy and crispy fried chicken with Indian flavours.",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    },
    {
      name: "Butter Chicken",
      price: 280,
      description: "Tender chicken in a creamy tomato and butter gravy.",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    },
    {
      name: "Chicken Fried Rice",
      price: 200,
      description: "Delicious fried rice tossed with chicken and vegetables.",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    },
    {
      name: "Mutton Biryani",
      price: 320,
      description: "Rich aromatic biryani prepared with tender mutton.",
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=600",
    },
    {
      name: "Chicken Tikka",
      price: 240,
      description: "Grilled chicken marinated in traditional Indian spices.",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600",
    },
  ];

  return (
    <div className="nonveg-page">
      <div className="nonveg-header">
        <h1>Non-Vegetarian Menu</h1>
        <p>Delicious dishes prepared with authentic flavours.</p>
      </div>

      <div className="nonveg-container">
        {nonVegItems.map((item, index) => (
          <div className="nonveg-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="nonveg-card-content">
              <h2>{item.name}</h2>
              <p>{item.description}</p>

              <div className="nonveg-card-bottom">
                <span className="nonveg-price">₹{item.price}</span>
                <button className="nonveg-button">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVeg;