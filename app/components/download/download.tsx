"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './download.css';

export default function Download() {
    return (
        <div id="download" className="download-wrapper shadow-xl">
            <div className="download-container">
                <div className="download-content">
                    <motion.div
                        className="download-pill"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        DOWNLOAD ORBIES
                    </motion.div>

                    <motion.h2
                        className="download-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        Available on Google Play <br />
                        Coming soon on App Store
                    </motion.h2>
                </div>

                <motion.div
                    className="store-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <a href="https://play.google.com/store/apps/details?id=com.daksh77.MVP" target="_blank" rel="noopener noreferrer" className="store-btn" style={{ display: 'inline-block' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                    </a>
                    <div className="store-btn-wrapper">
                        <button className="store-btn disabled">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
                        </button>
                        <span className="coming-soon-tag">Coming soon</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
