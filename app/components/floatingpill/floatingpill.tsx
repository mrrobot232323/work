import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './floatingpill.css';

const TRAVEL_PHRASES = [
    "Matching in Tokyo...",
    "Finding traveler in Paris...",
    "Next stop: Bali with Sarah",
    "Connected in Rome!",
    "Exploring London together",
    "Match found in New York!",
    "Flying to Sydney with Mike",
    "Adventure awaits in Tulum"
];

export default function FloatingPill() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pillRef = useRef<HTMLDivElement>(null);
    const [currentText, setCurrentText] = useState(TRAVEL_PHRASES[0]);
    const phraseIndex = useRef(0);

    useEffect(() => {
        const pill = pillRef.current;
        const container = containerRef.current;
        if (!pill || !container) return;

        // Configuration
        const speed = 2.0;
        let dx = (Math.random() > 0.5 ? 1 : -1) * speed;
        let dy = (Math.random() > 0.5 ? 1 : -1) * speed;

        // Initial position safely inside content area
        let x = container.clientWidth / 2;
        let y = container.clientHeight / 2;

        const update = () => {
            if (!pill || !container) return;

            // Use offsetWidth for accurate pixel dimensions
            const cw = container.offsetWidth;
            const ch = container.offsetHeight;
            const pw = pill.offsetWidth;
            const ph = pill.offsetHeight;

            // Update position
            x += dx;
            y += dy;

            let hit = false;

            // Strict Bounce and clamp X
            if (x <= 0) {
                x = 0;
                dx = Math.abs(dx);
                hit = true;
            } else if (x + pw >= cw) {
                x = cw - pw;
                dx = -Math.abs(dx);
                hit = true;
            }

            // Strict Bounce and clamp Y
            if (y <= 0) {
                y = 0;
                dy = Math.abs(dy);
                hit = true;
            } else if (y + ph >= ch) {
                y = ch - ph;
                dy = -Math.abs(dy);
                hit = true;
            }

            if (hit) {
                // Change text ONLY on boundary hit
                phraseIndex.current = (phraseIndex.current + 1) % TRAVEL_PHRASES.length;
                setCurrentText(TRAVEL_PHRASES[phraseIndex.current]);

                // Clear ongoing scale animation to prevent additive scaling
                gsap.killTweensOf(pill, "scale");
                gsap.to(pill, {
                    scale: 0.9,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                });
            }

            // Apply transform using GSAP set
            gsap.set(pill, { x, y });
        };

        gsap.ticker.add(update);
        return () => gsap.ticker.remove(update);
    }, []);

    return (
        <section className="floating-pill-section shadow-xl">
            <div ref={containerRef} className="floating-pill-container">
                <div className="floating-pill-content">
                    <h4 className="pill-subtitle">YES, YOU</h4>
                    <h2 className="pill-title">Find your perfect<br />travel partner</h2>
                    <p className="pill-description">Match with adventurers who share your passion for exploring the world.</p>
                </div>

                <div ref={pillRef} className="moving-pill">
                    <span className="pill-icon">✈️</span>
                    <span className="pill-text">{currentText}</span>
                </div>
            </div>
        </section>
    );
}
