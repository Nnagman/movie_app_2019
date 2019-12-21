import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const foodILike = [
  {
    id: 1,
    name: "Kimch",
    image: "image1",
    rating: 3
  },
  {
    id: 2,
    name: "ramne",
    image: "image2",
    rating: 5
  },
  {
    id: 3,
    name: "samgiopsal",
    image: "image3",
    rating: 4
  },
  {
    id: 4,
    name: "chukumi",
    image: "image4",
    rating: 2.5
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
