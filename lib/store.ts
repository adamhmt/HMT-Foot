/**
 * Zustand store for global state management
 */

import { create } from 'zustand';
import { UserFavorites } from '@/types';
import { storageUtils } from './storage';

interface AppStore {
  favorites: UserFavorites;
  selectedDate: Date;
  isMobile: boolean;
  isDarkMode: boolean;
  setSelectedDate: (date: Date) => void;
  setIsMobile: (isMobile: boolean) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
  loadFavorites: () => void;
  addTeamToFavorites: (teamId: string) => void;
  removeTeamFromFavorites: (teamId: string) => void;
  addLeagueToFavorites: (leagueId: string) => void;
  removeLeagueFromFavorites: (leagueId: string) => void;
}

export const useStore = create<AppStore>((set) => ({
  favorites: { teams: [], leagues: [] },
  selectedDate: new Date(),
  isMobile: false,
  isDarkMode: true,

  setSelectedDate: (date) => set({ selectedDate: date }),
  setIsMobile: (isMobile) => set({ isMobile }),
  setIsDarkMode: (isDarkMode) => set({ isDarkMode }),

  loadFavorites: () => {
    const favorites = storageUtils.getFavorites();
    set({ favorites });
  },

  addTeamToFavorites: (teamId) =>
    set((state) => {
      const updatedFavorites = {
        ...state.favorites,
        teams: [...state.favorites.teams, teamId],
      };
      storageUtils.saveFavorites(updatedFavorites);
      return { favorites: updatedFavorites };
    }),

  removeTeamFromFavorites: (teamId) =>
    set((state) => {
      const updatedFavorites = {
        ...state.favorites,
        teams: state.favorites.teams.filter(id => id !== teamId),
      };
      storageUtils.saveFavorites(updatedFavorites);
      return { favorites: updatedFavorites };
    }),

  addLeagueToFavorites: (leagueId) =>
    set((state) => {
      const updatedFavorites = {
        ...state.favorites,
        leagues: [...state.favorites.leagues, leagueId],
      };
      storageUtils.saveFavorites(updatedFavorites);
      return { favorites: updatedFavorites };
    }),

  removeLeagueFromFavorites: (leagueId) =>
    set((state) => {
      const updatedFavorites = {
        ...state.favorites,
        leagues: state.favorites.leagues.filter(id => id !== leagueId),
      };
      storageUtils.saveFavorites(updatedFavorites);
      return { favorites: updatedFavorites };
    }),
}));
