/**
 * Mock data for matches
 * 
 * NOTE: Replace these demo videos and match data with real data from API-Football
 * API Documentation: https://www.api-football.com/documentation
 * 
 * For streaming, integrate with your streaming provider's HLS/M3U8 endpoints
 */

import { Match, MatchStatus, MatchEvent, League, Team } from '@/types';

// Mock Leagues
export const MOCK_LEAGUES: League[] = [
  {
    id: 'league_1',
    name: 'Premier League',
    country: 'England',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
    season: 2024,
  },
  {
    id: 'league_2',
    name: 'La Liga',
    country: 'Spain',
    logo: 'https://media.api-sports.io/football/leagues/140.png',
    season: 2024,
  },
  {
    id: 'league_3',
    name: 'Serie A',
    country: 'Italy',
    logo: 'https://media.api-sports.io/football/leagues/135.png',
    season: 2024,
  },
  {
    id: 'league_4',
    name: 'Ligue 1',
    country: 'France',
    logo: 'https://media.api-sports.io/football/leagues/61.png',
    season: 2024,
  },
  {
    id: 'league_5',
    name: 'Bundesliga',
    country: 'Germany',
    logo: 'https://media.api-sports.io/football/leagues/78.png',
    season: 2024,
  },
];

// Mock Teams
export const MOCK_TEAMS: Team[] = [
  {
    id: 'team_1',
    name: 'Manchester United',
    logo: 'https://media.api-sports.io/football/teams/33.png',
    country: 'England',
    established: 1878,
  },
  {
    id: 'team_2',
    name: 'Liverpool',
    logo: 'https://media.api-sports.io/football/teams/40.png',
    country: 'England',
    established: 1892,
  },
  {
    id: 'team_3',
    name: 'Manchester City',
    logo: 'https://media.api-sports.io/football/teams/50.png',
    country: 'England',
    established: 1880,
  },
  {
    id: 'team_4',
    name: 'Arsenal',
    logo: 'https://media.api-sports.io/football/teams/42.png',
    country: 'England',
    established: 1886,
  },
  {
    id: 'team_5',
    name: 'Real Madrid',
    logo: 'https://media.api-sports.io/football/teams/541.png',
    country: 'Spain',
    established: 1902,
  },
  {
    id: 'team_6',
    name: 'Barcelona',
    logo: 'https://media.api-sports.io/football/teams/529.png',
    country: 'Spain',
    established: 1899,
  },
];

// Mock Match Events
const createMatchEvents = (homeGoals: number, awayGoals: number): MatchEvent[] => {
  const events: MatchEvent[] = [];
  
  // Home team goals
  for (let i = 0; i < homeGoals; i++) {
    events.push({
      id: `event_${Date.now()}_${i}`,
      type: 'goal',
      timestamp: 15 + i * 20,
      team: 'home',
      player: { name: `Home Player ${i + 1}`, number: 10 + i },
      details: { assistBy: `Assist by Player ${9 + i}` },
    });
  }

  // Away team goals
  for (let i = 0; i < awayGoals; i++) {
    events.push({
      id: `event_${Date.now()}_away_${i}`,
      type: 'goal',
      timestamp: 30 + i * 25,
      team: 'away',
      player: { name: `Away Player ${i + 1}`, number: 20 + i },
      details: { assistBy: `Assist by Player ${19 + i}` },
    });
  }

  return events.sort((a, b) => a.timestamp - b.timestamp);
};

// Mock Matches - LIVE
export const MOCK_LIVE_MATCHES: Match[] = [
  {
    id: 'match_live_1',
    homeTeam: {
      id: 'team_1',
      name: 'Manchester United',
      logo: 'https://media.api-sports.io/football/teams/33.png',
      goals: 2,
    },
    awayTeam: {
      id: 'team_2',
      name: 'Liverpool',
      logo: 'https://media.api-sports.io/football/teams/40.png',
      goals: 1,
    },
    league: MOCK_LEAGUES[0],
    status: MatchStatus.LIVE,
    startTime: new Date(Date.now() - 45 * 60 * 1000), // Started 45 minutes ago
    venue: 'Old Trafford',
    // Demo video URLs - Replace with your actual stream links
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4',
    events: createMatchEvents(2, 1),
  },
  {
    id: 'match_live_2',
    homeTeam: {
      id: 'team_3',
      name: 'Manchester City',
      logo: 'https://media.api-sports.io/football/teams/50.png',
      goals: 3,
    },
    awayTeam: {
      id: 'team_4',
      name: 'Arsenal',
      logo: 'https://media.api-sports.io/football/teams/42.png',
      goals: 2,
    },
    league: MOCK_LEAGUES[0],
    status: MatchStatus.LIVE,
    startTime: new Date(Date.now() - 60 * 60 * 1000), // Started 60 minutes ago
    venue: 'Etihad Stadium',
    // Demo video URL - Replace with your actual stream link
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/elephants_dream.mp4',
    events: createMatchEvents(3, 2),
  },
];

