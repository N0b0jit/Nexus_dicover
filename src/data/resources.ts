import { Film, BookOpen, Monitor, Gamepad2, Music, Shield, Zap, Globe, Clapperboard, Download, FileText, Subtitles, Activity } from "lucide-react";

export interface ResourceItem {
    id: string;
    title: string;
    description: string;
    url: string;
    icon?: any;
    tags?: string[];
}

export interface CategoryData {
    title: string;
    description: string;
    icon: any;
    items: ResourceItem[];
}

export const nexusResources: Record<string, CategoryData> = {
    movies: {
        title: "Movies & TV",
        description: "Premium streaming gateways and high-resolution archives.",
        icon: Film,
        items: [
            { id: "flixer", title: "Flixer", description: "High-quality streaming for movies and TV shows.", url: "https://theflixer.tv", tags: ["Streaming", "HD"] },
            { id: "cineby", title: "Cineby", description: "Extensive library of international films.", url: "https://cineby.app", tags: ["Movies", "International"] },
            { id: "bitcine", title: "BitCine", description: "Reliable source for cinema enthusiasts.", url: "https://bitcine.com", tags: ["Streaming"] },
            { id: "veloratv", title: "VeloraTV", description: "Premium TV show collections.", url: "#", tags: ["TV Shows"] },
            { id: "xprimetv", title: "XPrime TV", description: "Top-tier entertainment aggregator.", url: "#", tags: ["Streaming"] },
            { id: "fmovies", title: "Fmovies", description: "Legendary streaming site for all genres.", url: "https://fmovies.to", tags: ["Popular", "Movies"] },
            { id: "cinegram", title: "Cinegram", description: "Specialized in Bollywood and Hollywood content.", url: "#", tags: ["Bollywood", "Hollywood"] },
            { id: "1337x", title: "1337x", description: "The most popular torrent index for latest releases.", url: "https://1337x.to", tags: ["Torrents", "Download"] },
            { id: "docplus", title: "Docplus", description: "Dedicated to educational and interesting documentaries.", url: "#", tags: ["Documentaries"] },
            { id: "docarea", title: "Documentary Area", description: "A vast collection of documentaries.", url: "https://documentaryarea.com", tags: ["Documentaries"] },
        ]
    },
    books: {
        title: "Library",
        description: "The world's largest digital bookshelves.",
        icon: BookOpen,
        items: [
            { id: "zlib", title: "Z-Library", description: "The world's largest e-book library.", url: "https://singlelogin.re", tags: ["E-Books", "Scientific"] },
            { id: "libgen", title: "Library Genesis", description: "Aggregator for scientific articles and books.", url: "https://libgen.is", tags: ["Research", "E-Books"] },
            { id: "rivemanga", title: "RiveManga", description: "High-quality manga reader.", url: "#", tags: ["Manga"] },
            { id: "anna", title: "Anna's Archive", description: "Search engine of shadow libraries.", url: "https://annas-archive.org", tags: ["Archive", "Search"] },
            { id: "liber3", title: "Liber3", description: "Free e-book resources.", url: "#", tags: ["E-Books"] },
            { id: "audiobookbay", title: "AudiobookBay", description: "Download unabridged audiobooks.", url: "https://audiobookbay.is", tags: ["Audiobooks"] },
            { id: "tokybook", title: "Tokybook", description: "Stream audiobooks without login.", url: "https://tokybook.com", tags: ["Audiobooks", "Streaming"] },
        ]
    },
    software: {
        title: "Software & Tools",
        description: "Cracked software, plugins, and development utilities.",
        icon: Monitor,
        items: [
            { id: "appdoze", title: "Appdoze", description: "Direct downloads for Windows software.", url: "https://appdoze.com", tags: ["Windows", "Direct Download"] },
            { id: "scloud", title: "Scloud", description: "Cloud-based software sharing.", url: "#", tags: ["Software"] },
            { id: "downloadpirate", title: "DownloadPirate", description: "VFX, plugins, and production tools.", url: "https://downloadpirate.com", tags: ["VFX", "Creative"] },
            { id: "aedownload", title: "AeDownload", description: "After Effects and Premiere Pro assets.", url: "https://aedownload.com", tags: ["Adobe", "Video Editing"] },
            { id: "audioz", title: "AudioZ", description: "Music production software and samples.", url: "https://audioz.download", tags: ["Audio", "Production"] },
            { id: "daikov", title: "DAIKOV", description: "Russian source for repackaged software.", url: "https://diakov.net", tags: ["Repacks", "Russian"] },
            { id: "downloadha", title: "DownloadHa", description: "Persian software archive.", url: "https://www.downloadha.com", tags: ["Archive", "Persian"] },
        ]
    },
    games: {
        title: "Gaming Zone",
        description: "Repacks, mods, and indie gems.",
        icon: Gamepad2,
        items: [
            { id: "fitgirl", title: "FitGirl Repacks", description: "Highly compressed game repacks.", url: "https://fitgirl-repacks.site", tags: ["Repacks"] },
            { id: "dodi", title: "DODI Repacks", description: "Fast installation game repacks.", url: "https://dodi-repacks.site", tags: ["Repacks"] },
            { id: "gog", title: "GOG-Games", description: "DRM-free game downloads.", url: "https://gog-games.to", tags: ["DRM-Free"] },
        ]
    },
    music: {
        title: "Audio Station",
        description: "Lossless audio and sound engineering.",
        icon: Music,
        items: [
            { id: "soulseek", title: "Soulseek", description: "P2P music sharing network.", url: "http://www.slsknet.org", tags: ["P2P"] },
            { id: "rutracker", title: "RuTracker", description: "Massive torrent tracker for music.", url: "https://rutracker.org", tags: ["Torrents", "FLAC"] },
        ]
    },
    security: {
        title: "Privacy & VPN",
        description: "Protect your digital identity.",
        icon: Shield,
        items: [
            { id: "mullvad", title: "Mullvad VPN", description: "Privacy-focused VPN service.", url: "https://mullvad.net", tags: ["VPN"] },
            { id: "privacytools", title: "Privacy Guides", description: "Information on protecting your data.", url: "https://www.privacyguides.org", tags: ["Guide"] },
            { id: "adguard", title: "AdGuard", description: "Advanced ad blocking and privacy protection.", url: "https://adguard.com", tags: ["AdBlock"] },
            { id: "ublock", title: "uBlock Origin", description: "Efficient wide-spectrum content blocker.", url: "https://ublockorigin.com", tags: ["AdBlock", "Extension"] }
        ]
    },
    tools: {
        title: "Web Tools",
        description: "Utilities for daily digital life.",
        icon: Zap,
        items: [
            { id: "virustotal", title: "VirusTotal", description: "Analyze files and URLs for viruses.", url: "https://www.virustotal.com", tags: ["Security"] },
            { id: "tinywow", title: "TinyWow", description: "Free PDF, video, and image tools.", url: "https://tinywow.com", tags: ["Utilities", "Free"] },
            { id: "subscene", title: "Subscene", description: "Download subtitles for movies and series.", url: "https://subscene.com", tags: ["Subtitles"] },
            { id: "opensubtitles", title: "OpenSubtitles", description: "Huge database of multi-language subtitles.", url: "https://www.opensubtitles.com", tags: ["Subtitles"] },
            { id: "cloudconvert", title: "CloudConvert", description: "Online file converter for all formats.", url: "https://cloudconvert.com", tags: ["Converter"] },
            { id: "tempmail", title: "Temp Mail", description: "Disposable temporary email address.", url: "https://temp-mail.org", tags: ["Privacy", "Email"] },
            { id: "archive", title: "Internet Archive", description: "Wayback Machine and digital library.", url: "https://archive.org", tags: ["Archive"] },
            { id: "fast", title: "Fast.com", description: "Internet speed test by Netflix.", url: "https://fast.com", tags: ["Speed Test"] }
        ]
    },
    anime: {
        title: "Anime & Manga",
        description: "The best sources for Japanese animation.",
        icon: Clapperboard,
        items: [
            { id: "nyaa", title: "Nyaa", description: "Anime torrent tracker.", url: "https://nyaa.si", tags: ["Torrents"] },
            { id: "hianime", title: "HiAnime", description: "Free anime streaming.", url: "https://hianime.to", tags: ["Streaming"] },
            { id: "mangadex", title: "MangaDex", description: "Ad-free manga reader.", url: "https://mangadex.org", tags: ["Manga"] }
        ]
    }
};
