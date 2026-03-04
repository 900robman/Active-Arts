import { useState, useEffect } from 'react';

const themes = [
  { key: '', label: 'Ocean Mist' },
  { key: 'navy', label: 'Navy & Coral' },
  { key: 'slate', label: 'Slate & Copper' },
  { key: 'clay', label: 'Clay & Sienna' },
  { key: 'pastel', label: 'Pastel & Sage' },
];

function getStored() {
  try {
    return localStorage.getItem('aa-theme') || '';
  } catch {
    return '';
  }
}

export default function ThemeSwitcher() {
  const [active, setActive] = useState(getStored);

  useEffect(() => {
    if (active) {
      document.documentElement.setAttribute('data-theme', active);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [active]);

  // Apply stored theme on mount
  useEffect(() => {
    const stored = getStored();
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
    }
  }, []);

  const select = (key) => {
    setActive(key);
    try { localStorage.setItem('aa-theme', key); } catch {}
  };

  if (!import.meta.env.DEV) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 bg-charcoal-900/90 backdrop-blur-sm rounded-lg p-1 shadow-elevated font-heading text-xs">
      <span className="px-2 text-charcoal-400">Theme:</span>
      {themes.map((t) => (
        <button
          key={t.key}
          onClick={() => select(t.key)}
          className={`px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
            active === t.key
              ? 'bg-terra-500 text-white'
              : 'text-charcoal-300 hover:text-cream-50 hover:bg-charcoal-700'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
