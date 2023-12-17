import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function RestaurantInfo({ name, address, rating, cuisine, image }) {
  const [editable, setEditable] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedAddress, setEditedAddress] = useState(address);
  const [editedRating, setEditedRating] = useState(rating);
  const [editedCuisine, setEditedCuisine] = useState(cuisine);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    setEditable(false);
  };

  return (
    <div>
      <Link href={`/login`}>Login page (task 2)</Link>

      {editable ? (
        <div>
          <label>
            Name:
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={editedAddress}
              
              onChange={(e) => setEditedAddress(e.target.value)}
            />
          </label>
          <label>
            Rating:
            <input
              type="number"
              value={editedRating}
              onChange={(e) => setEditedRating(e.target.value)}
            />
          </label>
          <label>
            Cuisine:
            <input
              type="text"
              value={editedCuisine}
              onChange={(e) => setEditedCuisine(e.target.value)}
            />
          </label>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{editedName}</h2>
          <p>Address: {editedAddress}</p>
          <p>Rating: {editedRating}</p>
          <p>Cuisine: {editedCuisine}</p>
          <img src="kluberg.jpg"/>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

RestaurantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cuisine: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RestaurantInfo;