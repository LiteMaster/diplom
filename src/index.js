import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './media.css';
import { AppRoute } from './route';
import Header from "./components/header";
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <AppRoute/>
    <Footer/>
  </React.StrictMode>
);


