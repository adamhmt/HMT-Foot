'use client';

import React, { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { DateCalendar } from '@/components/DateCalendar';
import { MatchGrid } from '@/components/MatchGrid';
import { Match } from '@/types';
import { getMatchesByDate, getAllMatches } from '@/data/matches';
import { useStore } from '@/lib/store';

export default function Results() {
  const { selectedDate, setSelectedDate } = useStore();
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    // Fetch matches for the selected date
    // TODO: Replace with real API call when integrating with API-Football
    const dateMatches = getMatchesByDate(selectedDate);
    setMatches(dateMatches.length > 0 ? dateMatches : getAllMatches().slice(0, 6));
  }, [selectedDate]);

  return (
    <>
      <Navigation />

      <main className="md:ml-64 mb-20 md:mb-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-dark-800 to-dark-900 border-b border-dark-700 p-6 md:p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Results & Fixtures</h1>
          <p className="text-dark-400">Browse scores and upcoming matches</p>
        </div>

        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {/* Date Selector */}
          <DateCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />

          {/* Matches Grid */}
          <MatchGrid matches={matches} />
        </div>
      </main>
    </>
  );
}
