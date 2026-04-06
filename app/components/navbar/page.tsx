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
        const plasma = plasmaRef.current;



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


        });

        return () => {
            ctx.revert();

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

                Orbies
            </Link>

            <div className="navbar-links">
                {renderLink("Features", "/#features", 0)}
                {renderLink("Download", "/#download", 1)}
                {renderLink("About", "/#about", 2)}
            </div>

            <div className="navbar-actions">
                <Link href="/contact" ref={buttonRef} className="navbar-signup">
                    <div ref={plasmaRef} className="plasma-glow"></div>
                    <span ref={buttonContentRef} className="signup-text">
                        Contact us
                    </span>
                </Link>
            </div>
        </nav>
    );
}
