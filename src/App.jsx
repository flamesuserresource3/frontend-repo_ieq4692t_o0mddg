import React, { useMemo, useState, useCallback } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NovelGrid from './components/NovelGrid';
import Reader from './components/Reader';

const sampleNovels = [
  {
    id: 'n1',
    title: 'The Whispering Pines',
    author: 'Amelia Hart',
    tags: ['Mystery', 'Drama'],
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    chapters: [
      {
        id: 'c1',
        title: 'Chapter 1 — The Letter',
        paragraphs: [
          'The letter arrived on a Tuesday, thin as a sigh and addressed in a hand Clara had not seen in a decade.',
          'Outside, the pines murmured in the mountain wind, their needles combing the sky into ribbons of dull silver.',
          'She did not open it at once. Instead, she made tea the way her mother had taught her—water first, then the leaves, always clockwise—and waited for the kettle to hush the room.',
        ],
      },
      {
        id: 'c2',
        title: 'Chapter 2 — Pinesong',
        paragraphs: [
          'They said the forest could speak if you knew how to listen. Clara pressed her palm to the bark and tried to hear more than her own heartbeat.',
          'A jay laughed from somewhere unseen. The letter in her pocket felt heavier than folded paper ought to be.',
        ],
      },
    ],
  },
  {
    id: 'n2',
    title: 'City of Glass Rain',
    author: 'Noah Ibarra',
    tags: ['Sci‑Fi', 'Adventure'],
    cover: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    chapters: [
      {
        id: 'c1',
        title: 'Prologue — Static',
        paragraphs: [
          'In the city where it rained shards of memory, umbrellas were made of stories stitched together.',
          'Mira sold repairs from a kiosk the size of a confession booth. People came to her with leaks of the strangest kind.',
        ],
      },
    ],
  },
  {
    id: 'n3',
    title: 'A Map for Sea Lanterns',
    author: 'Ravi Menon',
    tags: ['Fantasy', 'Journey'],
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    chapters: [
      {
        id: 'c1',
        title: 'Chapter 1 — Tidemark',
        paragraphs: [
          'On the longest day, the sea grew eyes. They blinked like lanterns beneath the surface, charting paths only the old navigators could read.',
          'Anai stood at the pier with pockets full of chalk and a head full of wrong maps.',
        ],
      },
    ],
  },
  {
    id: 'n4',
    title: 'Paper Birds at Midnight',
    author: 'Lina Okoye',
    tags: ['Romance', 'Slice of Life'],
    cover: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1200&auto=format&fit=crop',
    chapters: [
      {
        id: 'c1',
        title: 'Chapter 1 — Fold',
        paragraphs: [
          'The first bird she folded was a secret. The second was a promise. By the third, the room remembered how to breathe.',
          'Across the street, the bakery lit its sign—MIDNIGHT—and the smell of cardamom crossed the road like a dare.',
        ],
      },
    ],
  },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [selected, setSelected] = useState(null);
  const [focusSearch, setFocusSearch] = useState(() => () => {});

  const novels = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? sampleNovels.filter(
          (n) =>
            n.title.toLowerCase().includes(q) ||
            n.author.toLowerCase().includes(q) ||
            (n.tags || []).some((t) => t.toLowerCase().includes(q))
        )
      : sampleNovels;
    const sorted = [...filtered].sort((a, b) =>
      sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    return sorted;
  }, [query, sortAsc]);

  const openReader = useCallback((novel) => setSelected(novel), []);
  const closeReader = useCallback(() => setSelected(null), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/40">
      <Header onFocusSearch={focusSearch} />
      <main className="pb-16">
        <SearchBar
          query={query}
          setQuery={setQuery}
          sortAsc={sortAsc}
          setSortAsc={setSortAsc}
          onReadyForShortcut={setFocusSearch}
        />
        <NovelGrid novels={novels} onOpen={openReader} />
      </main>
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        Built with love for readers — pick a cover to jump straight into a story.
      </footer>

      {selected && <Reader novel={selected} onClose={closeReader} />}
    </div>
  );
}
