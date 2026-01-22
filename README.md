# Nexus Discover 🌐

<div align="center">
  <img src="public/logo.png" alt="Nexus Discover Logo" width="120" height="120">
  
  ### Your Gateway to the Digital Universe
  
  [![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

---

**Nexus Discover** is a stunning, dark-themed digital resource hub inspired by deepwebnest.com. It provides a centralized gateway to premium entertainment, tools, software, and encrypted knowledge with a futuristic glassmorphism UI.

## ✨ Features

### 📚 **Resource Categories**

- 🎬 **Movies & TV**: Stream from Flixer, Fmovies, 1337x, Cineby, and more
- 📖 **Digital Library**: Access Z-Library, Libgen, Anna's Archive, Audiobooks
- 💻 **Software & Tools**: Download from Appdoze, AudioZ, DownloadPirate, AeDownload
- 🎮 **Gaming Zone**: FitGirl Repacks, DODI Repacks, GOG-Games
- 🎵 **Audio Station**: Soulseek, RuTracker for lossless music
- 🔒 **Privacy & VPN**: Mullvad VPN, AdGuard, uBlock Origin, Privacy Guides
- ⚡ **Web Tools**: Subtitle tools, file converters, temp mail, speed tests
- 🎌 **Anime & Manga**: Nyaa, HiAnime, MangaDex

### 🚀 **Advanced Functionality**

- **🔍 Global Search**: Press `Ctrl+K` to search across all 50+ resources instantly
- **❤️ Favorites System**: Save your favorite resources with localStorage persistence
- **⌨️ Keyboard Shortcuts**: Navigate efficiently with hotkeys
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile
- **🎨 Glassmorphism UI**: Premium dark theme with blur effects and gradients
- **✨ Smooth Animations**: 3D floating cards and micro-interactions powered by Framer Motion
- **🔄 Typewriter Effect**: Dynamic hero text cycling through categories

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **Lucide React** | Beautiful icons |
| **React Context** | State management |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/N0b0jit/Nexus_dicover.git

# Navigate to project directory
cd Nexus_dicover

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Project Structure

```
nexus_source/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [category]/        # Dynamic category pages
│   │   │   └── page.tsx       # Movies, Books, Software, etc.
│   │   ├── favorites/         # Saved resources page
│   │   │   └── page.tsx
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles & animations
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Top navigation with search
│   │   │   └── Sidebar.tsx    # Category navigation
│   │   └── ui/
│   │       ├── Hero.tsx       # Animated hero section
│   │       ├── CategoryGrid.tsx
│   │       ├── SearchModal.tsx # Global search
│   │       └── Typewriter.tsx  # Text animation
│   ├── contexts/
│   │   └── FavoritesContext.tsx # Favorites state
│   ├── data/
│   │   └── resources.ts       # All resource links
│   └── lib/
│       └── utils.ts           # Helper functions
├── public/
│   └── logo.png              # Nexus logo
└── package.json
```

## 🎮 Usage

### **Search Resources**
- Click the search bar or press `Ctrl+K` (Windows) / `Cmd+K` (Mac)
- Type to search across titles, descriptions, and tags
- Press `Esc` to close

### **Save Favorites**
- Click the ❤️ icon on any resource card
- Access saved items via the heart icon in navbar or `/favorites`
- Remove favorites from the favorites page

### **Browse Categories**
- Use the sidebar to navigate between categories
- Click any resource card to visit the external link
- View tags to understand resource types

## 🔑 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` / `Cmd+K` | Open global search |
| `Esc` | Close search modal |

## 🎨 Design Philosophy

Nexus Discover follows a **dark futuristic aesthetic** with:
- Deep space-inspired color palette (`#030014` background)
- Purple (`#8b5cf6`) and pink (`#ec4899`) accent colors
- Glassmorphism cards with backdrop blur
- Smooth animations and micro-interactions
- Floating 3D elements for depth

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

This project is for **educational purposes only**. The resources listed are third-party links and are not hosted by this project. We do not endorse or promote piracy. Use at your own discretion and ensure compliance with local laws and regulations.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. Open a **Pull Request**

### Ideas for Contributions
- Add more resource categories
- Improve search algorithm
- Add dark/light mode toggle
- Implement user authentication
- Add resource ratings/reviews

## 🌟 Acknowledgments

- Inspired by [deepwebnest.com](https://deepwebnest.com)
- Built with [Next.js](https://nextjs.org)
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

**Nobojit** - [@N0b0jit](https://github.com/N0b0jit)

**Project Link**: [https://github.com/N0b0jit/Nexus_dicover](https://github.com/N0b0jit/Nexus_dicover)

---

<div align="center">
  Made with 💜 by <a href="https://github.com/N0b0jit">Nobojit</a>
  
  ⭐ Star this repo if you find it useful!
</div>
