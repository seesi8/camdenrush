import logo from "./camden.jpg";
import camden from "./camden.jpg";
import camden2 from "./camden2.jpg";
import camden3 from "./camden3.jpg";
import camden4 from "./camden4.jpg";
import camden5 from "./camden5.jpg";
import "./App.css";
import React, { useState, useEffect } from "react";

const INERVAL = 2500;

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function App() {
    const photos = [camden, camden2, camden3, camden4, camden5];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, INERVAL);

        console.log(camden);
        return () => clearInterval(timer); // Cleanup on component unmount
    }, [photos.length, INERVAL]);

    return (
        <div className="App">
            <title>Camden</title>
            <header className="App-header">
                {photos.map((photo, index) => (
                    <img
                        key={photo}
                        src={photo}
                        alt={`Slide ${index}`}
                        style={{
                            filter: `drop-shadow(0 0 40px ${getRandomColor()})`, // Apply random drop shadow
                        }}
                        className={`slide ${
                            index === currentIndex ? "active" : ""
                        }`}
                    />
                ))}
                <h1>Meet Camden</h1>
            </header>
        </div>
    );
}

export default App;
