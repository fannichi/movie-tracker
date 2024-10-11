import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      color="red"
      messages={['terrible', 'bad', 'okay', 'good', 'amazing']}
      defaultRating={3}
    /> */}
    <App />
  </React.StrictMode>
);
