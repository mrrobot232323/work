"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./down.css";

gsap.registerPlugin(ScrollTrigger);

// Helper to split text into letters wrapped in spans
const SplitTextLetters = ({ text, className }: { text: string; className?: string }) => {
    return (
        <span className={className} style={{ display: 'block' }}>
            {text.split(' ').map((word, i) => (
                <span key={i} className="word-wrapper" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.split('').map((char, j) => (
                        <span key={j} className="char" style={{ display: 'inline-block' }}>
                            {char}
                        </span>
                    ))}
                    <span className="char" style={{ display: 'inline-block' }}>&nbsp;</span>
                </span>
            ))}
        </span>
    );
};

export default function Down() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Clear refs to avoid duplicates on hmr
        imagesRef.current = imagesRef.current.slice(0, 7);

        const ctx = gsap.context(() => {
            const textBlocks = gsap.utils.toArray('.down-text-block, .down-subheading');

            // Fixed-Position Scroll-Synced Reveal (Scrub)
            const mainTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",   // Start when section is comfortably in view
                    end: "bottom 85%", // Finish before it leaves
                    scrub: 1,         // Smooth sync
                }
            });

            // Add all blocks to a single continuous timeline for a sequential reveal feel
            textBlocks.forEach((block: any) => {
                const chars = block.querySelectorAll('.char');

                mainTl.fromTo(chars,
                    {
                        opacity: 0.15, // Faint initial state
                        filter: "blur(4px)",
                    },
                    {
                        opacity: 1,
                        filter: "blur(0px)",
                        stagger: 0.05,
                        ease: "none",
                    },
                    "+=0.1" // Slight gap between blocks
                );
            });

            // Fast Outward Image Movement on Scroll (Independent scrub for speed feel)
            imagesRef.current.forEach((img) => {
                if (!img) return;

                let xMove = 0;
                let yMove = 0;

                if (img.classList.contains('down-image-left-top')) { xMove = -150; yMove = -100; }
                else if (img.classList.contains('down-image-left-mid')) { xMove = -200; yMove = 0; }
                else if (img.classList.contains('down-image-left-bottom')) { xMove = -150; yMove = 100; }
                else if (img.classList.contains('down-image-right-top')) { xMove = 150; yMove = -100; }
                else if (img.classList.contains('down-image-right-mid')) { xMove = 200; yMove = 0; }
                else if (img.classList.contains('down-image-right-bottom')) { xMove = 150; yMove = 100; }
                else if (img.classList.contains('down-image-center-bottom')) { xMove = 0; yMove = 150; }

                gsap.to(img, {
                    x: xMove,
                    y: yMove,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const setRef = (el: HTMLDivElement | null, index: number) => {
        imagesRef.current[index] = el;
    };

    return (
        <div id="about" ref={sectionRef} className="down-section shadow-xl">
            <div ref={containerRef} className="down-content">
                <h2 className="down-subheading">
                    <SplitTextLetters text="WHY ORBEE?" />
                </h2>

                <p className="down-text-block">
                    <SplitTextLetters text="Orbee is a travel based dating" />
                    <SplitTextLetters text="app where your preferences are" />
                    <SplitTextLetters text="made on dream destinations." />
                </p>

                <p className="down-text-block">
                    <SplitTextLetters text="Connect over shared experiences," />
                    <SplitTextLetters text="and find matches who want to" />
                    <SplitTextLetters text="explore the world with you." />
                </p>

                <div className="down-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 2H21V11H30V21H21V30H11V21H2V11H11V2Z" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                </div>

                <p className="down-text-block">
                    <SplitTextLetters text="With Orbee, travel meets love." />
                </p>
            </div>

            {/* Scattered Images - High quality portrait placeholders */}
            <div ref={(el) => setRef(el, 0)} className="down-image-left-top">
                <img src="https://reasonal.co/assets/whysection/thinker.webp" alt="Portrait 1" />
            </div>
            <div ref={(el) => setRef(el, 1)} className="down-image-left-mid">
                <img src="https://reasonal.co/assets/whysection/calc.webp" alt="Portrait 2" />
            </div>
            <div ref={(el) => setRef(el, 2)} className="down-image-left-bottom">
                <img src="https://reasonal.co/assets/whysection/pencilhand.webp" alt="Portrait 3" />
            </div>
            <div ref={(el) => setRef(el, 3)} className="down-image-right-top">
                <img src="https://reasonal.co/assets/whysection/tape.webp" alt="Portrait 4" />
            </div>
            <div ref={(el) => setRef(el, 4)} className="down-image-right-mid">
                <img src="https://reasonal.co/assets/whysection/mic.webp" alt="Portrait 5" />
            </div>
            <div ref={(el) => setRef(el, 5)} className="down-image-right-bottom">
                <img src="https://reasonal.co/assets/whysection/pencilhand.webp" alt="Portrait 6" />
            </div>
            <div ref={(el) => setRef(el, 6)} className="down-image-center-bottom">
                <img src="https://reasonal.co/assets/whysection/scales.webp" alt="Portrait 7" />
            </div>
        </div>
    );
}