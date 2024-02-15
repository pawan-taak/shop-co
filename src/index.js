import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './componets/header-footer/header';
import Footer from './componets/header-footer/footer';
import Hero from './componets/home/hero';
import Partner from './componets/home/partner';
import Browse from './componets/home/browse';
// import Data from './componets/main'
import Review from './componets/home/review';
import Arrival from './componets/home/arrival';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Partner />

    <Browse />
    <Arrival />
    {/* <Data /> */}
    <Review />
    <Footer />

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
