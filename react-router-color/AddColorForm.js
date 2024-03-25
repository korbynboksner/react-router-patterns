import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddColorForm = ({ addColor }) => {
  const [newColor, setNewColor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(newColor);
    history.push('/colors');
  };

  return (
    <div>
      <h1>Add New Color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
          required
        />
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default AddColorForm;