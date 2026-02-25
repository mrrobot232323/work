"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './download.css';

export default function Download() {
    return (
        <div className="download-wrapper shadow-xl">
            <div className="download-container">
                <motion.div
                    className="download-pill"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    AVAILABLE PLATFORMS
                </motion.div>

                <motion.h2
                    className="download-platforms"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <a href="#" className="download-link">Google Play Store</a>
                    <span className="red-dot">•</span>
                    <a href="#" className="download-link">Apple App Store</a>
                    <span className="red-dot">•</span>
                    <a href="#" className="download-link">Web App</a>

                    <span className="desktop-break"><br /></span>

                    <span className="red-dot desktop-dot">•</span>
                    <a href="#" className="download-link">Windows Desktop</a>
                    <span className="red-dot">•</span>
                    <a href="#" className="download-link">macOS</a>
                </motion.h2>
            </div>
        </div>
    );
}
