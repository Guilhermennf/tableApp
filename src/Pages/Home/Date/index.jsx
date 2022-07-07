import React, { useCallback, useEffect, useState } from 'react';
import '../../../styles.css';

import { api } from '../../../services/api';

function Date() {
  const [date, setDate] = useState([]);

  const showDates = useCallback(async () => {
    const { data } = await api.get('/api');
    setDate(data.results);
  }, []);

  useEffect(() => {
    showDates();
  }, [showDates]);

  return (
    <div className='main'>
      <ul className='list'>
        <h1 className='title'>Date</h1>
        {date.map((date) => {
          return (
            <li className='list-item' key={date.id}>
              <span>{date.dob.age} years old</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Date;
