/**
 * Core Types and Interfaces for HMT-Foot Application
 */

/**
 * Match Status enum
 */
export enum MatchStatus {
  UPCOMING = 'upcoming',
  LIVE = 'live',
  FINISHED = 'finished',
  POSTPONED = 'postponed',
}

/**
 * Match Interface
 */
export interface Match {
  id: string;
  homeTeam: {
    id: string;
    name: string;
    logo: string;
    goals: number;
  };
  awayTeam: {
    id: string;
    name: string;
    logo: string;
    goals: number;
  };
  league: {
    id: string;
    name: string;
    country: string;
    logo: string;
  };
  status: MatchStatus;
  startTime: Date;
  venue?: string;
  streamUrl?: string; // HLS/M3U8 or Video.js compatible URL
  events: MatchEvent[];
}

/**
 * Match Event (goals, cards, etc.)
 */
export interface MatchEvent {
  id: string;
  type: 'goal' | 'card' | 'substitution';
  timestamp: number; // minutes elapsed
  team: 'home' | 'away';
  player: {
    name: string;
    number: number;
  };
  details?: {
    assistBy?: string;
    cardType?: 'yellow' | 'red';
  };
}

/**
 * Team Interface
 */
export interface Team {
  id: string;
  name: string;
  logo: string;
  country: string;
  established: number;
}

/**
 * League Interface
 */
export interface League {
  id: string;
  name: string;
  country: string;
  logo: string;
  season: number;
}

/**
 * User Favorites
 */
export interface UserFavorites {
  teams: string[]; // Team IDs
  leagues: string[]; // League IDs
}
