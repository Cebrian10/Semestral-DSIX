import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}

export default About;
