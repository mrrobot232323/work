"use client";

import React from 'react';
import { motion } from 'framer-motion';
import "./down.css";

export default function Down() {
    return (
        <div className="down-section shadow-xl">
            <div className="down-content">
                <motion.h2
                    className="down-subheading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    WHY REASONAL?
                </motion.h2>

                <motion.p
                    className="down-text-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                    As discerning adults, we're expected to<br />
                    think clearly, evaluate sources, resist<br />
                    manipulation, and make good decisions.
                </motion.p>

                <motion.p
                    className="down-text-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Oddly, though, we're rarely taught<br />
                    how to do any of this systematically,<br />
                    the way we're taught reading or math.
                </motion.p>

                <motion.div
                    className="down-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 2H21V11H30V21H21V30H11V21H2V11H11V2Z" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                </motion.div>

                <motion.p
                    className="down-text-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    With Reasonal, we're changing that.
                </motion.p>
            </div>

            {/* Scattered Images Left */}
            <motion.div
                className="down-image-left-top"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            >
                <img src="https://images.unsplash.com/photo-1544716278-ca5e5f4cb5f1?q=80&w=300&h=300&fit=crop" style={{ borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} alt="Top left" />
            </motion.div>
            <motion.div
                className="down-image-left-mid"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&fit=crop" style={{ borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} alt="Mid left" />
            </motion.div>
            <motion.div
                className="down-image-left" style={{ margin: "20px" }}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                <img src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=300&h=300&fit=crop" style={{ borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} alt="Hand marker icon" />
            </motion.div>

            {/* Scattered Images Right */}
            <motion.div
                className="down-image-right-top"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&h=300&fit=crop" style={{ borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} alt="Top right" />
            </motion.div>
            <motion.div
                className="down-image-right-mid"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&h=300&fit=crop" style={{ borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} alt="Mid right" />
            </motion.div>
            <motion.div
                className="down-image-right" style={{ margin: "20px" }}
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
                <img src="https://images.unsplash.com/photo-1543269664-56d569b307ec?q=80&w=300&h=300&fit=crop" style={{ borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} alt="Right decorative icon" />
            </motion.div>
        </div>
    );
}