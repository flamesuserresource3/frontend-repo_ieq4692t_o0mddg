import React from 'react';
import { BookOpen, Search } from 'lucide-react';

const Header = ({ onFocusSearch }) => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-600 text-white">
            <BookOpen size={20} />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">PageGarden</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Discover and read beautiful stories</p>
          </div>
        </div>
        <button
          onClick={onFocusSearch}
          className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
        >
          <Search size={16} />
          <span className="text-sm">Quick search</span>
          <kbd className="ml-2 text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 border">/</kbd>
        </button>
      </div>
    </header>
  );
};

export default Header;
