import React from 'react';
import './blur.css';
import FallingText from '../fallingtext/FallingText';

export default function Blur() {
    return (
        <div id="features" className="blur-container">
            {/* Left Card */}
            <div className="blur-card blur-card-left">
                <div className="blur-phone-container">
                    <img
                        src="https://play-lh.googleusercontent.com/9_i1E4C_TFDybWIUaLmcQI6I4TdilZ1l7UVkhLyO4W5aQP85ATUqFiqyhR2UIycSpraBeB283bB7EjYULem6K6g=w5120-h2880-rw"
                        alt="Mobile app interface"
                        className="blur-phone-image"
                    />
                </div>
            </div>

            {/* Right Card */}
            <div className="blur-card blur-card-right">
                <h3 className="blur-heading">Connect through shared adventures</h3>
                <p className="blur-text">
                    Finding the right partner is about shared passions and experiences.
                    Whether you love mountain hiking, exploring culinary scenes, or backpacking across Europe,
                    Orbies helps you find someone who matches your vibe.
                </p>

                <div style={{ flex: 1, position: 'relative', marginTop: '1rem', minHeight: '300px' }}>
                    <FallingText
                        text="Destinations Match Culture Explore Getaway Spark Dates Romance Vibe Adventures Travel Connection Passions Love"
                        trigger="scroll"
                        backgroundColor="transparent"
                        wireframes={false}
                        gravity={0.5}
                        mouseConstraintStiffness={0.2}
                    />
                </div>
            </div>
        </div>
    );
}
