"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Film,
    BookOpen,
    Music,
    Gamepad2,
    Monitor,
    Shield,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const sidebarItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Film, label: "Movies & TV", href: "/movies" },
    { icon: BookOpen, label: "Books", href: "/books" },
    { icon: Music, label: "Music", href: "/music" },
    { icon: Gamepad2, label: "Games", href: "/games" },
    { icon: Monitor, label: "Software", href: "/software" },
    { icon: Shield, label: "Security", href: "/security" },
    { icon: Zap, label: "Tools", href: "/tools" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed top-20 left-0 bottom-0 w-20 md:w-64 z-40 glass border-r border-white/5 transition-all duration-300 flex flex-col py-6">
            <div className="flex flex-col gap-2 px-3">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group overflow-hidden",
                                isActive
                                    ? "bg-primary/20 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary/10 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <Icon className={cn("w-5 h-5 z-10 transition-transform duration-300 group-hover:scale-110", isActive && "text-primary")} />
                            <span className="hidden md:block font-medium z-10 text-sm tracking-wide">{item.label}</span>

                            {!isActive && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            )}
                        </Link>
                    );
                })}
            </div>

            <div className="mt-auto px-4 w-full">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-white/10 hidden md:block">
                    <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">System Status</h3>
                    <div className="flex items-center gap-2 text-xs text-green-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Operational
                    </div>
                </div>
            </div>
        </aside>
    );
}
