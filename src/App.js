import React from 'https://esm.sh/react@19.2.0';
import { html } from './jsx.js';
import { Header } from './components/Header.js';
import { ModeTabs } from './components/ModeTabs.js';
import { PlannerForm } from './components/PlannerForm.js';
import { ResultsPanel } from './components/ResultsPanel.js';
import { buildGoalRoadmap, suggestGoals } from './utils/roadmap.js';

function getHashMode() {
  return window.location.hash === '#/discover' ? 'unknown' : 'known';
}

export function App() {
  const [mode, setMode] = React.useState(getHashMode());
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState(null);

  React.useEffect(() => {
    const onHashChange = () => {
      const nextMode = getHashMode();
      setMode(nextMode);
      setResult(null);
    };
    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/goal';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleModeChange = (nextMode) => {
    window.location.hash = nextMode === 'known' ? '#/goal' : '#/discover';
  };

  const handleSubmit = (payload) => {
    setIsLoading(true);
    setResult(null);

    window.setTimeout(() => {
      const nextResult = payload.mode === 'known'
        ? buildGoalRoadmap(payload.goal, payload.skills, payload.time)
        : suggestGoals(payload.skills, payload.time);
      setResult(nextResult);
      setIsLoading(false);
    }, 700);
  };

  return html`
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,hsl(var(--primary))/0.14,transparent_26%),radial-gradient(circle_at_bottom_right,hsl(var(--secondary))/0.14,transparent_24%),hsl(var(--background))]">
      <${Header} />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <section className="grid gap-6 lg:grid-cols-[0.95fr,1.15fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/85 p-5 shadow-md sm:p-6">
              <div className="inline-flex rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 px-3 py-1 text-xs font-medium text-[hsl(var(--primary))]">
                Built for students choosing their next move
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Find a career path or build a realistic learning roadmap.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[hsl(var(--muted))] sm:text-base">
                pathpilot helps you move from uncertainty to action. Pick a goal and get a clear plan, or let the app recommend paths that fit your current skills and schedule.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                ${[
                  'Same-page results',
                  'Simple smart logic',
                  'Beginner-friendly',
                  'Time-based planning',
                  'Career comparisons',
                  'Practical resources'
                ].map((item) => html`<div key=${item} className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/70 px-3 py-3 text-xs text-[hsl(var(--foreground))]">${item}</div>`)}
              </div>
            </div>

            <${ModeTabs} mode=${mode} onChange=${handleModeChange} />
            <${PlannerForm} mode=${mode} onSubmit=${handleSubmit} isLoading=${isLoading} />
          </div>

          <div className="lg:sticky lg:top-8">
            <${ResultsPanel} mode=${mode} isLoading=${isLoading} result=${result} />
          </div>
        </section>
      </main>
    </div>
  `;
}