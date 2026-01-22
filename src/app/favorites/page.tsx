"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import { nexusResources } from "@/data/resources";
import { Heart, ExternalLink, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FavoritesPage() {
    const { favorites, removeFavorite } = useFavorites();

    const favoriteItems = favorites.map(favId => {
        for (const [categoryKey, category] of Object.entries(nexusResources)) {
            const item = category.items.find(i => i.id === favId);
            if (item) {
                return { ...item, category: categoryKey, categoryTitle: category.title };
            }
        }
        return null;
    }).filter(Boolean);

    return (
        <div className="pb-20 pt-10 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-400">
                            <Heart className="w-8 h-8 fill-current" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-400">
                                Your Favorites
                            </h1>
                            <p className="text-gray-400 text-lg mt-2">
                                {favoriteItems.length} saved {favoriteItems.length === 1 ? 'resource' : 'resources'}
                            </p>
                        </div>
                    </div>
                </header>

                {favoriteItems.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-flex p-6 rounded-full bg-white/5 mb-6">
                            <Heart className="w-12 h-12 text-gray-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">No favorites yet</h2>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto">
                            Start adding resources to your favorites by clicking the heart icon on any resource card.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Explore Resources
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favoriteItems.map((item: any, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card p-6 rounded-xl border border-white/5 relative group overflow-hidden min-h-[160px] flex flex-col justify-between hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all duration-300"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="flex-1"
                                        >
                                            <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                                                {item.title}
                                            </h3>
                                        </a>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => removeFavorite(item.id)}
                                                className="p-1 hover:bg-red-500/10 rounded-lg transition-colors group/btn"
                                                title="Remove from favorites"
                                            >
                                                <Trash2 className="w-4 h-4 text-gray-500 group-hover/btn:text-red-400 transition-colors" />
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
                                    <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.description}</p>
                                    <Link
                                        href={`/${item.category}`}
                                        className="inline-block text-xs text-pink-400 hover:text-pink-300 transition-colors"
                                    >
                                        {item.categoryTitle} →
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {item.tags?.map((tag: string) => (
                                        <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-pink-400/20 group-hover:text-pink-400 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
