"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import "./navbar.css";

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const buttonContentRef = useRef<HTMLSpanElement>(null);
    const plasmaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const links = linksRef.current;
        const button = buttonRef.current;
        const buttonContent = buttonContentRef.current;
        const plasma = plasmaRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            if (!button || !buttonContent) return;
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

            if (distance < 200) {
                const x = e.clientX - centerX;
                const y = e.clientY - centerY;

                gsap.to(button, {
                    x: x * 0.45,
                    y: y * 0.45,
                    rotateX: -y * 0.1,
                    rotateY: x * 0.1,
                    duration: 0.5,
                    ease: "power3.out",
                });

                gsap.to(buttonContent, {
                    x: x * 0.12,
                    y: y * 0.12,
                    duration: 0.5,
                    ease: "power3.out",
                });
            } else {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.4)",
                });
                gsap.to(buttonContent, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.4)",
                });
            }
        };

        const ctx = gsap.context(() => {
            // Magnetic Effect for Links
            links.forEach((link) => {
                if (!link) return;
                link.addEventListener("mousemove", (e) => {
                    const rect = link.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(link, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.4,
                        ease: "power2.out",
                    });
                });
                link.addEventListener("mouseleave", () => {
                    gsap.to(link, {
                        x: 0,
                        y: 0,
                        duration: 0.6,
                        ease: "elastic.out(1, 0.3)",
                    });
                });
            });

            // Plasma Fill Effect tracking
            button?.addEventListener("mousemove", (e) => {
                const rect = (button as HTMLElement).getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                gsap.to(plasma, {
                    left: x,
                    top: y,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            window.addEventListener("mousemove", handleMouseMove);
        });

        return () => {
            ctx.revert();
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const renderLink = (text: string, href: string, index: number) => (
        <Link
            key={text}
            href={href}
            ref={(el) => { linksRef.current[index] = el; }}
            className="navbar-link"
        >
            <span className="link-text">
                {text.split("").map((char, i) => (
                    <span key={i} className="char-roll" data-char={char}>
                        {char}
                    </span>
                ))}
            </span>
        </Link>
    );

    return (
        <nav ref={navRef} className="navbar">
            <Link href="/" className="navbar-logo">
                
                Orbee
            </Link>

            <div className="navbar-links">
                {renderLink("Features", "#features", 0)}
                {renderLink("Pricing", "#pricing", 1)}
                {renderLink("About", "#about", 2)}
            </div>

            <div className="navbar-actions">
                <Link href="/signup" ref={buttonRef} className="navbar-signup">
                    <div ref={plasmaRef} className="plasma-glow"></div>
                    <span ref={buttonContentRef} className="signup-text">
                        Get Started
                    </span>
                </Link>
            </div>
        </nav>
    );
}
