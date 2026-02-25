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

            // Granular Letter Reveal
            textBlocks.forEach((block: any) => {
                const chars = block.querySelectorAll('.char');

                gsap.from(chars, {
                    opacity: 0,
                    y: 20,
                    x: 10,
                    filter: "blur(4px)",
                    duration: 0.8,
                    stagger: 0.015, // Ultra-fast stagger for letters
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Reveal the icon separately
            gsap.fromTo('.down-icon',
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: '.down-icon',
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Fast Outward Image Movement on Scroll
            imagesRef.current.forEach((img) => {
                if (!img) return;

                let xMove = 0;
                let yMove = 0;

                // Significantly increased movement values for "speed"
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
                        scrub: 1, // Lower scrub for more responsive/faster feeling speed
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
        <div ref={sectionRef} className="down-section shadow-xl">
            <div ref={containerRef} className="down-content">
                <h2 className="down-subheading">
                    <SplitTextLetters text="WHY REASONAL?" />
                </h2>

                <p className="down-text-block">
                    <SplitTextLetters text="As discerning adults, we're expected to" />
                    <SplitTextLetters text="think clearly, evaluate sources, resist" />
                    <SplitTextLetters text="manipulation, and make good decisions." />
                </p>

                <p className="down-text-block">
                    <SplitTextLetters text="Oddly, though, we're rarely taught" />
                    <SplitTextLetters text="how to do any of this systematically," />
                    <SplitTextLetters text="the way we're taught reading or math." />
                </p>

                <div className="down-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 2H21V11H30V21H21V30H11V21H2V11H11V2Z" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                </div>

                <p className="down-text-block">
                    <SplitTextLetters text="With Reasonal, we're changing that." />
                </p>
            </div>

            {/* Scattered Images - High quality portrait placeholders */}
            <div ref={(el) => setRef(el, 0)} className="down-image-left-top">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&h=800&fit=crop" alt="Portrait 1" />
            </div>
            <div ref={(el) => setRef(el, 1)} className="down-image-left-mid">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&h=800&fit=crop" alt="Portrait 2" />
            </div>
            <div ref={(el) => setRef(el, 2)} className="down-image-left-bottom">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&h=800&fit=crop" alt="Portrait 3" />
            </div>
            <div ref={(el) => setRef(el, 3)} className="down-image-right-top">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&h=800&fit=crop" alt="Portrait 4" />
            </div>
            <div ref={(el) => setRef(el, 4)} className="down-image-right-mid">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=800&fit=crop" alt="Portrait 5" />
            </div>
            <div ref={(el) => setRef(el, 5)} className="down-image-right-bottom">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&h=800&fit=crop" alt="Portrait 6" />
            </div>
            <div ref={(el) => setRef(el, 6)} className="down-image-center-bottom">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&h=800&fit=crop" alt="Portrait 7" />
            </div>
        </div>
    );
}