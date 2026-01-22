"use client";

import { Hero } from "@/components/ui/Hero";
import { CategoryGrid } from "@/components/ui/CategoryGrid";
import { Film, BookOpen, Music, Gamepad2, Monitor, Shield, Zap, Globe } from "lucide-react";

export default function Home() {
  const categories = [
    {
      id: "movies",
      title: "Movies & TV",
      icon: Film,
      description: "Stream high-quality films, series, and documentaries in 4K.",
      color: "#f472b6",
      href: "/movies"
    },
    {
      id: "books",
      title: "Library",
      icon: BookOpen,
      description: "Access massive collections of e-books, audiobooks, and manga.",
      color: "#60a5fa",
      href: "/books"
    },
    {
      id: "software",
      title: "Software & Tools",
      icon: Monitor,
      description: "Premium software, development tools, and utility apps.",
      color: "#a78bfa",
      href: "/software"
    },
    {
      id: "games",
      title: "Gaming Zone",
      icon: Gamepad2,
      description: "Discover free games, mods, and gaming utilities.",
      color: "#34d399",
      href: "/games"
    },
    {
      id: "music",
      title: "Audio Station",
      icon: Music,
      description: "Lossless music, podcasts, and sound engineering tools.",
      color: "#fbbf24",
      href: "/music"
    },
    {
      id: "security",
      title: "Privacy & VPN",
      icon: Shield,
      description: "Top-tier VPNs, adblockers, and security suites.",
      color: "#ef4444",
      href: "/security"
    },
    {
      id: "tools",
      title: "Web Tools",
      icon: Zap,
      description: "Converters, downloaders, and streaming boosters.",
      color: "#f59e0b",
      href: "/tools"
    },
    {
      id: "streaming",
      title: "Live TV",
      icon: Globe,
      description: "Access live sports events and international TV channels.",
      color: "#22c55e",
      href: "/streaming"
    }
  ];

  return (
    <div className="pb-20">
      <Hero />
      <CategoryGrid categories={categories} />

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-30">
        <div className="absolute top-[20%] left-[30%] w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
