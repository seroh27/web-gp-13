import NavBar from './components/NavBar.tsx';
import HomePage from './components/pages/HomePage/HeroSection.tsx';
import RegistrationForm from './components/pages/RegisterPage/RegisterPage.tsx';
import LoginForm from './components/pages/LoginPage/LoginPage.tsx';
import AboutUs from './components/pages/AboutUs/AboutUs.tsx'
import UserPanel from './components/pages/UserPage/MyPanel.tsx';
import * as text from './text.json';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './components/pages/ContactUs/ContactUs.tsx';
import UserNavBar from './components/pages/UserPage/UserNavBar.tsx';
import EditInfoForm from './components/pages/UserPage/EditInfo.tsx';
import MealHistory from './components/pages/UserPage/MealHistory.tsx';
import CalorieCalc from './components/pages/UserPage/CalorieCalc.tsx';
import Recipe from './components/pages/UserPage/RecipePage/RecipePage.tsx';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<div>
                            <NavBar />
                            <HomePage BigTitle={text.HomePage.BigTitle} Description={text.HomePage.Description} />
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
                    <Route
                        path="/contact"
                        element={<div><NavBar /><ContactUs /></div>}
                    />
                    <Route
                        path="/panel"
                        element={<div><UserNavBar /><UserPanel /></div>}
                    />
                    <Route
                        path="/mealhistory"
                        element={<div><UserNavBar /><MealHistory /></div>}
                    />
                    <Route
                        path="/Recipe"
                        element={<div><UserNavBar /><Recipe /></div>}
                    />
                    <Route
                        path="/caloriecalc"
                        element={<div><UserNavBar /><CalorieCalc /></div>}
                    />
                    <Route
                        path="/editInfo"
                        element={<div><UserNavBar /><EditInfoForm /></div>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;