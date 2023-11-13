import React from 'react';
import PropTypes from 'prop-types';

type RestaurantProps = {
  name: string;
  address: string;
  rating: number;
  cuisineType: string;
  image: string;
};

const Restaurant: React.FC<RestaurantProps> = ({ name, address, rating, cuisineType, image }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <p><strong>Cuisine Type:</strong> {cuisineType}</p>
      <img src={image}/>
    </div>
  );
};

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cuisineType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Restaurant;
