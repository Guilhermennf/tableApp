import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Button() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    return navigate('/modal');
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
        className='button'>
        About
      </button>
    </div>
  );
}

export default Button;
