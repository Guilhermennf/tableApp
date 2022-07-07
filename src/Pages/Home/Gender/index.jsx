import React, { useCallback, useEffect, useState } from 'react';
import '../../../styles.css';

import { api } from '../../../services/api';

function Gender() {
  const [gender, setGender] = useState([]);

  const showGenders = useCallback(async () => {
    const { data } = await api.get('/api');
    setGender(data.results);
  }, []);

  useEffect(() => {
    showGenders();
  }, [showGenders]);

  return (
    <div className='main'>
      <ul className='list'>
        <h1 className='title'>Gender</h1>
        {gender.map((genders) => {
          return (
            <li className='list-item' key={genders.id}>
              {genders.gender}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gender;
