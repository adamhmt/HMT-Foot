/**
 * Mock API service
 * This file demonstrates how to integrate with a real API
 * 
 * TODO: Replace with actual API calls to API-Football
 * Integration guide: https://www.api-football.com/documentation
 */

import { Match, League, Team } from '@/types';
import {
  getAllMatches,
  getMatchesByDate,
  getLiveMatches,
  getUpcomingMatches,
  getFinishedMatches,
  getMatchById,
  MOCK_LEAGUES,
  MOCK_TEAMS,
} from './matches';

/**
 * API Service Class
 * 
 * NOTE: When integrating with API-Football:
 * 1. Sign up at https://www.api-football.com/
 * 2. Get your API key
 * 3. Update the endpoints below with actual API calls
 * 4. Handle real-time updates with WebSockets or polling
 */
class FootballAPIService {
  private baseUrl = 'https://v3.football.api-sports.io';
  private apiKey = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY; // Set this in .env.local

  /**
   * Fetch live matches
   * Real API: GET /fixtures?live=true
   */
  async fetchLiveMatches(): Promise<Match[]> {
    // TODO: Replace with actual API call
    // const response = await fetch(`${this.baseUrl}/fixtures?live=true`, {
    //   headers: { 'x-apisports-key': this.apiKey },
    // });
    // return response.json();
    
    return getLiveMatches();
  }

  /**
   * Fetch upcoming matches
   * Real API: GET /fixtures?status=NS (Not Started)
   */
  async fetchUpcomingMatches(): Promise<Match[]> {
    // TODO: Replace with actual API call
    // const response = await fetch(`${this.baseUrl}/fixtures?status=NS`, {
    //   headers: { 'x-apisports-key': this.apiKey },
    // });
    // return response.json();
    
    return getUpcomingMatches();
  }

  /**
   * Fetch finished matches
   * Real API: GET /fixtures?status=FT (Full Time)
   */
  async fetchFinishedMatches(): Promise<Match[]> {
    // TODO: Replace with actual API call
    // const response = await fetch(`${this.baseUrl}/fixtures?status=FT`, {
    //   headers: { 'x-apisports-key': this.apiKey },
    // });
    // return response.json();
    
    return getFinishedMatches();
  }

  /**
   * Fetch all matches
   */
  async fetchAllMatches(): Promise<Match[]> {
    // TODO: Replace with actual API call
    return getAllMatches();
  }

  /**
   * Fetch matches by date
   * Real API: GET /fixtures?date=YYYY-MM-DD
   */
  async fetchMatchesByDate(date: Date): Promise<Match[]> {
    // TODO: Replace with actual API call
    // const dateString = date.toISOString().split('T')[0];
    // const response = await fetch(`${this.baseUrl}/fixtures?date=${dateString}`, {
    //   headers: { 'x-apisports-key': this.apiKey },
    // });
    // return response.json();
    
    return getMatchesByDate(date);
  }

  /**
   * Fetch match details by ID
   * Real API: GET /fixtures?id=MATCH_ID
   */
  async fetchMatchById(id: string): Promise<Match | undefined> {
    // TODO: Replace with actual API call
    // const response = await fetch(`${this.baseUrl}/fixtures?id=${id}`, {
    //   headers: { 'x-apisports-key': this.apiKey },
    // });
    // return response.json();
    
    return getMatchById(id);
  }

  /**
   * Fetch all leagues
   * Real API: GET /leagues
   */
  async fetchLeagues(): Promise<League[]> {
    // TODO: Replace with actual API call
    // const response = await fetch(`${this.baseUrl}/leagues`, {
    //   headers: { 'x-apisports-key': this.apiKey },
    // });
    // return response.json();
    
    return MOCK_LEAGUES;
  }

  /**
   * Fetch all teams
   * Real API: GET /teams
   */
  async fetchTeams(): Promise<Team[]> {
    // TODO: Replace with actual API call
    // const response = await fetch(`${this.baseUrl}/teams`, {
    //   headers: { 'x-apisports-key': this.apiKey },
    // });
    // return response.json();
    
    return MOCK_TEAMS;
  }
}

/**
 * Export singleton instance
 */
export const footballAPI = new FootballAPIService();