// Mock Matches - UPCOMING
export const MOCK_UPCOMING_MATCHES: Match[] = [
  {
    id: 'match_upcoming_1',
    homeTeam: {
      id: 'team_5',
      name: 'Real Madrid',
      logo: 'https://media.api-sports.io/football/teams/541.png',
      goals: 0,
    },
    awayTeam: {
      id: 'team_6',
      name: 'Barcelona',
      logo: 'https://media.api-sports.io/football/teams/529.png',
      goals: 0,
    },
    league: MOCK_LEAGUES[1],
    status: MatchStatus.UPCOMING,
    startTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // In 2 hours
    venue: 'Santiago Bernabéu',
    events: [],
  },
  {
    id: 'match_upcoming_2',
    homeTeam: {
      id: 'team_1',
      name: 'Manchester United',
      logo: 'https://media.api-sports.io/football/teams/33.png',
      goals: 0,
    },
    awayTeam: {
      id: 'team_3',
      name: 'Manchester City',
      logo: 'https://media.api-sports.io/football/teams/50.png',
      goals: 0,
    },
    league: MOCK_LEAGUES[0],
    status: MatchStatus.UPCOMING,
    startTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
    venue: 'Old Trafford',
    events: [],
  },
];

// Mock Matches - FINISHED
export const MOCK_FINISHED_MATCHES: Match[] = [
  {
    id: 'match_finished_1',
    homeTeam: {
      id: 'team_2',
      name: 'Liverpool',
      logo: 'https://media.api-sports.io/football/teams/40.png',
      goals: 2,
    },
    awayTeam: {
      id: 'team_4',
      name: 'Arsenal',
      logo: 'https://media.api-sports.io/football/teams/42.png',
      goals: 1,
    },
    league: MOCK_LEAGUES[0],
    status: MatchStatus.FINISHED,
    startTime: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
    venue: 'Anfield',
    events: createMatchEvents(2, 1),
  },
  {
    id: 'match_finished_2',
    homeTeam: {
      id: 'team_5',
      name: 'Real Madrid',
      logo: 'https://media.api-sports.io/football/teams/541.png',
      goals: 4,
    },
    awayTeam: {
      id: 'team_6',
      name: 'Barcelona',
      logo: 'https://media.api-sports.io/football/teams/529.png',
      goals: 0,
    },
    league: MOCK_LEAGUES[1],
    status: MatchStatus.FINISHED,
    startTime: new Date(Date.now() - 48 * 60 * 60 * 1000), // 2 days ago
    venue: 'Santiago Bernabéu',
    events: createMatchEvents(4, 0),
  },
];

/**
 * Get all matches
 */
export const getAllMatches = (): Match[] => {
  return [...MOCK_LIVE_MATCHES, ...MOCK_UPCOMING_MATCHES, ...MOCK_FINISHED_MATCHES];
};

/**
 * Get matches by date
 */
export const getMatchesByDate = (date: Date): Match[] => {
  return getAllMatches().filter(match => {
    const matchDate = new Date(match.startTime);
    return (
      matchDate.toDateString() === date.toDateString()
    );
  });
};

/**
 * Get live matches
 */
export const getLiveMatches = (): Match[] => {
  return MOCK_LIVE_MATCHES;
};

/**
 * Get upcoming matches
 */
export const getUpcomingMatches = (): Match[] => {
  return MOCK_UPCOMING_MATCHES;
};

/**
 * Get finished matches
 */
export const getFinishedMatches = (): Match[] => {
  return MOCK_FINISHED_MATCHES;
};

/**
 * Get match by ID
 */
export const getMatchById = (id: string): Match | undefined => {
  return getAllMatches().find(match => match.id === id);
};
