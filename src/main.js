import React from 'https://esm.sh/react@19.2.0';
import ReactDOM from 'https://esm.sh/react-dom@19.2.0/client?deps=react@19.2.0';
import { html } from './jsx.js';
import { AppProviders } from './mainProviders.js';
import { App } from './App.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  html`<${AppProviders}><${App} /></${AppProviders}>`
);