'use client';

import { createContext, useContext, useState } from 'react';

export const UserNameContext = createContext<any[]>([]);

export function UserNameContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState('John Doe');

  return (
    <UserNameContext.Provider value={[name, setName]}>
      {children}
    </UserNameContext.Provider>
  );
}

export function useUserNameContext() {
  return useContext(UserNameContext);
}
