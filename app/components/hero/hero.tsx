"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./hero.css";

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power4.inOut" }
            });

            // Initial state: Tiny, blurred, and hidden
            gsap.set(sectionRef.current, {
                scale: 0,
                opacity: 0,
                filter: "blur(20px)",
                transformOrigin: "center center"
            });

            gsap.set([titleRef.current, subtitleRef.current], {
                opacity: 0,
                y: 30
            });

            // The "Big Bang" Opening Animation
            tl.to(sectionRef.current, {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.8,
                ease: "expo.out"
            })
                // Reveal Title & Subtitle as it finishes expanding
                .to(titleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.8")
                .to(subtitleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.6");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="hero-section shadow-xl">
            {/* VIDEO BACKGROUND */}
            <video
                className="hero-background"
                src="https://cdn.dribbble.com/userupload/32941109/file/original-d5c7eb3381e214ea62b74126b5ce529c.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* CONTENT */}
            <div ref={contentRef} className="hero-content">
                <h1 ref={titleRef} className="hero-title">
                    Connect in the<br />Moment
                </h1>
                <p ref={subtitleRef} className="hero-subtitle">
                    Experience the lighter side of social. Real-time connections, zero gravity.
                </p>
            </div>
        </section>
    );
}