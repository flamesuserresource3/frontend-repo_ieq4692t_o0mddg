import React from 'react';
import NovelCard from './NovelCard';

const NovelGrid = ({ novels, onOpen }) => {
  if (!novels.length) {
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center py-16 text-gray-500">No stories found. Try a different search.</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-6 pb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {novels.map((novel) => (
          <NovelCard key={novel.id} novel={novel} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
};

export default NovelGrid;
