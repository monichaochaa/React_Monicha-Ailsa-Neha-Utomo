import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import WelcomePage from "./components/WelcomePage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
       <div className="flex flex-col min-h-screen">
       <Navigation />
       <div className="flex-grow">
          <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          </div>
          <Footer />
    </div>
    </Router>
  );
}

export default App;