import React from 'react';
import './blur.css';

export default function Blur() {
    return (
        <div className="blur-container">
            {/* Left Card */}
            <div className="blur-card blur-card-left">
                <h3 className="blur-heading">The antidote to brain rot</h3>
                <p className="blur-text">
                    Reasonal brings ideas that actively engage your
                    brain, not pre-digested material for passive
                    consumption.
                </p>

                <div className="blur-phone-container">
                    {/* Placeholder for the phone mockup image */}
                    <img
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&h=1200&fit=crop"
                        alt="Mobile app interface"
                        className="blur-phone-image"
                    />
                </div>
            </div>

            {/* Right Card */}
            <div className="blur-card blur-card-right">
                <h3 className="blur-heading">Fundamental skills you'll use every day</h3>
                <p className="blur-text">
                    Critical thinking requires a collection of specific skills you apply in specific
                    situations. Nobody is born good at all of this, but all of it can be learned. That's
                    what Reasonal is for.
                </p>

                <div className="blur-pills-container">
                    <div className="blur-pill">Data Analysis</div>
                    <div className="blur-pill">Argument Evaluation</div>
                    <div className="blur-pill">Problem Solving</div>
                    <div className="blur-pill">Media Literacy</div>
                    <div className="blur-pill">Decision Making</div>
                    <div className="blur-pill">Logical Reasoning</div>
                </div>
            </div>
        </div>
    );
}
