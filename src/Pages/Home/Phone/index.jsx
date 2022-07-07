import React, { useCallback, useEffect, useState } from 'react';
import '../../../styles.css';

import { api } from '../../../services/api';

function Phone() {
  const [phone, setPhone] = useState([]);

  const showPhones = useCallback(async () => {
    const { data } = await api.get('/api');
    setPhone(data.results);
  }, []);

  useEffect(() => {
    showPhones();
  }, [showPhones]);

  return (
    <div className='main'>
      <ul className='list'>
        <h1 className='title'>Phone</h1>
        {phone.map((phones) => {
          return (
            <li className='list-item' key={phones.id}>
              {phones.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Phone;
