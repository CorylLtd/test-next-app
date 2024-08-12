'use client';

import { useUserNameContext } from '../context/UserNameContext';

export default function ComponentD() {
  const [name] = useUserNameContext();
  return (
    <div className='border-4 border-solid border-blue-600 rounded-md p-10'>
      <h1>ComponentD</h1>
      <h2>{name}</h2>
    </div>
  );
}
