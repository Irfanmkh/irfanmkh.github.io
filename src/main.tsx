import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import { AIChatWidget } from './components/AIChatWidget';
import CONFIG from '../gitprofile.config'; // Pastikan path CONFIG sesuai (jika CONFIG ada di root folder)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Bungkus dengan Fragment (<>...</>) agar bisa merender dua komponen sekaligus */}
    <>
      <GitProfile config={CONFIG} />
      <AIChatWidget />
    </>
  </React.StrictMode>,
);