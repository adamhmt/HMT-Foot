'use client';

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { X } from 'lucide-react';
import { Match } from '@/types';

interface VideoPlayerProps {
  match: Match;
  onClose: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ match, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-primary-500 transition-colors"
        >
          <X size={32} />
        </button>

        {/* Video Container */}
        <div className="bg-black rounded-lg overflow-hidden">
          <div className="aspect-video bg-black flex items-center justify-center">
            <ReactPlayer
              url={match.streamUrl}
              playing
              controls
              width="100%"
              height="100%"
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Match Info */}
        <div className="mt-6 text-white">
          <h2 className="text-2xl font-bold mb-2">
            {match.homeTeam.name} vs {match.awayTeam.name}
          </h2>
          <p className="text-dark-400">{match.league.name}</p>
        </div>
      </div>
    </div>
  );
};
