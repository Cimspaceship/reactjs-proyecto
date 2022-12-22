import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom"
import {router} from "./router"
import { CartContextProvider } from './context/cartContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9bHRo5s8OrmuIbYEHQKP5-_ULk_7q8q0",
  authDomain: "galactic-empire-store.firebaseapp.com",
  projectId: "galactic-empire-store",
  storageBucket: "galactic-empire-store.appspot.com",
  messagingSenderId: "1030162295303",
  appId: "1:1030162295303:web:123defe0af8e018eed58a2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
    <RouterProvider router={router}/>
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
