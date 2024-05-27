import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>404 Not Found</h1>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}

export default NotFound;