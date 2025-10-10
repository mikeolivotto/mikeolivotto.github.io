import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Fix for mobile viewport height issue
// Set CSS custom property for actual viewport height
const setViewportHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Set on load
setViewportHeight();

// Update on resize and orientation change
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);