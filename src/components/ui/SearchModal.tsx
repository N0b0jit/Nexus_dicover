"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nexusResources } from "@/data/resources";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const searchResults: any[] = [];
        const lowerQuery = query.toLowerCase();

        Object.entries(nexusResources).forEach(([categoryKey, category]) => {
            category.items.forEach(item => {
                if (
                    item.title.toLowerCase().includes(lowerQuery) ||
                    item.description.toLowerCase().includes(lowerQuery) ||
                    item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
                ) {
                    searchResults.push({
                        ...item,
                        category: categoryKey,
                        categoryTitle: category.title
                    });
                }
            });
        });

        setResults(searchResults.slice(0, 8));
    }, [query]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-2xl mx-auto mt-20 px-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
                        <div className="flex items-center gap-3 p-4 border-b border-white/10">
                            <Search className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search resources, tools, movies..."
                                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                            />
                            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto">
                            {results.length > 0 ? (
                                <div className="p-2">
                                    {results.map((result) => (
                                        <Link
                                            key={result.id}
                                            href={result.url}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="block p-4 rounded-xl hover:bg-white/5 transition-colors group"
                                            onClick={onClose}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                                                    {result.title}
                                                </h3>
                                                <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                                                    {result.categoryTitle}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-400 line-clamp-1">{result.description}</p>
                                            {result.tags && (
                                                <div className="flex gap-1 mt-2">
                                                    {result.tags.slice(0, 3).map((tag: string) => (
                                                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            ) : query.trim() ? (
                                <div className="p-8 text-center text-gray-400">
                                    <p>No results found for "{query}"</p>
                                </div>
                            ) : (
                                <div className="p-8 text-center text-gray-400">
                                    <p>Start typing to search across all resources...</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-4 text-center text-sm text-gray-500">
                        Press <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> to close
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
