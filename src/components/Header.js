import React from 'https://esm.sh/react@19.2.0';
import { html } from '../jsx.js';

export function Header() {
  return html`
    <header className="relative overflow-hidden border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/90 backdrop-blur-xl">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]/20 blur-3xl"></div>
        <div className="absolute right-0 top-8 h-40 w-40 rounded-full bg-[hsl(var(--secondary))]/20 blur-3xl"></div>
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[hsl(var(--border))] bg-[linear-gradient(135deg,hsl(var(--primary))/0.35,hsl(var(--secondary))/0.18)] shadow-md ring-1 ring-white/5">
            <span className="text-lg">🧭</span>
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">pathpilot</div>
            <div className="text-xs text-[hsl(var(--muted))]">Career clarity for students</div>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))]/80 px-3 py-2 text-xs text-[hsl(var(--muted))] sm:flex">
          <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--primary))]"></span>
          Smart roadmaps, no backend required
        </div>
      </div>
    </header>
  `;
}