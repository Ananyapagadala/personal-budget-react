import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import AboutPage from './AboutPage/AboutPage'
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer/>
      </Router>
  );
}

export default App;
