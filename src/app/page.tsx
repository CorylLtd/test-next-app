'use client';

import ComponentA from './components/ComponentA';
import React from 'react';
import { useUserNameContext } from './context/UserNameContext';

export default function Home() {
  const [name, setName] = useUserNameContext();
  return (
    <div className='p-10'>
      <h1 className='text-xl font-bold'>Context Demo</h1>
      <span>Name: </span>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border border-gray-400 p-2 my-8'
      />
      <ComponentA />
    </div>
  );
}
