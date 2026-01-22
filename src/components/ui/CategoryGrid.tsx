"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Category {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    color: string;
    href: string;
}

interface CategoryGridProps {
    categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <section className="py-12 px-6">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
                <div className="w-1 h-8 bg-primary rounded-full" />
                Featured Categories
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((cat, index) => {
                    const Icon = cat.icon;
                    return (
                        <Link key={cat.id} href={cat.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="glass-card p-6 rounded-2xl h-full border border-white/5 hover:border-primary/30 transition-all group"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6"
                                    style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{cat.description}</p>

                                <div className="mt-4 flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: cat.color }}>
                                    <span>Explore</span>
                                    <div className="h-[1px] w-4 bg-current" />
                                </div>
                            </motion.div>
                        </Link>
                    )
                })}
            </div>
        </section>
    );
}
