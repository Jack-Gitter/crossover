import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Baseball from './content/baseball';
import Football from './content/football';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        <App />
        <Routes>
            <Route path="football" element={<Football/>}/>
            <Route path="baseball" element={<Baseball/>}/>
        </Routes>
      </BrowserRouter>
);

reportWebVitals();
