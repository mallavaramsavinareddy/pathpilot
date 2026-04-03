import React from 'https://esm.sh/react@19.2.0';
import { html } from './jsx.js';

export function AppProviders({ children }) {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return html`${children}`;
}