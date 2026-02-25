import React from 'react';
import Link from 'next/link';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                {/* Left Side: Brand & Socials */}
                <div className="footer-brand">
                    <Link href="/" className="footer-logo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="2" width="4" height="4" fill="#FF7B7B" />
                            <rect x="14" y="6" width="4" height="4" fill="#FF7B7B" />
                            <rect x="6" y="6" width="4" height="4" fill="#FF7B7B" />
                            <rect x="18" y="10" width="4" height="4" fill="#FF7B7B" />
                            <rect x="2" y="10" width="4" height="4" fill="#FF7B7B" />
                            <rect x="14" y="14" width="4" height="4" fill="#FF7B7B" />
                            <rect x="6" y="14" width="4" height="4" fill="#FF7B7B" />
                            <rect x="10" y="18" width="4" height="4" fill="#FF7B7B" />
                            <rect x="10" y="10" width="4" height="4" fill="#FF7B7B" />
                        </svg>
                        Orbee
                    </Link>
                    <div className="footer-socials">
                        {/* Instagram Icon */}
                        <a href="#" className="social-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.957a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                            </svg>
                        </a>
                        {/* Threads/At Icon */}
                        <a href="#" className="social-icon">
                            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>@</span>
                        </a>
                        {/* LinkedIn Icon */}
                        <a href="#" className="social-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Side: Links */}
                <div className="footer-links-grid">
                    <div className="footer-column">
                        <span className="footer-column-title">Company</span>
                        <Link href="#" className="footer-link">iOS App</Link>
                        <Link href="#" className="footer-link">Press</Link>
                    </div>

                    <div className="footer-column">
                        <span className="footer-column-title">Resources</span>
                        <Link href="#" className="footer-link">About</Link>
                        <Link href="#" className="footer-link">Lessons</Link>
                        <Link href="#" className="footer-link">FAQ</Link>
                    </div>

                    <div className="footer-column">
                        <span className="footer-column-title">Support</span>
                        <Link href="#" className="footer-link">Terms of Service</Link>
                        <Link href="#" className="footer-link">Privacy Policy</Link>
                        <Link href="#" className="footer-link">Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span className="footer-copyright">© Copyright 2026. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
