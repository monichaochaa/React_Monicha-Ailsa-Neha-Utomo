import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage () {
    const navigate = useNavigate();
    return (
        <div>
        <header>
            <h1>Simple Header</h1>
        </header>

        <section>
            <h2>Better Solutions For Your Business</h2>
            <p>We are a team of talented designers making websites with Bootstrap</p>

            <button onClick={() => navigate("/create-product")}>Get Started</button>
            <button>Watch Video</button>

        <div>
            <img src="gambarlandingpage.png" alt="contoh" />   
        </div>
        </section>

        <section>
        <div className="newsletter">
            <h3>Join Our Newsletter</h3>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <input type="email" placeholder="Enter your email"/><br/>
            <button>Get Started</button>
        </div>
        <div className="footer">
          <p>&copy; Copyright 2024. All Rights Reserved.</p>
          <p>Designed by BootstrapMade</p>
        </div>
        </section>

        </div>
    );
};

export default LandingPage;
