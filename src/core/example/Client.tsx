'use client';

import { useState } from 'react';

import { useAddActor } from './hook';

export default function Example() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const addActor = useAddActor();
  const handleAddActorClick = () => {
    addActor(firstName, lastName);
  };

  return (
    <div>
      <h2>Add Actor</h2>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <button onClick={handleAddActorClick}>Add Actor</button>
    </div>
  );
}
