import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import WelcomePage from "./components/WelcomePage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
       <div className="flex flex-col min-h-screen">
       <Navigation />
       <div className="flex-grow">
          <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
          </Routes>
          </div>
          <Footer />
    </div>
    </Router>
  );
}

export default App;