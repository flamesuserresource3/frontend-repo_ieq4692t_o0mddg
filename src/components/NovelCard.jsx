import React from 'react';

const NovelCard = ({ novel, onOpen }) => {
  return (
    <button
      onClick={() => onOpen(novel)}
      className="group text-left rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <img
          src={novel.cover}
          alt={`Cover of ${novel.title}`}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold leading-snug line-clamp-2">{novel.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{novel.author}</p>
        {novel.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {novel.tags.map((t) => (
              <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">{t}</span>
            ))}
          </div>
        ) : null}
      </div>
    </button>
  );
};

export default NovelCard;
