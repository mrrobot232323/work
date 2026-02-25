"use client";

import { motion } from "framer-motion";
import "./hero.css";

export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i: number) => ({
        y: "0%",
        transition: { duration: 0.5, delay: 0.01 * i }
    }),
    closed: {
        y: "100%",
        transition: { duration: 0.5 }
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.5 }
    }
}

export default function Hero() {
    return (
        <section className="hero-section shadow-xl">
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
            <div className="hero-content">
                {/* TITLE */}
                <h1 className="hero-title">
                    <div style={{ overflow: "hidden" }}>
                        <motion.div
                            custom={10}
                            variants={slideUp}
                            initial="initial"
                            animate="open"
                        >
                            Connect in the
                        </motion.div>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <motion.div
                            custom={20}
                            variants={slideUp}
                            initial="initial"
                            animate="open"
                            style={{ color: "white" }}
                        >
                            Moment
                        </motion.div>
                    </div>
                </h1>

                {/* SUBTITLE */}
                <div style={{ overflow: "hidden" }}>
                    <motion.p
                        className="hero-subtitle"
                        custom={35}
                        variants={slideUp}
                        initial="initial"
                        animate="open"
                    >
                        Experience the lighter side of social. Real-time connections, zero gravity.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}