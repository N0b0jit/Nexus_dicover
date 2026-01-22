"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Typewriter } from "@/components/ui/Typewriter";

export function Hero() {
    return (
        <section className="relative w-full min-h-[500px] flex flex-col justify-center items-start px-6 py-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl z-10"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Welcome to the Nexus</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight min-h-[160px] md:min-h-[auto]">
                    Discover the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-pulse-glow">
                        <Typewriter
                            words={["Hidden Web", "Discover", "Blog", "Tutorial", "Project", "Tool", "PDF", "Music", "Anime"]}
                        />
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                    Your centralized hub for premium digital resources. Stream movies, download tools, and access the encrypted knowledge base.
                </p>

                <div className="flex flex-wrap gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all flex items-center gap-2"
                    >
                        Start Exploring <ArrowRight className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold backdrop-blur-md transition-all"
                    >
                        View Documentation
                    </motion.button>
                </div>
            </motion.div>

            {/* Floating 3D Cards Effect */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] hidden md:block perspective-1000">
                <motion.div
                    animate={{
                        rotateX: [0, 10, 0],
                        rotateY: [0, 10, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 right-10 w-60 h-80 glass-card rounded-2xl p-6 transform rotate-[-12deg] z-20"
                >
                    <div className="w-full h-32 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4 animate-pulse" />
                    <div className="h-4 w-3/4 bg-white/10 rounded mb-2" />
                    <div className="h-4 w-1/2 bg-white/10 rounded" />
                </motion.div>

                <motion.div
                    animate={{
                        rotateX: [0, -10, 0],
                        rotateY: [0, -10, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-10 right-40 w-60 h-80 glass-card rounded-2xl p-6 transform rotate-[12deg] z-10 opacity-70"
                >
                    <div className="w-full h-32 rounded-lg bg-gradient-to-br from-pink-500/20 to-orange-500/20 mb-4 animate-pulse" />
                    <div className="h-4 w-3/4 bg-white/10 rounded mb-2" />
                </motion.div>
            </div>
        </section>
    );
}
