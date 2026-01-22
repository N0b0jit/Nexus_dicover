# Nexus Source

![Nexus Source](public/logo.png)

**Nexus Source** is a stunning, dark-themed digital resource hub inspired by deepwebnest.com. It provides a centralized gateway to premium entertainment, tools, software, and encrypted knowledge.

## ✨ Features

- 🎬 **Movies & TV**: Stream from premium sources like Flixer, Fmovies, 1337x
- 📚 **Digital Library**: Access Z-Library, Libgen, Anna's Archive
- 💻 **Software & Tools**: Download from Appdoze, AudioZ, DownloadPirate
- 🎮 **Gaming Zone**: FitGirl Repacks, DODI, GOG-Games
- 🎵 **Audio Station**: Soulseek, RuTracker for lossless music
- 🔒 **Privacy & VPN**: Mullvad VPN, AdGuard, uBlock Origin
- ⚡ **Web Tools**: Subtitle tools, converters, and utilities
- 🎌 **Anime & Manga**: Nyaa, HiAnime, MangaDex

### 🚀 Advanced Features

- **Global Search**: Press `Ctrl+K` to search across all resources
- **Favorites System**: Save your favorite resources with localStorage persistence
- **Typewriter Animation**: Dynamic hero text cycling through categories
- **Glassmorphism UI**: Premium dark theme with blur effects
- **Floating Animations**: 3D card effects powered by Framer Motion
- **Responsive Design**: Optimized for desktop and mobile

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/nexus-source.git

# Navigate to project directory
cd nexus-source

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Project Structure

```
nexus_source/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── [category]/        # Dynamic category pages
│   │   ├── favorites/         # Favorites page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── layout/            # Navbar, Sidebar
│   │   └── ui/                # Reusable UI components
│   ├── contexts/              # React Context providers
│   ├── data/                  # Resource data
│   └── lib/                   # Utilities
├── public/                    # Static assets
└── package.json
```

## 🎯 Key Components

- **SearchModal**: Global search with keyboard shortcuts
- **Typewriter**: Animated text cycling effect
- **CategoryGrid**: Responsive resource grid
- **FavoritesContext**: Persistent favorites management

## 🔑 Keyboard Shortcuts

- `Ctrl+K` / `Cmd+K`: Open global search
- `Esc`: Close search modal

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

This project is for educational purposes only. The resources listed are third-party links and are not hosted by this project. Use at your own discretion and ensure compliance with local laws.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🌟 Acknowledgments

- Inspired by [deepwebnest.com](https://deepwebnest.com)
- Built with [Next.js](https://nextjs.org)
- Icons by [Lucide](https://lucide.dev)

---

Made with 💜 by [Your Name]
