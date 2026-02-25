"use client";

import { motion } from "framer-motion";
import "./hero.css";

export default function Hero() {
    return (
        <section className="hero-section shadow-xl">
            {/* GIF BACKGROUND */}
            <div className="hero-background" />

            {/* CONTENT */}
            <div className="hero-content">
                {/* TITLE */}
                <h1 className="hero-title">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                        style={{ display: "inline-block" }}
                    >
                        Like Duolingo,
                    </motion.span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        style={{ display: "inline-block" }}
                    >
                        but for
                    </motion.span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        style={{ display: "inline-block" }}
                    >
                        critical thinking
                    </motion.span>
                </h1>
            </div>
        </section>
    );
}