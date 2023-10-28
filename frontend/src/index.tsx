import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import 'animate.css/animate.min.css';
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route path='/' Component={VideoList} />
          <Route path='/new-video' Component={VideoForm} />
          <Route path='/update/:id' Component={VideoForm} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
