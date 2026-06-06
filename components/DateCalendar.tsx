'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { addDays, subDays, format, isToday } from 'date-fns';
import clsx from 'clsx';

interface DateCalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export const DateCalendar: React.FC<DateCalendarProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const previousDate = subDays(selectedDate, 1);
  const nextDate = addDays(selectedDate, 1);

  const getDaysToShow = () => {
    const days = [];
    for (let i = -2; i <= 2; i++) {
      days.push(addDays(selectedDate, i));
    }
    return days;
  };

  return (
    <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
      {/* Previous Button */}
      <button
        onClick={() => onDateChange(previousDate)}
        className="flex-shrink-0 p-2 hover:bg-dark-700 rounded-lg transition-colors"
      >
        <ChevronLeft size={20} className="text-primary-500" />
      </button>

      {/* Days */}
      <div className="flex gap-2 flex-shrink-0">
        {getDaysToShow().map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => onDateChange(date)}
            className={clsx(
              'px-4 py-2 rounded-lg font-semibold transition-colors flex flex-col items-center gap-1 min-w-[70px]',
              isToday(date) || date.toDateString() === selectedDate.toDateString()
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
            )}
          >
            <span className="text-xs text-dark-400">
              {format(date, 'EEE').toUpperCase()}
            </span>
            <span className="text-sm">{format(date, 'd')}</span>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onDateChange(nextDate)}
        className="flex-shrink-0 p-2 hover:bg-dark-700 rounded-lg transition-colors"
      >
        <ChevronRight size={20} className="text-primary-500" />
      </button>
    </div>
  );
};
