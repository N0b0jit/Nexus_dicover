"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    words: string[];
    className?: string;
}

export function Typewriter({ words, className }: TypewriterProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Typing logic
    useEffect(() => {
        if (index >= words.length) {
            setIndex(0);
            return;
        }

        const currentWord = words[index];

        // If typing finished, wait then delete
        if (subIndex === currentWord.length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1500);
            return;
        }

        // If deleting finished, move to next word
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 100); // Typing speed 100ms, deleting 50ms

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <span className={className}>
            {words[index].substring(0, subIndex)}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-[0.9em] bg-purple-400 ml-1 align-baseline translate-y-[2px]"
            />
        </span>
    );
}
