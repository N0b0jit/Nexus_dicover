"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu, User, Bell, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { SearchModal } from "@/components/ui/SearchModal";

export function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-6 flex items-center justify-between glass">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                            <Image
                                src="/logo.png"
                                alt="Nexus Source"
                                fill
                                className="object-contain drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                            />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                            NEXUS SOURCE
                        </span>
                    </Link>
                </div>

                <button
                    onClick={() => setIsSearchOpen(true)}
                    className="hidden md:flex items-center w-full max-w-md h-10 rounded-full transition-all duration-300 border border-white/10 bg-white/5 hover:bg-white/10 px-4 gap-3 group"
                >
                    <Search className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="text-sm text-gray-400 flex-1 text-left">Search resources...</span>
                    <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-1 text-xs bg-white/10 rounded">
                        <span>Ctrl</span>
                        <span>K</span>
                    </kbd>
                </button>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <Search className="w-5 h-5 text-gray-300" />
                    </button>
                    <Link href="/favorites" className="p-2 rounded-full hover:bg-white/10 transition-colors relative group">
                        <Heart className="w-5 h-5 text-gray-300 group-hover:text-pink-400 transition-colors" />
                    </Link>
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <User className="w-5 h-5 text-gray-300" />
                    </button>
                    <button className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors">
                        <Menu className="w-5 h-5 text-gray-300" />
                    </button>
                </div>
            </nav>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
