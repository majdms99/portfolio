import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModeProvider } from './Context/Mode';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModeProvider>
    <App />
  </ModeProvider>
);