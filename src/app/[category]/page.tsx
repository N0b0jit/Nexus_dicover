"use client";

import { useParams } from "next/navigation";
import { nexusResources } from "@/data/resources";
import { ExternalLink, Lock, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useFavorites } from "@/contexts/FavoritesContext";

export default function CategoryPage() {
    const params = useParams();
    const category = params.category as string;
    const data = nexusResources[category];
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    if (!data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-grid-white/[0.02]">
                <div className="p-4 rounded-full bg-red-500/10 text-red-500 mb-4">
                    <Lock className="w-12 h-12" />
                </div>
                <h1 className="text-4xl font-bold mb-4 text-white">404 - Sector Not Found</h1>
                <p className="text-gray-400 max-w-md mx-auto">The requested content sector does not exist in the Nexus or requires higher clearance.</p>
                <Link href="/" className="mt-8 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                    Return to Base
                </Link>
            </div>
        );
    }

    const Icon = data.icon;

    return (
        <div className="pb-20 pt-10 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-white shadow-[0_0_30px_rgba(139,92,246,0.2)] border border-white/10 backdrop-blur-md">
                        <Icon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-400 mb-2">
                            {data.title}
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl">{data.description}</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.items.map((item, index) => {
                        const favorited = isFavorite(item.id);

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card p-6 rounded-xl border border-white/5 relative group overflow-hidden min-h-[160px] flex flex-col justify-between hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="flex-1"
                                        >
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                        </a>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => favorited ? removeFavorite(item.id) : addFavorite(item.id)}
                                                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                <Heart className={`w-4 h-4 transition-colors ${favorited ? 'fill-pink-500 text-pink-500' : 'text-gray-500'}`} />
                                            </button>
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="nofollow noreferrer"
                                            >
                                                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {item.tags?.map(tag => (
                                        <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-primary/20 group-hover:text-primary transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
