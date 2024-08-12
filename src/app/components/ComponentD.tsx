'use client';

import { useContext } from 'react';
import { UserNameContext } from '../page';

export default function ComponentD() {
  const name = useContext(UserNameContext);
  return (
    <div className='border-4 border-solid border-blue-600 rounded-md p-10'>
      <h1>ComponentD</h1>
      <h2>{name}</h2>
    </div>
  );
}
