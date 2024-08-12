'use client';

import ComponentA from './components/ComponentA';
import React, { createContext, useState } from 'react';

export const UserNameContext = createContext('John Doe');

export default function Home() {
  const [name, setName] = useState('John Doe');
  return (
    <div className='p-10'>
      <h1 className='text-xl font-bold'>Context Demo</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border border-gray-400 p-2 my-8'
      />
      <UserNameContext.Provider value={name}>
        <ComponentA />
      </UserNameContext.Provider>
    </div>
  );
}
