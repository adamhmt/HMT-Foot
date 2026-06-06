'use client';

import React, { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { MatchCard } from '@/components/MatchCard';
import { Match } from '@/types';
import { getAllMatches, MOCK_TEAMS, MOCK_LEAGUES } from '@/data/matches';
import { useStore } from '@/lib/store';
import { Heart, Trash2 } from 'lucide-react';

export default function Favorites() {
  const { favorites, addTeamToFavorites, removeTeamFromFavorites, addLeagueToFavorites, removeLeagueFromFavorites, loadFavorites } = useStore();
  const [favoriteMatches, setFavoriteMatches] = useState<Match[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadFavorites();
  }, [loadFavorites]);

  useEffect(() => {
    if (mounted) {
      // Filter matches that include favorite teams
      const filtered = getAllMatches().filter(
        (match) =>
          favorites.teams.includes(match.homeTeam.id) ||
          favorites.teams.includes(match.awayTeam.id) ||
          favorites.leagues.includes(match.league.id)
      );
      setFavoriteMatches(filtered);
    }
  }, [favorites, mounted]);

  if (!mounted) {
    return (
      <>
        <Navigation />
        <main className="md:ml-64 mb-20 md:mb-0">
          <div className="p-6 md:p-8">Loading...</div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main className="md:ml-64 mb-20 md:mb-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-dark-800 to-dark-900 border-b border-dark-700 p-6 md:p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Your Favorites</h1>
          <p className="text-dark-400">Matches from your favorite teams and leagues</p>
        </div>

        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {/* Favorite Teams Section */}
          {favorites.teams.length > 0 && (
            <section className="mb-12">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">⭐ Favorite Teams</h2>
                <div className="flex flex-wrap gap-3">
                  {favorites.teams.map((teamId) => {
                    const team = MOCK_TEAMS.find((t) => t.id === teamId);
                    return team ? (
                      <div
                        key={teamId}
                        className="card flex items-center gap-3 py-2 px-4"
                      >
                        <img
                          src={team.logo}
                          alt={team.name}
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-sm font-semibold">{team.name}</span>
                        <button
                          onClick={() => removeTeamFromFavorites(teamId)}
                          className="ml-2 text-dark-400 hover:text-primary-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Favorite Leagues Section */}
          {favorites.leagues.length > 0 && (
            <section className="mb-12">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">🏆 Favorite Leagues</h2>
                <div className="flex flex-wrap gap-3">
                  {favorites.leagues.map((leagueId) => {
                    const league = MOCK_LEAGUES.find((l) => l.id === leagueId);
                    return league ? (
                      <div
                        key={leagueId}
                        className="card flex items-center gap-3 py-2 px-4"
                      >
                        <img
                          src={league.logo}
                          alt={league.name}
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-sm font-semibold">{league.name}</span>
                        <button
                          onClick={() => removeLeagueFromFavorites(leagueId)}
                          className="ml-2 text-dark-400 hover:text-primary-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Favorite Matches Grid */}
          {favoriteMatches.length > 0 && (
            <section>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">📺 Matches from Your Favorites</h2>
                <p className="text-dark-400">Showing {favoriteMatches.length} match(es)</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

          {/* Empty State */}
          {favorites.teams.length === 0 && favorites.leagues.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <Heart size={48} className="text-dark-600 mb-4" />
              <p className="text-dark-300 text-lg font-semibold">No favorites yet</p>
              <p className="text-dark-500 text-sm mt-2">
                Click the heart icon on teams to add them to your favorites
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
