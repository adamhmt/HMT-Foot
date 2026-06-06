'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BarChart3, Heart } from 'lucide-react';
import clsx from 'clsx';

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/results', label: 'Results', icon: BarChart3 },
    { href: '/favorites', label: 'Favorites', icon: Heart },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-800 border-t border-dark-700 z-40">
        <div className="flex justify-around">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex flex-col items-center justify-center py-3 px-4 flex-1 transition-colors',
                pathname === href
                  ? 'text-primary-500 border-t-2 border-primary-500'
                  : 'text-dark-400 hover:text-primary-500'
              )}
            >
              <Icon size={24} />
              <span className="text-xs mt-1 font-semibold">{label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-dark-800 border-r border-dark-700 p-6 z-40">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-primary-500">HMT Foot</h1>
          <p className="text-xs text-dark-400 mt-2">Football Live & Scores</p>
        </div>

        <div className="space-y-2 flex-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-semibold',
                pathname === href
                  ? 'bg-primary-500 text-white'
                  : 'text-dark-300 hover:bg-dark-700 hover:text-primary-500'
              )}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        <div className="text-xs text-dark-500 text-center">
          <p>HMT Foot © 2024</p>
          <p>Football Live Streaming & Scores</p>
        </div>
      </nav>
    </>
  );
};
