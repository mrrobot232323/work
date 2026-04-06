"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/footer";
import "./blog.css";

const blogPosts: any[] = [];

export default function BlogPage() {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            // Find the width of exactly one card + the CSS gap (2rem = 32px)
            const cardElement = scrollRef.current.querySelector('.blog-card');
            if (cardElement) {
                const scrollAmount = cardElement.clientWidth + 32;
                const { scrollLeft } = scrollRef.current;
                const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
                scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
            }
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="blog-container">
                <div className="blog-main-container">
                    <header className="blog-header-section">
                        <h1 className="blog-title">
                            Travel Stories & <span>Guides</span>
                        </h1>
                        <p className="blog-subtitle">
                            Real stories from real travelers. Discover tips, meet companions, and explore the world together with Orbies.
                        </p>

                        <div className="search-container">
                            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search articles..." className="search-input" />
                        </div>

                    </header>

                    {blogPosts.length > 0 && (
                        <div className="carousel-section-wrapper">
                            <button className="carousel-nav-btn left" onClick={() => scroll("left")}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>

                            <section className="carousel-wrapper" ref={scrollRef}>
                                <div className="carousel-track">
                                    {blogPosts.map((post) => (
                                        <Link href={post.href || "#"} key={post.id} className="blog-card" style={{ textDecoration: 'none' }}>
                                            <div className="card-image-wrapper">
                                                <img src={post.image} alt={post.title} className="card-image" />
                                            </div>
                                            <div className="card-content">
                                                <span className="card-badge">
                                                    {post.category}
                                                </span>
                                                <h3 className="card-title" style={{ textDecoration: 'none' }}>{post.title}</h3>
                                                <p className="card-excerpt">{post.excerpt}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            <button className="carousel-nav-btn right" onClick={() => scroll("right")}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}