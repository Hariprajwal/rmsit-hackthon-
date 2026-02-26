import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Input({ className, ...props }) {
    return (
        <input
            className={twMerge(
                "w-full px-6 py-4 rounded-[24px] bg-white/50 border border-slate-200 focus:border-primary outline-none transition-all duration-300",
                "placeholder:text-slate-400 text-slate-700",
                "focus:ring-4 focus:ring-primary/10 glass",
                className
            )}
            {...props}
        />
    );
}
