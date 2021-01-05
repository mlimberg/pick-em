import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import firebase from "firebase/app"

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyCrS67BGXyNSyTWpsdIywNdVitdq4c4oJA",
  authDomain: "pick-em-84728.firebaseapp.com",
  projectId: "pick-em-84728",
  storageBucket: "pick-em-84728.appspot.com",
  messagingSenderId: "824991913675",
  appId: "1:824991913675:web:34bf4d14d83b3d0a68ad4e"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
