import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBVH9RF-GNx9aOZr6bxDOoNUwDkiLCL_6M",
   authDomain: "my-todo-a5bd2.firebaseapp.com",
   projectId: "my-todo-a5bd2",
   storageBucket: "my-todo-a5bd2.appspot.com",
   messagingSenderId: "696975526836",
   appId: "1:696975526836:web:bb2af56227809da96280e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);