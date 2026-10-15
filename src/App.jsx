import React, { useMemo } from 'react';
import AviatorGame from './components/AviatorGame';
import './styles/fonts.css';
import './styles/tpstudio.css';
import './styles/aviator.css';

export default function App() {
  const variant = useMemo(() => {
    if (typeof window === 'undefined') return 'x';
    const params = new URLSearchParams(window.location.search);
    const p = (params.get('path') || '').toLowerCase();
    const v = (params.get('variant') || '').toLowerCase();
    return v === 'classic' || p.includes('classic') ? 'classic' : 'x';
  }, []);

  return <AviatorGame variant={variant} />;
}
