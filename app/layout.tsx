'use client';

import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>HMT Foot - Football Live & Scores</title>
        <meta name="description" content="Watch live football matches and track real-time scores" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-dark-900 text-dark-50`}>
        {children}
      </body>
    </html>
  );
}
