import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Dynamically add fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Add custom styles for fonts
const style = document.createElement('style');
style.textContent = `
  h1, h2, h3, h4, .font-serif {
    font-family: 'Playfair Display', serif !important;
  }
  body, .font-sans {
    font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
  }
  html {
    scroll-behavior: smooth;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);