"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './footer.css';

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                gsap.to(window, {
                    scrollTo: {
                        y: target,
                        offsetY: 20
                    },
                    duration: 1.5,
                    ease: "power4.inOut"
                });
            }
        }
    };

    useEffect(() => {
        const links = linksRef.current.filter(Boolean);

        const ctx = gsap.context(() => {
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
        });

        return () => ctx.revert();
    }, []);

    const renderLink = (text: string, href: string, index: number, isExternal = false) => {
        const content = (
            <span className="link-text">
                {text.split("").map((char, i) => (
                    <span key={i} className="char-roll" data-char={char === " " ? "\u00A0" : char}>
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </span>
        );

        if (isExternal || href.startsWith('mailto:')) {
            return (
                <a
                    key={text}
                    href={href}
                    ref={(el) => { linksRef.current[index] = el; }}
                    className="footer-link-animated"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                >
                    {content}
                </a>
            );
        }

        return (
            <Link
                key={text}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                ref={(el) => { linksRef.current[index] = el; }}
                className="footer-link-animated"
            >
                {content}
            </Link>
        );
    };

    return (
        <footer className="footer-container">
            <div className="footer-top">
                {/* Left Side: Brand CTA */}
                <div className="footer-brand">
                    <h2 className="footer-headline">Start your next<br /><em>Great adventure.</em></h2>
                    <a
                        href="#download"
                        className="footer-cta"
                        onClick={(e) => scrollToSection(e, "#download")}
                    >
                        Download Orbee
                    </a>
                </div>

                {/* Right Side: Links */}
                <div className="footer-links-grid">
                    <div className="footer-column">
                        <span className="footer-column-title">Resources</span>
                        {renderLink("Feature", "#features", 0)}
                        {renderLink("Download", "#download", 1)}
                        {renderLink("About", "#about", 2)}
                    </div>

                    <div className="footer-column">
                        <span className="footer-column-title">Support</span>
                        {renderLink("Terms of Service", "https://terms.orbee.in/", 3, true)}
                        {renderLink("Privacy Policy", "https://terms.orbee.in/", 4, true)}
                        {renderLink("Contact Us", "mailto:orbee.in@gmail.com", 5, true)}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span className="footer-copyright">© Copyright 2026. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
