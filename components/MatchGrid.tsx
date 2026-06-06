'use client';

import React from 'react';
import { Match } from '@/types';
import { MatchCard } from './MatchCard';

interface MatchGridProps {
  matches: Match[];
  onWatchClick?: (match: Match) => void;
}

export const MatchGrid: React.FC<MatchGridProps> = ({ matches, onWatchClick }) => {
  if (matches.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-dark-400">No matches available for this date.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} onWatchClick={onWatchClick} />
      ))}
    </div>
  );
};
