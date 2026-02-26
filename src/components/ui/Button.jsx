import React from 'react';
import { motion as Motion } from 'framer-motion';

import { twMerge } from 'tailwind-merge';

export function Button({ className, children, ...props }) {
    return (
        <Motion.button
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(
                "px-6 py-3 pill-shape font-black uppercase tracking-widest text-[10px] transition-all duration-300",
                "bg-primary text-[#0a0f1e] shadow-lg shadow-primary/20 hover:shadow-primary/40",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        >
            {children}
        </Motion.button>
    );
}

export function GhostButton({ className, children, ...props }) {
    return (
        <Motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 229, 255, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(
                "px-6 py-3 pill-shape font-black uppercase tracking-widest text-[10px] transition-all duration-300",
                "text-primary border border-primary/20 hover:border-primary/40",
                className
            )}
            {...props}
        >
            {children}
        </Motion.button>
    );
}
