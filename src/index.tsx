import React from 'react';
import '../styles/main.css';
import { createRoot } from 'react-dom/client';
import Landing from './pages/landing';

function Index() {
  return (
    <React.StrictMode>
      <Landing />
    </React.StrictMode>
  );
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Index />);
