import React from 'react';

import { Button } from './components/Button'
import { Header } from './components/Header'

export default function App() {
  return (
    <div>
      <Header text='team-vt' />

      <Button 
        text='Botão'
        onClick={() => alert('Botão')}
      />
    </div>
  );
}
