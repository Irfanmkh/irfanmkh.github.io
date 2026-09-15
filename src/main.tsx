import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import { AIChatWidget } from './components/AIChatWidget';
import CONFIG from '../gitprofile.config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <GitProfile config={CONFIG} />
      <AIChatWidget />
    </>
  </React.StrictMode>,
);
