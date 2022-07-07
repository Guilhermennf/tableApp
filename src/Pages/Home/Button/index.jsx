import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Button() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    return navigate('/modal');
  };

  return (
    <div className='main'>
      <button
        onClick={() => {
          handleClick();
        }}
        className='button'>
        Know more
      </button>
    </div>
  );
}

export default Button;
