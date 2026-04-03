import { html } from '../jsx.js';

export function ModeTabs({ mode, onChange }) {
  const tabs = [
    { id: 'known', label: 'I Know My Goal', description: 'Generate a tailored roadmap' },
    { id: 'unknown', label: "I Don't Know My Goal", description: 'Discover suitable career paths' }
  ];

  return html`
    <div className="grid gap-3 sm:grid-cols-2">
      ${tabs.map((tab) => html`
        <button
          key=${tab.id}
          onClick=${() => onChange(tab.id)}
          className=${`group rounded-[var(--radius-lg)] border px-4 py-4 text-left transition-all duration-300 ${mode === tab.id
            ? 'border-[hsl(var(--primary))] bg-[linear-gradient(180deg,hsl(var(--primary))/0.18,hsl(var(--card))/0.96)] shadow-lg'
            : 'border-[hsl(var(--border))] bg-[hsl(var(--card))]/90 hover:-translate-y-0.5 hover:border-[hsl(var(--primary))]/50 hover:shadow-md'}`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-semibold text-white">${tab.label}</div>
              <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted))]">${tab.description}</p>
            </div>
            <div className=${`mt-1 h-3 w-3 rounded-full transition-all ${mode === tab.id ? 'bg-[hsl(var(--primary))] shadow-[0_0_20px_hsl(var(--primary)/0.8)]' : 'bg-[hsl(var(--border))]'}`}></div>
          </div>
        </button>
      `)}
    </div>
  `;
}