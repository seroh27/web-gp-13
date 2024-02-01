import React from 'react';
import NavBar from './components/NavBar.tsx';
import HomePage from './components/pages/HomePage/HeroSection.tsx';
import RegistrationForm from './components/pages/RegisterPage/RegisterPage.tsx';
import LoginForm from './components/pages/LoginPage/LoginPage.tsx';
import AboutUs from './components/pages/AboutUs/AboutUs.tsx'
import * as text from './text.json';
import { BrowserRouter as BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<div>
                          <NavBar />
                          <HomePage BigTitle={text.HomePage.BigTitle} Description={text.HomePage.Description}/>
                        </div>}
                    />
                    <Route
                        path="/register"
                        element={<div><NavBar /><RegistrationForm /></div>}
                        />
                    <Route
                        path="/login"
                        element={<div><NavBar /><LoginForm /></div>}
                    />
                                        <Route
                        path="/about-us"
                        element={<div><NavBar /><AboutUs /></div>}
                    />
                </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;