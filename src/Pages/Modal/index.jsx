import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

import { api } from '../../services/api';

function Modal({ closeModal }) {
  const [modal, setModal] = useState([]);

  const showModals = useCallback(async () => {
    const { data } = await api.get('/api');
    setModal(data.results);
  }, []);

  useEffect(() => {
    showModals();
  }, [showModals]);

  const navigate = useNavigate();

  const handleBack = () => {
    return navigate('/');
  };

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='modalTitleCloseBtn'>
          <button onClick={() => handleBack()}> X </button>
        </div>
        {modal.map((modals) => {
          return (
            <li className='modalTitle' key={modals.id}>
              <div className='modalTitle'>
                <h1>
                  {modals.name.title} {modals.name.first}
                </h1>
              </div>
              <div className='modalImg'>
                <img src={modals.picture.large} />
              </div>
              <div className='modalCity'>
                <p>
                  Address: {modals.location.street.name},{' '}
                  {modals.location.street.number}
                </p>
              </div>
              <div className='modalEmail'>
                <p>E-mail: {modals.email}</p>
              </div>
              <div className='modalUsername'>
                <p>Username: {modals.login.username}</p>
              </div>

              <div className='modalFooter'>
                <button onClick={() => handleBack()} id='cancelBtn'>
                  Back
                </button>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Modal;
