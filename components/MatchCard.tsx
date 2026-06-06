'use client';

import React from 'react';
import { format } from 'date-fns';
import { Heart, Play } from 'lucide-react';
import { Match, MatchStatus } from '@/types';
import { useStore } from '@/lib/store';
import clsx from 'clsx';

interface MatchCardProps {
  match: Match;
  onWatchClick?: (match: Match) => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, onWatchClick }) => {
  const { favorites, addTeamToFavorites, removeTeamFromFavorites } = useStore();
  
  const isHomeTeamFavorited = favorites.teams.includes(match.homeTeam.id);
  const isAwayTeamFavorited = favorites.teams.includes(match.awayTeam.id);

  const toggleFavorite = (teamId: string) => {
    if (favorites.teams.includes(teamId)) {
      removeTeamFromFavorites(teamId);
    } else {
      addTeamToFavorites(teamId);
    }
  };

  const getStatusBadge = () => {
    switch (match.status) {
      case MatchStatus.LIVE:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary-500 text-white animate-pulse">
            ● LIVE
          </span>
        );
      case MatchStatus.FINISHED:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-dark-700 text-dark-300">
            FINISHED
          </span>
        );
      case MatchStatus.UPCOMING:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent-500 text-white">
            UPCOMING
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card-hover">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <p className="text-xs text-dark-400 mb-1">{match.league.name}</p>
          <p className="text-xs text-dark-300">
            {format(new Date(match.startTime), 'HH:mm')}
          </p>
        </div>
        {getStatusBadge()}
      </div>

      {/* Match Teams */}
      <div className="mb-6">
        {/* Home Team */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 flex-1">
            <img
              src={match.homeTeam.logo}
              alt={match.homeTeam.name}
              className="w-8 h-8 object-contain"
            />
            <span className="text-sm font-semibold text-dark-50 flex-1 truncate">
              {match.homeTeam.name}
            </span>
          </div>
          <button
            onClick={() => toggleFavorite(match.homeTeam.id)}
            className="ml-2 text-dark-400 hover:text-primary-500 transition-colors"
          >
            <Heart
              size={18}
              className={isHomeTeamFavorited ? 'fill-primary-500 text-primary-500' : ''}
            />
          </button>
        </div>

        {/* Score */}
        <div className="flex justify-center mb-3">
          <div className="text-3xl font-bold text-dark-50">
            {match.homeTeam.goals}
            <span className="text-xl text-dark-400 mx-2">-</span>
            {match.awayTeam.goals}
          </div>
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <img
              src={match.awayTeam.logo}
              alt={match.awayTeam.name}
              className="w-8 h-8 object-contain"
            />
            <span className="text-sm font-semibold text-dark-50 flex-1 truncate">
              {match.awayTeam.name}
            </span>
          </div>
          <button
            onClick={() => toggleFavorite(match.awayTeam.id)}
            className="ml-2 text-dark-400 hover:text-primary-500 transition-colors"
          >
            <Heart
              size={18}
              className={isAwayTeamFavorited ? 'fill-primary-500 text-primary-500' : ''}
            />
          </button>
        </div>
      </div>

      {/* Watch Button */}
      {match.status === MatchStatus.LIVE && match.streamUrl && (
        <button
          onClick={() => onWatchClick?.(match)}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <Play size={18} />
          Watch Live
        </button>
      )}
    </div>
  );
};
