import React, { useEffect, useRef } from 'react';
import { Search, SortAsc, SortDesc } from 'lucide-react';

const SearchBar = ({ query, setQuery, sortAsc, setSortAsc, onReadyForShortcut }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (onReadyForShortcut) onReadyForShortcut(() => inputRef.current?.focus());
  }, [onReadyForShortcut]);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-6">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or author..."
            className="w-full pl-10 pr-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          onClick={() => setSortAsc((s) => !s)}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          {sortAsc ? <SortAsc size={18} /> : <SortDesc size={18} />}
          <span className="text-sm">Sort A–Z</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
