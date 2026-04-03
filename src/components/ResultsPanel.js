import { html } from '../jsx.js';

function LoadingSkeleton() {
  return html`
    <div className="space-y-4 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/95 p-4 shadow-md sm:p-6">
      <div className="h-6 w-40 animate-pulse rounded bg-white/10"></div>
      <div className="grid gap-3">
        ${[1, 2, 3].map((item) => html`
          <div key=${item} className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]/70 p-4">
            <div className="h-4 w-28 animate-pulse rounded bg-white/10"></div>
            <div className="mt-3 h-3 w-full animate-pulse rounded bg-white/5"></div>
            <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-white/5"></div>
          </div>
        `)}
      </div>
    </div>
  `;
}

function EmptyState({ mode }) {
  return html`
    <div className="rounded-[var(--radius-lg)] border border-dashed border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 p-6 text-center shadow-sm sm:p-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--primary))]/10 text-2xl text-[hsl(var(--primary))]">🗺️</div>
      <h3 className="mt-4 text-lg font-semibold text-white">${mode === 'known' ? 'Your roadmap will appear here' : 'Your best-fit paths will appear here'}</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[hsl(var(--muted))]">
        ${mode === 'known'
          ? 'Choose a goal, add your current skills, and pathpilot will generate a step-by-step plan with resources, timing, and practical advice.'
          : 'Add your current skills and time availability to discover 2–3 career directions that realistically fit your strengths.'}
      </p>
    </div>
  `;
}

function GoalResult({ result }) {
  return html`
    <div className="space-y-4 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/95 p-4 shadow-md sm:p-6">
      <div className="rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[linear-gradient(135deg,hsl(var(--primary))/0.18,hsl(var(--background))/1)] p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">${result.icon}</span>
              <h3 className="text-xl font-semibold text-white">${result.goal} Roadmap</h3>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[hsl(var(--muted))]">${result.overview}</p>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--primary))]/30 bg-[hsl(var(--primary))]/10 px-4 py-3 text-right">
            <div className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--primary))]">Estimated time</div>
            <div className="mt-1 font-semibold text-white">${result.estimatedTime}</div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[hsl(var(--primary))]/12 px-3 py-1 text-xs font-medium text-[hsl(var(--primary))]">Skill level: ${result.level}</span>
          <span className="rounded-full bg-[hsl(var(--secondary))]/12 px-3 py-1 text-xs font-medium text-[hsl(var(--secondary))]">${result.timeLabel}</span>
        </div>
        <p className="mt-4 text-sm leading-6 text-[hsl(var(--foreground))]">${result.focusNote}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr,0.9fr]">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--muted))]">Step-by-step roadmap</h4>
          ${result.steps.map((step) => html`
            <div key=${step.id} className="group rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--primary))]/40">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))]/12 text-sm font-semibold text-[hsl(var(--primary))]">${step.id}</div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h5 className="font-semibold text-white">${step.title}</h5>
                    <span className="rounded-full border border-[hsl(var(--border))] px-2 py-0.5 text-[11px] text-[hsl(var(--muted))]">${step.weekRange}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted))]">${step.detail}</p>
                </div>
              </div>
            </div>
          `)}
        </div>

        <div className="space-y-4">
          <div className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--muted))]">Recommended resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--foreground))]">
              ${result.resources.map((resource) => html`<li key=${resource} className="rounded-xl border border-[hsl(var(--border))] px-3 py-2">${resource}</li>`)}
            </ul>
          </div>

          <div className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--muted))]">Tips</h4>
            <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--foreground))]">
              ${result.tips.map((tip) => html`<li key=${tip} className="flex gap-2"><span className="text-[hsl(var(--primary))]">•</span><span>${tip}</span></li>`)}
            </ul>
          </div>

          <div className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--muted))]">What to avoid</h4>
            <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--foreground))]">
              ${result.avoid.map((item) => html`<li key=${item} className="flex gap-2"><span className="text-[hsl(var(--destructive))]">•</span><span>${item}</span></li>`)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function SuggestionResult({ result }) {
  const comparisonLabels = {
    bestForFastFeedback: 'Fastest visual feedback',
    bestForStructuredAnalysis: 'Best for analytical decision-making',
    bestForSystemDefense: 'Best for systems and defense mindset',
    bestForCreativity: 'Best for creativity',
    bestForFutureTech: 'Best for future tech'
  };

  return html`
    <div className="space-y-4 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/95 p-4 shadow-md sm:p-6">
      <div className="rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[linear-gradient(135deg,hsl(var(--primary))/0.18,hsl(var(--background))/1)] p-5">
        <h3 className="text-xl font-semibold text-white">Suggested career paths</h3>
        <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted))]">${result.profileSummary}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        ${result.suggestions.map((item, index) => html`
          <div key=${item.id} className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--primary))]/40 hover:shadow-md">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">${item.icon}</span>
                <div>
                  <h4 className="font-semibold text-white">${item.name}</h4>
                  <div className="text-xs text-[hsl(var(--muted))]">Option ${index + 1}</div>
                </div>
              </div>
              <span className="rounded-full bg-[hsl(var(--primary))]/12 px-3 py-1 text-xs font-medium text-[hsl(var(--primary))]">Match score ${item.score}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[hsl(var(--muted))]">${item.reason}</p>
            <p className="mt-3 text-sm leading-6 text-[hsl(var(--foreground))]">${item.overview}</p>
            <div className="mt-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/50 p-3">
              <div className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--muted))]">Why it suits you</div>
              <p className="mt-2 text-sm leading-6 text-[hsl(var(--foreground))]">${item.pace}</p>
            </div>
            <div className="mt-4">
              <div className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--muted))]">Strengths</div>
              <ul className="mt-2 space-y-2 text-sm text-[hsl(var(--foreground))]">
                ${item.strengths.map((strength) => html`<li key=${strength} className="flex gap-2"><span className="text-[hsl(var(--primary))]">•</span><span>${strength}</span></li>`)}
              </ul>
            </div>
          </div>
        `)}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--muted))]">Comparison between options</h4>
          <div className="mt-3 space-y-3">
            ${Object.entries(result.comparison).map(([key, value]) => html`
              <div key=${key} className="rounded-xl border border-[hsl(var(--border))] p-3 text-sm text-[hsl(var(--foreground))]">
                <span className="font-semibold text-white">${comparisonLabels[key] || key}:</span> ${value}
              </div>
            `)}
          </div>
        </div>

        <div className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--muted))]">Starter resources</h4>
          <div className="mt-3 space-y-3">
            ${result.suggestions.map((item) => html`
              <div key=${item.name} className="rounded-xl border border-[hsl(var(--border))] p-3">
                <div className="font-medium text-white">${item.name}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  ${item.resources.map((resource) => html`<span key=${resource} className="rounded-full bg-[hsl(var(--primary))]/12 px-3 py-1 text-xs text-[hsl(var(--primary))]">${resource}</span>`)}
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function ResultsPanel({ mode, isLoading, result }) {
  if (isLoading) return html`<${LoadingSkeleton} />`;
  if (!result) return html`<${EmptyState} mode=${mode} />`;
  if (result.error) {
    return html`
      <div className="rounded-[var(--radius-lg)] border border-[hsl(var(--destructive))]/40 bg-[hsl(var(--destructive))]/10 p-5 text-sm text-[hsl(var(--destructive))] shadow-sm">
        ${result.error}
      </div>
    `;
  }
  return mode === 'known'
    ? html`<${GoalResult} result=${result} />`
    : html`<${SuggestionResult} result=${result} />`;
}