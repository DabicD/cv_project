import React from 'react';
import ReactDOM from 'react-dom/client';

import LandingPage from './pages/landing-page/LandingPage';

function App() {
  return <LandingPage />;
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);