import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { initialState } from "./reducer";
import reducer from './reducer';
import { StateProvider } from "./StateProvider"; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// Manually unregister service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();
  });
}
