import React from 'react';

const DogDetails = ({ match, dogs }) => {
  const { name } = match.params;
  const dog = dogs.find(dog => dog.name === name);
  if (!dog) return <Redirect to="/dogs" />; // Redirect if dog not found

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;