'use client';

import React, { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { MatchCard } from '@/components/MatchCard';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Match } from '@/types';
import { getLiveMatches, getUpcomingMatches } from '@/data/matches';

export default function Home() {
  const [liveMatches, setLiveMatches] = useState<Match[]>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  useEffect(() => {
    // Fetch live and upcoming matches
    // TODO: Replace with real API calls when integrating with API-Football
    setLiveMatches(getLiveMatches());
    setUpcomingMatches(getUpcomingMatches());
  }, []);

  return (
    <>
      <Navigation />

      <main className="md:ml-64 mb-20 md:mb-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-dark-800 to-dark-900 border-b border-dark-700 p-6 md:p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">HMT Foot</h1>
          <p className="text-dark-400">Live Matches & Real-Time Scores</p>
        </div>

        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {/* Live Matches Section */}
          {liveMatches.length > 0 && (
            <section className="mb-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">🔴 Live Now</h2>
                <p className="text-dark-400">Watch live matches in real-time</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveMatches.map((match) => (
                  <MatchCard
                    key={match.id}
                    match={match}
                    onWatchClick={setSelectedMatch}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Upcoming Matches Section */}
          {upcomingMatches.length > 0 && (
            <section>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">📅 Upcoming Matches</h2>
                <p className="text-dark-400">Don't miss these upcoming fixtures</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

          {/* Empty State */}
          {liveMatches.length === 0 && upcomingMatches.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-dark-400 text-lg">No matches available at the moment.</p>
              <p className="text-dark-500 text-sm mt-2">Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      {/* Video Player Modal */}
      {selectedMatch && (
        <VideoPlayer match={selectedMatch} onClose={() => setSelectedMatch(null)} />
      )}
    </>
  );
}
