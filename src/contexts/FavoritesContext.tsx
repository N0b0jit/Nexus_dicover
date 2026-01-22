"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface FavoritesContextType {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("nexus_favorites");
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    const addFavorite = (id: string) => {
        const updated = [...favorites, id];
        setFavorites(updated);
        localStorage.setItem("nexus_favorites", JSON.stringify(updated));
    };

    const removeFavorite = (id: string) => {
        const updated = favorites.filter(fav => fav !== id);
        setFavorites(updated);
        localStorage.setItem("nexus_favorites", JSON.stringify(updated));
    };

    const isFavorite = (id: string) => favorites.includes(id);

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within FavoritesProvider");
    }
    return context;
}
