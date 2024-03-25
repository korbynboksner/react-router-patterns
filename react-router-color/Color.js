import React from 'react';
import { Redirect } from 'react-router-dom';

const Color = ({ match, colors }) => {
  const { color } = match.params;
  if (!colors.includes(color)) {
    return <Redirect to="/colors" />;
  }
  return (
    <div>
      <h1 style={{ color: color }}>{color}</h1>
    </div>
  );
};

export default Color;