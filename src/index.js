//Without ReactDom
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//  ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import './styles.css';  
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="/" />);
