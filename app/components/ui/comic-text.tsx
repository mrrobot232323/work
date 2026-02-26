"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ComicTextProps {
    children: string;
    className?: string;
    stagger?: number;
    fontSize?: string;
}

export const ComicText = ({ children, className = "", stagger = 0.02, fontSize }: ComicTextProps) => {
    const letters = children.split("");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: stagger },
        },
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            scale: 0.5,
            y: 20,
        },
    };

    return (
        <motion.span
            className={`inline-flex flex-wrap cursor-default py-2 ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
            style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 900,
                fontSize: fontSize || "1.1em",
            }}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{
                        display: "inline-block",
                        color: "#FFEA00", // Bright Yellow
                        textShadow: `
                            3px 3px 0 #000, 
                            -1px -1px 0 #000,  
                            1px -1px 0 #000,
                            -1px 1px 0 #000,
                            1px 1px 0 #000,
                            6px 6px 0 #FF0000
                        `,
                        padding: "0 2px",
                        marginRight: letter === " " ? "10px" : "0",
                        transformOrigin: "center center",
                    }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};
