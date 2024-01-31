import NavBar from './components/NavBar.tsx';
import HomePage from './components/pages/HomePage/HeroSection.tsx';
import RegistrationForm from './components/pages/RegisterPage/RegisterPage.tsx';
import LoginForm from './components/pages/LoginPage/LoginPage.tsx';
import * as text from './text.json';
import { BrowserRouter as BrowserRouter, Routes , Route } from 'react-router-dom';

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
                        element={<RegistrationForm />}
                    />
                    <Route
                        path="/login"
                        element={<LoginForm />}
                    />
                </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;