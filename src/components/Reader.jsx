import React, { useEffect } from 'react';
import { X, ChevronLeft } from 'lucide-react';

const Reader = ({ novel, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!novel) return null;

  return (
    <div className="fixed inset-0 z-40 bg-white">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b">
          <button onClick={onClose} className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
            <ChevronLeft size={18} />
            <span className="text-sm">Library</span>
          </button>
          <div className="text-center">
            <h2 className="font-semibold text-lg">{novel.title}</h2>
            <p className="text-xs text-gray-500">{novel.author}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="Close reader"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <article className="prose prose-indigo max-w-3xl mx-auto px-4 sm:px-6 py-8">
            {novel.chapters.map((ch) => (
              <section key={ch.id} className="mb-10">
                <h3 className="mb-2">{ch.title}</h3>
                {ch.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Reader;
