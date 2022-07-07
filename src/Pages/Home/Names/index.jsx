import React, { useCallback, useEffect, useState } from 'react';
import '../../../styles.css';

import { api } from '../../../services/api';

function Names() {
  const [name, setName] = useState([]);

  const showNames = useCallback(async (e) => {
    const { data } = await api.get('/api');
    setName(data.results);
  }, []);

  useEffect(() => {
    showNames();
  }, [showNames]);

  return (
    <div className='main'>
      <ul className='list'>
        <h1 className='title'>Name</h1>
        {name.map((names) => {
          return (
            <li className='list-item' key={names.id}>
              {names.name.title} {names.name.first} {names.name.last}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Names;
