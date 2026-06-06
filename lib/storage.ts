/**
 * Local Storage utilities for persisting user preferences
 */

import { UserFavorites } from '@/types';

const FAVORITES_KEY = 'hmt_foot_favorites';

export const storageUtils = {
  /**
   * Get user favorites from localStorage
   */
  getFavorites: (): UserFavorites => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : { teams: [], leagues: [] };
    } catch (error) {
      console.error('Error reading favorites:', error);
      return { teams: [], leagues: [] };
    }
  },

  /**
   * Save user favorites to localStorage
   */
  saveFavorites: (favorites: UserFavorites) => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  },

  /**
   * Add a team to favorites
   */
  addTeamToFavorites: (teamId: string) => {
    const favorites = storageUtils.getFavorites();
    if (!favorites.teams.includes(teamId)) {
      favorites.teams.push(teamId);
      storageUtils.saveFavorites(favorites);
    }
  },

  /**
   * Remove a team from favorites
   */
  removeTeamFromFavorites: (teamId: string) => {
    const favorites = storageUtils.getFavorites();
    favorites.teams = favorites.teams.filter(id => id !== teamId);
    storageUtils.saveFavorites(favorites);
  },

  /**
   * Add a league to favorites
   */
  addLeagueToFavorites: (leagueId: string) => {
    const favorites = storageUtils.getFavorites();
    if (!favorites.leagues.includes(leagueId)) {
      favorites.leagues.push(leagueId);
      storageUtils.saveFavorites(favorites);
    }
  },

  /**
   * Remove a league from favorites
   */
  removeLeagueFromFavorites: (leagueId: string) => {
    const favorites = storageUtils.getFavorites();
    favorites.leagues = favorites.leagues.filter(id => id !== leagueId);
    storageUtils.saveFavorites(favorites);
  },
};
